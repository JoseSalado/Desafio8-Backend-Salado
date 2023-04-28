import { Router } from "express";
import generateMockproducts from "../utils/mock.utils.js";

const router = Router()

router.get('/', (req, res) => {
    const products = []
    for(let i = 0; i< 100; i++){
        let product = generateMockproducts()
        products.push(product)
    }
    res.json({products})
})

export default router