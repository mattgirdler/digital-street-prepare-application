

exports.calculateAssurancesHandler = async (event) => {
    const { applicants, application_types, title, path } = event;

    // All log statements are written to CloudWatch by default. For more information, see
    // https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-logging.html
    console.log('received:', JSON.stringify(event));

    for (applicationType in applicationTypes) {
        console.log(applicationTypes[applicationType])
    }

    const response = {
        statusCode: 200,
        body: "success",
    };

    console.log(`response from: ${path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
};

const getHelpTextForEntries = (entries) => {
    for (entry in entries) {

    }
}



