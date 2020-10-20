const mongoose = require('mongoose');
const router = require('express').Router();
const auth = require('../auth');
const Members = mongoose.model('Members');


//GET current route (required, only authenticated users have access)
router.get('/', auth.required, (req, res, next) => {

  return Members.find({})
    .then((members) => {
      return res.json({ members: members.toAuthJSON() });
    });
});

router.post('/', auth.optional, (req, res, next) => {
    const newPerson = new Members({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        work_place: req.body.work_place,
        phone_number: req.body.phone_number,
        team_members: req.body.team_members
    })
    if (newPerson.first_name === undefined) {
         return res.status(400).json({
            error: "first name missing"
        })
    }  
    else if(newPerson.last_name === undefined) {
        return res.status(400).json({
            error: "last name missing"
        })
    }
    else if(newPerson.phone_number === undefined) {
         return res.status(400).json({
            error: "phone number missing"
        })        
    }
    
    newPerson.save()
    .then(savedPerson => savedPerson.toJSON())
    .then(savedAndFormattedPerson => {
      res.json(savedAndFormattedPerson)
    })
    .catch(error => next(error))
});

module.exports = router;
