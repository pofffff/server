const { createOrderEmail } = require('./modules/orderEmail'),
  {
    createOrderConfirmationEmail,
  } = require('./modules/orderConfirmationEmail');

exports.order = async (req, res) => {
  let order = req.body;
  order.charging_cable = order.charging_cable ? 'Ja' : ' Nej';
  order.consultation = order.consultation ? 'Ja' : ' Nej';

  try {
    await createOrderEmail(order);
    await createOrderConfirmationEmail(order);

    res.status(200).send({ message: 'Din beställning har skickats' });
  } catch (error) {
    console.log(error);

    res.status(500).send({
      error:
        'Tyvärr något gick fel, vänligen kontakta oss per telefon eller email',
    });
  }
  
};
