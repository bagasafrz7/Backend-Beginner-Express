const { getAllProduct, getProduct, getProductByName, getProductCount, getProductCountByName, getProductById, postProduct, patchProduct, deleteProduct } = require('../model/product')
const qs = require('querystring')
const helper = require('../helper/index.js');
const { response } = require('express');

const getPrevLink = (page, currentQuery) => {
    if (page > 1) {
        const generatedPage = {
            page: page - 1
        }
        const resultPrevLink = { ...currentQuery, ...generatedPage }
        return qs.stringify(resultPrevLink)
    } else {
        return null
    }
}

const getNextLink = (page, totalPage, currentQuery) => {
    if (page < totalPage) {
        const generatedPage = {
            page: page + 1
        }
        const resultNextLink = { ...currentQuery, ...generatedPage }
        return qs.stringify(resultNextLink)
    } else {
        return null
    }
}

module.exports = {
    getAllProduct: async (request, response) => {
        let { page, limit, sort } = request.query

        if (page === undefined || page === '') {
            page = 1
        } else {
            page = parseInt(page)
        }

        if (limit === undefined || limit === '') {
            limit = 9
        } else {
            limit = parseInt(limit)
        }


        if (sort === undefined || sort === '') {
            sort = 'product_id'
        }

        let totalData = await getProductCount();
        let totalPage = Math.ceil(totalData / limit)
        let offSide = page * limit - limit
        let prevLink = getPrevLink(page, request.query)
        let nextLink = getNextLink(page, totalPage, request.query)
        const pageInfo = {
            page, // page: page
            totalPage,
            limit,
            totalData,
            prevLink: prevLink && `http://127.0.0.1:3001/product?${prevLink}`, nextLink: nextLink && `http://127.0.0.1:3001/product?${nextLink}`
        }
        try {
            const result = await getProduct(sort, limit, offSide);
            if (result.length > 0) {
                return helper.response(response, 200, "Success Get Product", result, pageInfo)
            } else {
                return helper.response(response, 404, "Product Not Foud", result, pageInfo)
            }
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    getProductByName: async (request, response) => {
        let { search } = request.query
        let limit = 50
        let totalData = await getProductCountByName(search)
        try {
            const resultSearch = await getProductByName(search, limit)
            const result = {
                resultSearch,
                totalData
            }
            if (resultSearch.length > 0) {
                return helper.response(response, 200, "Success Get Product By Name", result)
            } else {
                return helper.response(response, 404, `Product By Name: ${search} Not Foud`)
            }
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
                return helper.response(response, 404, `Product By Id: ${id} Not Foud`)
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