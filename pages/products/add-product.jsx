import useAddProduct from "@/hooks/useAddProduct"
import { useRouter } from "next/router"
import { useState } from "react"

const addProduct = () => {

    const addProduct = useAddProduct('/api/products')
    const router = useRouter();

    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')


    const handleSubmit = (e) => {
        console.log(title, image, price, description, category)
        e.preventDefault();
        const newProduct = {
            title: title,
            image: image,
            price: parseFloat(price),
            description: description,
            category: category
        }
        addProduct(newProduct)
        router.push('/api/products')
        console.log("Submit")
    }

    return (
        <>
            <div class="flex justify-center items-center h-screen bg-purple-900">
                <div class="max-w-md mx-auto bg-white p-8 rounded shadow-lg lg:w-1/2">
                    <h2 class="text-2xl font-semibold mb-4 text-black ">Add Product 🛍️</h2>
                    <form onSubmit={handleSubmit}>
                        <div class="mb-4">
                            <label for="title" class="block text-gray-600">Title</label>
                            <input
                                onChange={(e) => setTitle(e.target.value)}
                                type="text" id="title" name="title" class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-400 text-black" />
                        </div>
                        <div class="mb-4">
                            <label for="category" class="block text-gray-600">Category</label>
                            <select
                                onChange={(e) => setCategory(e.target.value)}
                                value={category}
                                id="category" name="category" class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-400 text-black bg-purple-100">
                                <option value="">Select a Category</option>
                                <option value="option1">Electronics</option>
                                <option value="option2">Clothes</option>
                                <option value="option3">Food</option>
                                <option value="option4">Books</option>
                            </select>
                        </div>
                        <div class="mb-4">
                            <label for="description" class="block text-gray-600">Description</label>
                            <textarea
                                onChange={(e) => setDescription(e.target.value)}
                                id="description" name="description" class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-400 text-black" rows="4"></textarea>
                        </div>
                        <div class="mb-4">
                            <label for="price" class="block text-gray-600">Price</label>
                            <input
                                onChange={(e) => setPrice(e.target.value)}
                                type="number" id="price" name="price" class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-400 text-black" />
                        </div>
                        <div class="mb-4">
                            <label for="image" class="block text-gray-600">Image</label>
                            <input type="file" id="image" name="image" class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-400 text-black" />
                        </div>
                        <div class="mt-4">
                            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transform transition-transform duration-300 hover:scale-105">Submit</button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default addProduct