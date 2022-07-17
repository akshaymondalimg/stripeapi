import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    first_name: {
        type: String,
        default: ''
    },
    last_name: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    mobile: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    }
},
    {
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.model('user', userSchema);