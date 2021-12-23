import mongoose from 'mongoose';

const uploadSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});

const uploadModel = mongoose.model('Upload', uploadSchema);

export default uploadModel;
