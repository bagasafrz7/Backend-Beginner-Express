const { getAllCategory, getCategoryCount, getCategoryByName, getCategoryCountByName, getCategoryById, postCategory, patchCategory, deleteCategory } = require('../model/category')
const qs = require('querystring')
const helper = require('../helper/index.js');
const { response, request } = require('express');
const redis = require('redis')
const client = redis.createClient()

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
    getAllCategory: async (request, response) => {
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
            sort = 'category_id'
        }

        let totalData = await getCategoryCount();
        let totalPage = Math.ceil(totalData / limit)
        let offSide = page * limit - limit
        let prevLink = getPrevLink(page, request.query)
        let nextLink = getNextLink(page, totalPage, request.query)
        const pageInfo = {
            page, // page: page
            totalPage,
            limit,
            totalData,
            prevLink: prevLink && `http://127.0.0.1:3001/category?${prevLink}`, nextLink: nextLink && `http://127.0.0.1:3001/category?${nextLink}`
        }

        try {
            const result = await getAllCategory(sort, limit, offSide);
            client.set(`getcategory:${JSON.stringify(request.query)}`, JSON.stringify(result))
            if (result.length > 0) {
                return helper.response(response, 200, "Success Get Category", result, pageInfo)
            } else {
                return helper.response(response, 404, "Category Not Foud", result, pageInfo)
            }
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    getCategoryByName: async (request, response) => {
        let { search } = request.query
        let limit = 50
        let totalData = await getCategoryCountByName(search)
        try {
            const resultSearch = await getCategoryByName(search, limit)
            const result = {
                resultSearch, totalData
            }
            client.set(`getsearchcategory:${JSON.stringify(request.query)}`, JSON.stringify(result))
            if (resultSearch.length > 0) {
                return helper.response(response, 200, "Success Get Category By Name", result)
            } else {
                return helper.response(response, 404, `Category By Name: ${search} Not Foud`)
            }
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    getCategoryById: async (request, response) => {
        try {
            const { id } = request.params
            const result = await getCategoryById(id)
            client.setex(`getcategorysearch:${id}`, 3600, JSON.stringify(result))
            if (result.length > 0) {
                return helper.response(response, 200, "Success Get Category By Id", result)
            } else {
                return helper.response(response, 400, `Category By Id: ${id} Not Foud`)
            }
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    postCategory: async (request, response) => {
        try {
            const { category_name, category_status } = request.body

            if (category_name === '') {
                return helper.response(response, 400, "Category Name Cannot Be Empty")
            }

            if (category_status === '') {
                return helper.response(response, 400, "Category Status Cannot Be Empty")
            }

            const setData = {
                category_name,
                category_created_at: new Date(),
                category_status
            }
            const result = await postCategory(setData)
            return helper.response(response, 201, "Category Created", result)
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    patchCategory: async (request, response) => {
        try {
            const { id } = request.params
            const { category_name, category_status } = request.body

            if (category_name === '') {
                return helper.response(response, 400, "Category Name Cannot Be Empty")
            }

            if (category_status === '') {
                return helper.response(response, 400, "Category Status Cannot Be Empty")
            }

            const setData = {
                category_name,
                category_updated_at: new Date(),
                category_status
            }
            const checkId = await getCategoryById(id)
            if (checkId.length > 0) {
                const result = await patchCategory(setData, id)
                return helper.response(response, 201, "Category Updated", result)
            } else {
                return helper.response(response, 400, `Category By Id: ${id} Not Foud`)
            }
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    deleteCategory: async (request, response) => {
        try {
            const { id } = request.params
            const checkId = await getCategoryById(id)
            if (checkId.length > 0) {
                const result = await deleteCategory(id)
                return helper.response(response, 201, "Category Deleted", result)
            } else {
                return helper.response(response, 400, `Category By Id: ${id} Not Foud`)
            }
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    }
}