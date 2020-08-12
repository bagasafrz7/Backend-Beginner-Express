const { getAllProduct, getProductById, postProduct, patchProduct, deleteProduct } = require('../model/product')
const helper = require('../helper/index.js');
const { response } = require('express');

module.exports = {
    getAllProduct: async (request, response) => {
        try {
            const result = await getAllProduct();
            return helper.response(response, 200, "Success Get Product", result)
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    getProductById: async (request, response) => {
        try {
            // const id = request.params.id
            const { id } = request.params
            const result = await getProductById(id)
            if (result.length > 0) {
                return helper.response(response, 200, "Success Get Product By Id", result)
                // console.log(result)
            } else {
                return helper.response(response, 400, `Product By Id: ${id} Not Foud`)
            }
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)

        }
    },
    postProduct: async (request, response) => {
        try {
            const { category_id, product_name, product_harga, product_image, product_status } = request.body
            const setData = {
                category_id,
                product_name,
                product_harga,
                product_image,
                product_created_at: new Date(),
                product_status
            }
            const result = await postProduct(setData)
            return helper.response(response, 201, "Product Created", result)
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
        // const setData = {
        //  Kiri name dari database | Kanan dari postman
        //     product_name: request.body.product_name,
        //     product_harga: request.body.product_harga,
        //     product_created_at: new Date(),
        //     product_status: request.body.product_status
        // }
        // console.log(setData)
        // response.send('Post Berhasil');
    },
    patchProduct: async (request, response) => {
        try {
            const { id } = request.params
            const { category_id, product_name, product_harga, product_image, product_status } = request.body
            const setData = {
                category_id,
                product_name,
                product_harga,
                product_image,
                product_updated_at: new Date(),
                product_status
            }
            const checkId = await getProductById(id)
            if (checkId.length > 0) {
                const result = await patchProduct(setData, id)
                return helper.response(response, 201, "Product Updated", result)
            } else {
                return helper.response(response, 400, `Product By Id: ${id} Not Foud`)
            }
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    deleteProduct: async (request, response) => {
        try {
            const { id } = request.params
            const checkId = await getProductById(id)
            if (checkId.length > 0) {
                const result = await deleteProduct(id)
                return helper.response(response, 201, "Product Deleted", result)
            } else {
                return helper.response(response, 400, `Product By Id: ${id} Not Foud`)
            }
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    }
}