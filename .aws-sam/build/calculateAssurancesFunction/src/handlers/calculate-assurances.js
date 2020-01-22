const AssuranceFactory = require('../classes/Assurance')

exports.calculateAssurancesHandler = async (event) => {
    const { applicants, application_types, title, path } = event;

    // All log statements are written to CloudWatch by default. For more information, see
    // https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-logging.html
    console.log('received:', JSON.stringify(event));

    for (applicationType in application_types) {
        console.log(application_types[applicationType])
    }

    const assurances = await getAssurancesForEntries(title['title_number'], title['entries']);
    
    console.log(assurances)

    const response = {
        statusCode: 200,
        body: "success",
    };

    console.log(`response from: ${path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
};

async function getAssurancesForEntries(titleNo, entries, applicants) {
    let assurances = []

    console.log('getAssurancesForEntries')

    for (entry in entries) {
        for (applicant in applicants) {
            let assurance = await AssuranceFactory.create(titleNo, entries[entry]['draft_entry_code'], applicants[applicant])
            assurances.push(assurance)
        }
    }

    return assurances
}
