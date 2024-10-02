const express = require('express');
const Stripe = require('stripe');
const bodyParser = require('body-parser');
const { createClient } = require('@supabase/supabase-js');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
require('dotenv').config();

const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// Initialize Supabase client
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Stripe requires the raw body to construct the event
app.post('/webhook', bodyParser.raw({ type: 'application/json' }), async (req, res) => {
    const sig = req.headers['stripe-signature'];

    let event;

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
        console.error(`⚠️  Webhook signature verification failed.`, err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the checkout.session.completed event
    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;

        const quantity = session.metadata.quantity;
        const paymentId = session.id;
        const customerEmail = session.customer_details.email;

        // Generate license keys
        const licenseKeys = [];
        for (let i = 0; i < quantity; i++) {
            const licenseKey = crypto.randomBytes(16).toString('hex').toUpperCase();
            licenseKeys.push(licenseKey);
        }

        // Insert license keys into Supabase
        const { data, error } = await supabase
            .from('licenses')
            .insert(
                licenseKeys.map((key) => ({
                    license_key: key,
                    is_active: true,
                    stripe_payment_id: paymentId,
                }))
            );

        if (error) {
            console.error('Error inserting into Supabase:', error);
            return res.status(500).send('Internal Server Error');
        }

        // Send email to the user with license keys
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: customerEmail,
            subject: 'Your Acro-Ally License Keys',
            text: `Thank you for your purchase! Here are your license keys:\n\n${licenseKeys.join(
                '\n'
            )}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.error('Error sending email:', error);
            }
            console.log('Email sent:', info.response);
        });
    }

    res.json({ received: true });
});

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));