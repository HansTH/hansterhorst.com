const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: `${process.env.MAIL_HOST}`,
  port: `${process.env.MAIL_PORT}`,
  secure: false,
  auth: {
    user: `${process.env.MAIL_USER}`,
    pass: `${process.env.MAIL_PASS}`,
  },
});

exports.handler = async (event, _context) => {
  const body = JSON.parse(event.body);
  // validate the data coming in, is correct
  const requiredFields = ['name', 'email', 'message'];

  if (body.subject) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Boop Biep Baap good bye!' }),
    };
  }

  for (let field of requiredFields) {
    if (!body[field]) {
      switch (field) {
        case 'name':
          field = '"Uw naam"';
          break;
        case 'email':
          field = '"Uw email"';
          break;
        case 'message':
          field = '"Uw bericht"';
          break;
        default:
          break;
      }

      return {
        statusCode: 400,
        body: JSON.stringify({
          message: `Oops! U heeft de ${field} veld niet ingevuld!`,
        }),
      };
    }
  }

  // send mail with defined transport object
  await transporter.sendMail({
    from: `${body.name} <${body.email}>`, // sender address
    to: `${process.env.MAIL_USER}`, // list of receivers
    subject: `Contactformulier Website`, // Subject line
    text: `${body.name}, ${body.email}, ${body.message}`, // plain text body
    html: `<b>${body.message}</b>`, // html body
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Gelukt' }),
  };
};
