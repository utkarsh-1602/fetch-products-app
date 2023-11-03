import { createProduct, getAllProducts } from "@/prisma/product"

export default async function handle(req, res) {

    try {
        switch (req.method) {
            case 'POST': {
                const { image, title, price, category } = req.body;
                const new_product = await createProduct(image, title, price, category)
                return res.status(201).json(new_product)
            }

            case 'GET': {
                const products = await getAllProducts()
                return res.status(201).json(products)
            }

            case 'DELETE': {
                const { id } = JSON.parse(req.query)
                await deleteProduct(id)
                return res.status(200).json({ message: "Product deleted Successfully" })
            }

        }
    }
    catch (error) {

    }

}