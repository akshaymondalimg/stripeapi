import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    product: { type: String },
    price: { type: Number }
}, {
    timestamps: true,
    versionKey: false
});

export default mongoose.model('product', productSchema);