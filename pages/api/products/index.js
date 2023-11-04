import { createProduct, getAllProducts, deleteProduct, getSpecificProduct } from "@/prisma/product";

export default async function handle(req, res) {
    console.log("hello world");

    try {
        switch (req.method) {
            case 'POST': {
                const { image, title, price, category } = req.body;
                const new_product = await createProduct(image, title, price, category);
                return res.status(201).json(new_product);
            }

            case 'GET': {
                const products = await getAllProducts();
                return res.status(200).json(products); // Changed status code to 200 for a successful GET request.
            }

            case 'DELETE': {
                const { id } = req.query;
                const getProduct = await getSpecificProduct(id);
                await deleteProduct(id);
                return res.status(200).json({ "Product Deleted": getProduct });
            }

        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" }); // Return a 500 status code for errors.
    }
}