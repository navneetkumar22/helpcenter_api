import mongoose from "mongoose";

const cardModel = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    }
},
    {
        timestamps: true
    }
)

export default new mongoose.model('Card', cardModel);