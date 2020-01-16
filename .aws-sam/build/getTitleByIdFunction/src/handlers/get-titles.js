// Create clients and set shared const values outside of the handler

// Create a DocumentClient that represents the query to get an item
const dynamodb = require('aws-sdk/clients/dynamodb');

const docClient = new dynamodb.DocumentClient();

// Get the DynamoDB table name from environment variables
const tableName = process.env.TITLE_TABLE;

/**
 * A simple example includes a HTTP get method to get one item by id from a DynamoDB table.
 */
exports.getTitlesHandler = async (event) => {
    const { httpMethod, path } = event;
    if (httpMethod !== 'GET') {
        throw new Error(`getMethod only accept GET method, you tried: ${httpMethod}`);
    }
    // All log statements are written to CloudWatch by default. For more information, see
    // https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-logging.html
    console.log('received:', JSON.stringify(event));

    // Get the item from the table
    // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#get-property
    const params = {
        TableName: tableName
    };

    const { Items } = await docClient.scan(params).promise();

    const response = {
        statusCode: 200,
        body: JSON.stringify(Items),
    };

    console.log(`response from: ${path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
};
