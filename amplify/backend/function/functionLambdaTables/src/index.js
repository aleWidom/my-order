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
            connection.query('select * from Table_ Where table_active = 0 && id_restaurant = 1;', function (error, results, fields) {
                resolve(results)
            });
        })
        result = await promiseQuery
    } else {
        const promiseQuery = new Promise((resolve) => {
            connection.query('SELECT * from Table_', function (error, results, fields) {
                resolve(results)
            });
        })
        result = await promiseQuery
    }

    return {
        statusCode: 200,
        //  Uncomment below to enable CORS requests
        //  headers: {
        //      "Access-Control-Allow-Origin": "*",
        //      "Access-Control-Allow-Headers": "*"
        //  },
        body: JSON.stringify(result),
    };
};