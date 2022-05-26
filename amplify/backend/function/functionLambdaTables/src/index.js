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
        connection.query(`SELECT * from Table_ Where id_restaurant = 1;`, function (error, results, fields) {
            resolve(results)
        });
    })
    result = await promiseQuery


    if (event.queryStringParameters?.active !== undefined) {
        const promiseQuery = new Promise((resolve) => {
            connection.query(`select * from Table_ Where table_active = 1 && id_restaurant = 1;`, function (error, results, fields) {
                resolve(results)
            });
        })
        result = await promiseQuery
    }
    else if (event.queryStringParameters?.activate !== undefined) {
        if (event.queryStringParameters.activate === "activate") {
            const promiseQuery = new Promise((resolve) => {
                connection.query(`UPDATE Table_ Set table_active = 1 Where id = ${event.pathParameters.proxy}  `, function (error, results, fields) {
                    resolve(results)
                });
            })
            result = await promiseQuery
        }
    }
    else if (event.queryStringParameters?.call !== undefined) {
        if (event.queryStringParameters?.call === "call") {
            const promiseQuery = new Promise((resolve) => {
                connection.query(`UPDATE Table_ Set table_call= 1 Where id = ${event.pathParameters.proxy}  `, function (error, results, fields) {
                    resolve(results)
                });
            })
            result = await promiseQuery
        }
        else if (event.queryStringParameters?.call === "notCall") {
            const promiseQuery = new Promise((resolve) => {
                connection.query(`UPDATE Table_ Set table_call= 0 Where id = ${event.pathParameters.proxy}  `, function (error, results, fields) {
                    resolve(results)
                });
            })
            result = await promiseQuery
        }
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