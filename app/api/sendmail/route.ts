import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const {
      firstName,
      lastName,
      email,
      contactNumber,
      homeAddress,
      countryAddress,
      passportNumber,
      passportExpiry,
      dob,
      bankName,
      accountNumber,
      bankBranch,
      bankCountry,
      iban,
    } = await request.json();

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // User confirmation email
    const userMailOptions = {
      from: `"e-broker" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Welcome to e-broker – Registration Confirmation",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #f4f4f4; border-radius: 10px;">
          <!-- Header -->
          <div style="background-color: #002147; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: #ffffff; margin: 0;">E-Broker</h1>
            <p style="color: #ffffff; font-size: 16px;">Empowering Your Journey</p>
          </div>
          
          <!-- Content Section -->
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #333;">Hello ${firstName} ${lastName},</h2>
            <p style="color: #555; line-height: 1.6;">
              Thank you for registering with <strong>E-Broker</strong>! We are delighted to have you on board and excited to support you on your journey.
            </p>
            <p style="color: #555; line-height: 1.6;">
              Below are the details you provided during registration. Please review them for accuracy, and don’t hesitate to reach out if any updates are needed.
            </p>
    
            <!-- User Details -->
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px; background-color: #f9f9f9; border-radius: 10px; overflow: hidden;">
              <tbody>
                <tr style="background-color: #002147; color: #fff;">
                  <th style="padding: 10px; text-align: left;">Field</th>
                  <th style="padding: 10px; text-align: left;">Details</th>
                </tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;">${firstName} ${lastName}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Contact Number:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;">${contactNumber}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Home Address:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;">${homeAddress}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Country Address:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;">${countryAddress}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Passport Number:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;">${passportNumber}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Passport Expiry:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;">${passportExpiry}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Date of Birth:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;">${dob}</td></tr>
              </tbody>
            </table>
    
            <!-- Additional Message -->
            <p style="color: #555; line-height: 1.6; margin-top: 20px;">
              Our team is currently reviewing your submission, and we will reach out shortly with the next steps. 
              In the meantime, if you have any questions or need assistance, feel free to contact us.
            </p>
    
            <p style="color: #555; line-height: 1.6;">
              Welcome to the E-Broker family! We look forward to assisting you in achieving your goals.
            </p>
    
            <!-- Call to Action -->
            <div style="text-align: center; margin-top: 30px;">
              <a href="https://blac-co.com" style="background-color: #002147; color: white; text-decoration: none; padding: 12px 25px; border-radius: 5px; font-size: 16px; display: inline-block;">
                Visit Our Website
              </a>
            </div>
    
            <!-- Footer -->
            <p style="color: #888; text-align: center; font-size: 12px; margin-top: 30px;">
              If you need further assistance, please reach out to us at 
              <a href="mailto:support@blacandco.com" style="color: #002147;">support@blacandco.com</a>.  
            </p>
          </div>
        </div>
      `,
    };
    

    // Admin notification email
    const adminMailOptions = {
      from: `"E-Broker" <${process.env.EMAIL_USER}>`,
      to: "afsalasif138@gmail.com",
      subject: "New User Registration",
      html: `
        <p>New user registered:</p>
        <ul>
          <li><strong>Name:</strong> ${firstName} ${lastName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Contact Number:</strong> ${contactNumber}</li>
          <li><strong>Home Address:</strong> ${homeAddress}</li>
          <li><strong>Country Address:</strong> ${countryAddress}</li>
          <li><strong>Passport Number:</strong> ${passportNumber}</li>
          <li><strong>Passport Expiry:</strong> ${passportExpiry}</li>
          <li><strong>Date of Birth:</strong> ${dob}</li>
        </ul>
        <p><strong>Bank Details:</strong></p>
        <ul>
          <li><strong>Bank Name:</strong> ${bankName}</li>
          <li><strong>Account Number:</strong> ${accountNumber}</li>
          <li><strong>Bank Branch:</strong> ${bankBranch}</li>
          <li><strong>Bank Country:</strong> ${bankCountry}</li>
          <li><strong>IBAN:</strong> ${iban}</li>
        </ul>
      `,
    };

    // Send both emails
    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(adminMailOptions);

    return NextResponse.json({ message: "Emails sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
