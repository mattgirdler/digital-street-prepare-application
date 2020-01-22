// require('./Consent')
// require('./Certificate')

const dynamodb = require('aws-sdk/clients/dynamodb');

const docClient = new dynamodb.DocumentClient();

// Get the DynamoDB table name from environment variables
const tableName = process.env.FORM_TABLE;

class Assurance {

    constructor(titleNo, entryCode, party = '') {
        this.titleNo = titleNo
        this.entryCode = entryCode
        this.party = party
        this.resolution = this.generateAssuranceSchema();
    }

    async generateAssuranceSchema() {
        const params = {
            TableName: tableName
        };

        const { Items } = await docClient.scan(params).promise();

        console.log(Items)
    }
}

class AssuranceFactory { 
    static async create(titleNo, entryCode, party = '') {
        return new Assurance(await Promise.resolve(titleNo, entryCode, party))
    }
}

exports.AssuranceFactory = AssuranceFactory;