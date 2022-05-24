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

    if (event.queryStringParameters?.active) {
        const promiseQuery = new Promise((resolve) => {
            connection.query(`select * from Table_ Where table_active = 1 && id_restaurant = 1;`, function (error, results, fields) {
                resolve(results)
            });
        })
        result = await promiseQuery
    } else if (event.pathParameters) {
        if (event.pathParameters.proxy === `/call/{id}`) {
            const promiseQuery = new Promise((resolve) => {
                connection.query(`UPDATE Table_ Set table_call = 1 Where id = 2  `, function (error, results, fields) {
                    resolve(results)
                });
            })
            result = await promiseQuery
        } else {
            const promiseQuery = new Promise((resolve) => {
                connection.query(`UPDATE Table_ Set table_active = 1 Where id = ${event.pathParameters.proxy}  `, function (error, results, fields) {
                    resolve(results)
                });
            })
            result = await promiseQuery
        }
    } else {
        const promiseQuery = new Promise((resolve) => {
            connection.query(`SELECT * from Table_`, function (error, results, fields) {
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