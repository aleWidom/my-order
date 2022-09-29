/**
 *
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */


exports.handler = async (event) => {

    var mysql = require('mysql');

    var connection = mysql.createConnection({
        host: 'myorderdatabase.cluster-ctulrcqrkejd.us-east-1.rds.amazonaws.com',
        user: 'admin',
        password: 'admin123456',
        database: 'myorder'
    });

    let result;

    const promiseQuery = new Promise((resolve) => {
        connection.query(`SELECT * from Item Where id_restaurant = 1 ;`, function (error, results, fields) {
            resolve(results)
        });
    })
    result = await promiseQuery


    if (event.queryStringParameters?.categories !== undefined) {
        const promiseQuery = new Promise((resolve) => {
            connection.query(`SELECT * from Category`, function (error, results, fields) {
                resolve(results)
            });
        })
        result = await promiseQuery
    } else if (event.queryStringParameters?.search !== undefined) {
        const promiseQuery = new Promise((resolve) => {
            connection.query(`select * from Item where title like "%${event.queryStringParameters.search}%"`, function (error, results, fields) {
                resolve(results)
            });
        })
        result = await promiseQuery
    } else if (event.queryStringParameters?.searchCard !== undefined) {
        const promiseQuery = new Promise((resolve) => {
            connection.query(`select * from Item where title = "%${event.queryStringParameters.search}%"`, function (error, results, fields) {
                resolve(results)
            });
        })
        result = await promiseQuery
    } else if (event.queryStringParameters?.ranking !== undefined) {
        const promiseQuery = new Promise((resolve) => {
            connection.query(`SELECT * FROM Item WHERE id IN(1,4,8,7)`, function (error, results, fields) {
                resolve(results)
            });
        })
        result = await promiseQuery
    }
    else if (event.queryStringParameters?.searchCard !== undefined) {
        const promiseQuery = new Promise((resolve) => {
            connection.query(`select * from Item where title = "%${event.queryStringParameters.search}%"`, function (error, results, fields) {
                resolve(results)
            });
        })
        result = await promiseQuery
    }
    else if (event.queryStringParameters?.dayPlates !== undefined) {
        const promiseQuery = new Promise((resolve) => {
            connection.query(`SELECT * FROM Item WHERE id IN(2,5,6,3)`, function (error, results, fields) {
                resolve(results)
            });
        })
        result = await promiseQuery
    }

    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        },
        body: JSON.stringify(result),
    };
};
