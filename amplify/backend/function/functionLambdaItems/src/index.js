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
            connection.query(`SELECT * from Category  Where title Like %""%  `, function (error, results, fields) {
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