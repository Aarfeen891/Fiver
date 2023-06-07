const nodemailer = require("nodemailer");

exports.forSeller = async function (first_name, last_name, email) {
  try {
    // create reusable transporter object using the default SMTP transport
    let transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      service: "Gmail",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "sherazabbas669@gmail.com",
        pass: "dyoonnvupsqlgzjy",
      },
    });

    let mailOptions = {
      to: email,
      subject: "Welcome",
      html: `<h1>Hello ${first_name} ${last_name}, welcome to this freelancing site</h1>
            <h2>Your Login Credentials for our portal are given below: (Please do not share with anyone!!)</h2>
            <h3> Email: ${email} </h3>
            <h3>If you have any queries, please contact us at the below number</h3>
            <h2>Thank You!</h2>
            <br>
            <h4>Regards: Website Owner</h4>
            <h4>Phone no: 042-00000000</h4>`,
    };

    // send email with defined transport object
    let info = await transport.sendMail(mailOptions);

    console.log("Email sent successfully", info);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to send email");
  }
};


exports.forContactus = async function ( name, email, subject, phone_no,description) {
  try {
    // create reusable transporter object using the default SMTP transport
    let transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      service: "Gmail",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "sherazabbas669@gmail.com",
        pass: "dyoonnvupsqlgzjy",
      },
    });

    let mailOptions = {
      to: "sherazabbas669@gmail.com",
      subject: `${subject}`,
      html: `<h1> ${name} ,welcome to this freelancing site</h1>
            <h2>Your Login Credentials for our portal are given below: (Please do not share with anyone!!)</h2>
            <h3> Email: ${email} </h3>
            <h3> description: ${description} </h3> 
            <h4>Phone no: ${phone_no} </h4>`,
    };

    // send email with defined transport object
    let info = await transport.sendMail(mailOptions);

    console.log("Email sent successfully", info);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to send email");
  }
};




