const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema ({
    comment: { type: String, required: true },
    patient: { type: Schema.Types.ObjectId, ref: 'Patient' },
    date: { type: Date, required: true }
})

const DoctorSession = mongoose.model('DoctorSession', sessionSchema);
module.exports = DoctorSession;