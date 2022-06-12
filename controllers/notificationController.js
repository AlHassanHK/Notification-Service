const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const ORDER_CONFIRMATION_TEMPLATE_ID = 'd-ed81156a271e4de6bddafd1e9a2e0458';
const ORDER_SHIPMENT_TEMPLATE_ID = 'd-b48280acb5754d648e0c2fe06a1b2e81';

const sendEmail = (email, orderId, templateId) => {
  return sgMail.send({
      to: email,
      from: 'giurabbitmart@gmail.com',
      templateId: templateId,
      dynamicTemplateData: { orderId }
    });
}

exports.sendOrderConfirmationNotification = async (req, res) => {
  const { email, orderId } = req.body;
  
  sendEmail(email, orderId, ORDER_CONFIRMATION_TEMPLATE_ID)
    .then((response) => {
      res.status(200).json({ message: 'email sent' });
    })
    .catch((error) => {
      console.log(error)
      res.status(400).send();
    });
};


exports.sendOrderShipmentNotification = async (req, res) => {
  const { email, orderId } = req.body;

  sendEmail(email, orderId, ORDER_SHIPMENT_TEMPLATE_ID)
    .then((response) => {
      res.status(200).json({ message: 'email sent' });
    })
    .catch((error) => {
      console.log(error)
      res.status(400).send();
    });
};
