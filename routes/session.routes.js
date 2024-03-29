const express = require('express');
const router = express.Router();
const Session = require('../models/DoctorSession.model');
const Patient = require('../models/Patient.model');

// create Session

router.post('/create', (req, res, next) => {
    const { comment, patient } = req.body;

    Session.create({comment, patient, date: Date.now()})
        .then((newSession) => {
            Patient.updateOne({_id: patient}, {$addToSet: {sessions: newSession._id}}, {new: true})
            .then(() => {
                return res.status(200).json(newSession)
            })
            .catch(error => res.status(500).json(error))
        })
        .catch(error => res.status(500).json(error))
})

// delete Session

router.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    Session.deleteOne({ _id: id })
    .then((session) => {
        Patient.updateOne(session.patient, { $pull: { sessions: id } })
        .then(() => {
            return res.status(200).json({message: "Session deleted"});
        })
    })
})

// See Session

router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    Session.findOne({ _id: id })
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(error))
})

module.exports = router;