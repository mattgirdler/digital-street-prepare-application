const ResolutionsResponse = require('../classes/ResolutionsResponse')

exports.calculateResolutionsHandler = async (event) => {
    const { body, path } = event;


    const { applicants, application_types, title } = JSON.parse(body);

    // All log statements are written to CloudWatch by default. For more information, see
    // https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-logging.html

    console.log('received:', JSON.stringify(event));

    const resolutionsSchema = new ResolutionsResponse(applicants, application_types, title['proprietors'], title['entries']);
    
    console.log(resolutionsSchema)

    const response = {
        statusCode: 200,
        body: JSON.stringify(resolutionsSchema),
    };

    console.log(`response from: ${path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
};
