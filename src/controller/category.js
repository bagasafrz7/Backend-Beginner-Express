const { getAllCategory, getCategoryById, postCategory, patchCategory, deleteCategory } = require('../model/category')
const helper = require('../helper/index.js');
const { response } = require('express');

module.exports = {
    getAllCategory: async (request, response) => {
        try {
            const result = await getAllCategory();
            return helper.response(response, 200, "Success Get Category", result)
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    getCategoryById: async (request, response) => {
        try {
            const { id } = request.params
            const result = await getCategoryById(id)
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