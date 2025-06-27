# EmailJS Setup Guide

This guide will help you set up EmailJS to make your contact form functional.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Design your email template with these variables:
   ```
   From: {{from_name}} ({{from_email}})
   To: {{to_name}}
   Subject: New Contact Form Message from {{from_name}}
   
   Message:
   {{message}}
   ```
4. Save the template and note down your **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

## Step 5: Update Configuration

1. Open `src/emailjs-config.js`
2. Replace the placeholder values with your actual credentials:
   ```javascript
   export const EMAILJS_CONFIG = {
     SERVICE_ID: 'your_actual_service_id',
     TEMPLATE_ID: 'your_actual_template_id', 
     PUBLIC_KEY: 'your_actual_public_key',
   };
   ```

## Step 6: Test Your Form

1. Start your development server: `npm start`
2. Go to the contact section
3. Fill out the form and submit
4. Check your email to see if the message was received
5. Check the browser console for any error messages

## Troubleshooting

### Common Issues:

1. **"Service not found" error**: Double-check your Service ID
2. **"Template not found" error**: Double-check your Template ID  
3. **"Invalid public key" error**: Double-check your Public Key
4. **Form not submitting**: Check browser console for JavaScript errors

### Security Notes:

- The Public Key is safe to expose in client-side code
- Never share your Private Key (if you have one)
- Consider rate limiting on your form to prevent spam

## EmailJS Free Plan Limits

- 200 emails per month
- 2 email services
- 5 email templates

For more emails or features, consider upgrading to a paid plan.

## Support

If you encounter issues:
1. Check the [EmailJS documentation](https://www.emailjs.com/docs/)
2. Visit the [EmailJS community forum](https://community.emailjs.com/)
3. Contact EmailJS support through their website 