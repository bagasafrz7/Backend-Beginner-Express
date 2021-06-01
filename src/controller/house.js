const helper = require('../helper/index')
const jwt = require('jsonwebtoken')
const qs = require('querystring')
const fs = require('fs')
const { getDataHouse, getHouseCount } = require('../model/house')

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
    getHouse: async (request, response) => {
        let { page, limit, sort } = request.query

        if (page === undefined || page === '') {
            page = 1
        } else {
            page = parseInt(page)
        }

        if (limit === undefined || limit === '') {
            limit = 10
        } else {
            limit = parseInt(limit)
        }

        if (sort === undefined || sort === '') {
            sort = 'rumah_id'
        }

        let totalData = await getHouseCount();
        let totalPage = Math.ceil(totalData / limit)
        let offSide = page * limit - limit
        let prevLink = getPrevLink(page, request.query)
        let nextLink = getNextLink(page, totalPage, request.query)
        const pageInfo = {
            page,
            totalPage,
            limit,
            totalData,
            prevLink: prevLink && `${process.env.IP}:${process.env.PORT}/house?${prevLink}`, nextLink: nextLink && `${process.env.IP}:${process.env.PORT}/house?${nextLink}`
        }
        try {
            const result = await getDataHouse(sort, limit, offSide);
            if (result.length > 0) {
                const newData = {
                    result,
                    pageInfo
                }
                // client.setex(`getdatahouse:${JSON.stringify(request.query)}`, 3600, JSON.stringify(newData))
                return helper.response(response, 200, "Success Get Data", result, pageInfo)
            } else {
                return helper.response(response, 404, "Data Not Foud", result, pageInfo)
            }
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
}