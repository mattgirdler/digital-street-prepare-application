// Import dynamodb from aws-sdk
const dynamodb = require('aws-sdk/clients/dynamodb');

const lambda = require('../../../src/handlers/get-titles.js');

// This includes all tests for getTitlesHandler
describe('Test getAllTitlesHandler', () => {
    let scanSpy;

    // One-time setup and teardown, see more in https://jestjs.io/docs/en/setup-teardown
    beforeAll(() => {
        // Mock DynamoDB scan method
        // https://jestjs.io/docs/en/jest-object.html#jestspyonobject-methodname
        scanSpy = jest.spyOn(dynamodb.DocumentClient.prototype, 'scan');
    });

    // Clean up mocks
    afterAll(() => {
        scanSpy.mockRestore();
    });

    // This test invokes getTitlesHandler and compares the result
    it('should return title numbers', async () => {
        const titles = [{ title_number: 'ABC123456' }, { title_number: 'DEF123456' }];

        // Return the specified value whenever the spied scan function is called
        scanSpy.mockReturnValue({
            promise: () => Promise.resolve({ Items: titles }),
        });

        const event = {
            httpMethod: 'GET',
        };

        // Invoke getTitlesHandler
        const result = await lambda.getTitlesHandler(event);

        const expectedResult = {
            statusCode: 200,
            body: JSON.stringify(titles),
        };

        // Compare the result with the expected result
        expect(result).toEqual(expectedResult);
    });
});
