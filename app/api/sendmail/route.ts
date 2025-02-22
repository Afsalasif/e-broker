import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
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
      gender,
      maritalStatus,
      employmentStatus,
      educationLevel,
      accountHolderName,
      businessPhoneNumber,
      moveToDubai,
      buildClientBaseInterest,
      comfortableWithClients,
      dubaiMarketKnowledge,
      realEstateCareerInterest,
      realEstateExperience,
      remoteWorkExperience,
      stableInternetAccess,
      swiftCode,
      passport,
      picture,
    } = await request.json();
    // Create transporter using Gmail's SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,  // Gmail SMTP host
      port: parseInt(process.env.EMAIL_PORT || "465"),  // Use port 465 for SSL
      secure: true,  // Use true for SSL (465 port)
      auth: {
        user: process.env.EMAIL_USER,  // Your Gmail address
        pass: process.env.EMAIL_PASS,  // Your Gmail app-specific password
      },
    });

    // User confirmation email
    const userMailOptions = {
      from: `"e-broker" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Welcome to e-broker Registration Confirmation",
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
              Below are the details you provided during registration. Please review them for accuracy, and don&apos;t hesitate to reach out if any updates are needed.
            </p>
      
            <!-- User Details -->
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px; background-color: #f9f9f9; border-radius: 10px; overflow: hidden;">
              <tbody>
                <tr style="background-color: #002147; color: #fff;">
                  <th style="padding: 10px; text-align: left;">Field</th>
                  <th style="padding: 10px; text-align: left;">Details</th>
                </tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Full Name:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;">${firstName} ${lastName}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Gender:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;">${gender}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Contact Number:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;">${phone}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;">${email}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Home Address:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;">${homeAddress}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Country Address:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;">${countryAddress}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Passport Number:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;">${passportNumber}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Passport Expiry:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;">${passportExpiry}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Date of Birth:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;">${dob}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Marital Status:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;">${maritalStatus}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Employment Status:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;">${employmentStatus}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Education Level:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;">${educationLevel}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Business Phone Number:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;">${businessPhoneNumber}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Bank Name:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;">${bankName}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Account Number:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;">${accountNumber}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>IBAN:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;">${iban}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Account Holder Name:</strong></td><td style="padding: 10px; border-bottom: 1px solid #ddd;">${accountHolderName}</td></tr>
              </tbody>
            </table>
      
            <p style="color: #555; line-height: 1.6; margin-top: 20px;">
              Our team is currently reviewing your submission, and we will reach out shortly with the next steps. In the meantime, if you have any questions or need assistance, feel free to contact us.
            </p>
            
            <p style="color: #555; line-height: 1.6;">
              Welcome to the E-Broker family! We look forward to assisting you in achieving your goals.
            </p>
    
            <!-- Questions Section -->
            <h1 style="color: #333; margin-top: 40px;">Questions</h1>
            <ul style="color: #555; line-height: 1.6; padding-left: 20px;">
              <li><strong>What is your education level?:</strong> ${educationLevel}</li>
              <li><strong>What best describes your current employment status?:</strong> ${employmentStatus}</li>
              <li><strong>Do you have plans to move to Dubai in the future?:</strong> ${moveToDubai}</li>
              <li><strong>Have you previously worked remotely or are you currently working remotely?:</strong> ${remoteWorkExperience}</li>
              <li><strong>Are you interested in pursuing a career in real estate?:</strong> ${realEstateCareerInterest}</li>
              <li><strong>Do you have experience in the real estate industry?:</strong> ${realEstateExperience}</li>
              <li><strong>Are you comfortable working with clients from different countries?:</strong> ${comfortableWithClients}</li>
              <li><strong>Do you have any knowledge of Dubai's real estate market?:</strong> ${dubaiMarketKnowledge}</li>
              <li><strong>Do you have access to a stable internet connection and a laptop/PC for remote work?:</strong> ${stableInternetAccess}</li>
              <li><strong>Would you be interested in building your own real estate client base through the E-Broker network?:</strong> ${buildClientBaseInterest}</li>
            </ul>
    
            <div style="text-align: center; margin-top: 30px;">
              <a href="https://e-broker.world" style="background-color: #002147; color: white; text-decoration: none; padding: 12px 25px; border-radius: 5px; font-size: 16px; display: inline-block;">
                Visit Our Website
              </a>
            </div>
            
            <p style="color: #888; text-align: center; font-size: 12px; margin-top: 30px;">
              If you need further assistance, please reach out to us at 
              <a href="mailto:info@e-broker.world" style="color: #002147;">info@e-broker.world</a>.  
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
        <p>A new user has registered:</p>
        <ul>
          <li><strong>Name:</strong> ${firstName} ${lastName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Address:</strong> ${homeAddress}</li>
          <li><strong>Nationality:</strong> ${countryAddress}</li>
          <li><strong>Gender:</strong> ${gender}</li>
          <li><strong>marital Status:</strong> ${maritalStatus}</li>
          <li><strong>Date of Birth:</strong> ${dob}</li>
          <li><strong>Passport Number:</strong> ${passportNumber}</li>
          <li><strong>Passport Expiry:</strong> ${passportExpiry}</li>
          <li><strong>Employment Status:</strong> ${employmentStatus}</li>
          <li><strong>Education Level:</strong> ${educationLevel}</li>
          <li><strong>Business Phone:</strong> ${businessPhoneNumber}</li>
          <li><strong>Bank Name:</strong> ${bankName}</li>
          <li><strong>Account Holder:</strong> ${accountHolderName}</li>
          <li><strong>Account Number:</strong> ${accountNumber}</li>
          <li><strong>IBAN:</strong> ${iban}</li>
          <li><strong>Passport Upload:</strong> ${passport.name}</li>
          <li><strong>Picture Upload:</strong> ${picture.name}</li>
        </ul>
        <h1>questions</h1>
        <ul>
          <li>What is your education level?:</strong> ${educationLevel}</li>
          <li><strong>What best describes your current employment status?:</strong> ${employmentStatus}</li>
          <li><strong>Do you have plans to move to Dubai in the future?:</strong> ${moveToDubai}</li>
          <li><strong>Have you previously worked remotely or are you currently working remotely?:</strong> ${remoteWorkExperience}</li>
          <li><strong>Are you interested in pursuing a career in real estate?:</strong> ${realEstateCareerInterest}</li>
          <li><strong>Do you have experience in the real estate industry?:</strong> ${realEstateExperience}</li>
          <li><strong>Are you comfortable working with clients from different countries?</strong> ${comfortableWithClients}</li>
          <li><strong>Do you have any knowledge of Dubai's real estate market</strong> ${dubaiMarketKnowledge}</li>
          <li><strong>Do you have access to a stable internet connection and a laptop/PC for remote work?</strong> ${stableInternetAccess}</li>
          <li><strong>Would you be interested in building your own real estate client base through the E BROKER network?:</strong> ${buildClientBaseInterest}</li>
        </ul>
        
      `,
    };
    

    // Send both emails
    await transporter.sendMail(userMailOptions).catch(err => console.error("User email failed:", err));
    await transporter.sendMail(adminMailOptions).catch(err => console.error("Admin email failed:", err));

    return NextResponse.json({ message: "Emails sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
