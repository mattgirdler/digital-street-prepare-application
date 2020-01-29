const ResolutionSchema = require('../classes/ResolutionSchema')

exports.calculateResolutionsHandler = async (event) => {
    const { applicants, application_types, title, path } = event;

    // All log statements are written to CloudWatch by default. For more information, see
    // https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-logging.html
    console.log('received:', JSON.stringify(event));

    const resolutionSchema = new ResolutionSchema(applicants, application_types, title['entries'], title['proprietors']);
    
    console.log(resolutionSchema)

    const response = {
        statusCode: 200,
        body: "success",
    };

    console.log(`response from: ${path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
};

// function getResolutionsForEntries(applicants, entries) {
//     let resolutions = []

//     console.log('getResolutionsForEntries')

//     for (entry in entries) {
//         let resolution = new Resolution(entries[entry], applicants)
//         if (resolution != null) {
//             resolutions.push(resolution)
//         }
//     }

//     return resolutions
// }
