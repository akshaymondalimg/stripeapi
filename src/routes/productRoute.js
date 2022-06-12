// global import
import express from 'express';
// local import
import { product } from '../controllers/index.js'

const router = express.Router();

router.post('/add_product', product.addProduct);
router.get('/get_all_products', product.getProduct);
router.get('/get_product/:id', product.getSingleProduct);
router.put('/update_product/:id', product.updateProduct);
router.delete('/delete_product/:id', product.deleteProduct);

export default router;