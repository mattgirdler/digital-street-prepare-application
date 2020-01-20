
exports.calculateAssurancesHandler = async (event) => {
    const { applicants, application_types, title, path } = event;

    // All log statements are written to CloudWatch by default. For more information, see
    // https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-logging.html
    console.log('received:', JSON.stringify(event));

    for (applicant in applicants) {
        console.log(applicants[applicant]['application_type'])
        console.log(applicants[applicant]['name'])
    }
    for (application_type in application_types) {
        console.log(application_types[application_type])
    }

    const response = {
        statusCode: 200,
        body: "success",
    };

    console.log(`response from: ${path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
};
