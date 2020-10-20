const { WFClient } =  require('witty-flow-sms');
const router = require('express').Router();
const auth = require('../auth');


//GET current route (required, only authenticated users have access)
router.post('/send', auth.optional, (req, res, next) => {
    console.log(req)
  const { body: { message, phone_number } } = req;

const wittySmsClient = new WFClient(process.env.SID, process.env.SECRET);
  wittySmsClient.sendSms('Addy', phone_number,  message)
  .then((data) => {
    return res.json({ data });
  })
  .catch(ee => {
    return res.json({ ee });
  })

//   return Users.findById(id)
//     .then((user) => {
//       if(!user) {
//         return res.sendStatus(400);
//       }
      

//     });
});

module.exports = router;
