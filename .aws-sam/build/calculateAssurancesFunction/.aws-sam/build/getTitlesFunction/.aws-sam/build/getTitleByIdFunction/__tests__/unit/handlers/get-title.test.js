// Import dynamodb from aws-sdk
const dynamodb = require('aws-sdk/clients/dynamodb');

const lambda = require('../../../src/handlers/get-title.js');

// This includes all tests for getTitleByIdHandler
describe('Test getTitleByIdHandler', () => {
    let getSpy;

    // One-time setup and teardown, see more in https://jestjs.io/docs/en/setup-teardown
    beforeAll(() => {
        // Mock DynamoDB get method
        // https://jestjs.io/docs/en/jest-object.html#jestspyonobject-methodname
        getSpy = jest.spyOn(dynamodb.DocumentClient.prototype, 'get');
    });

    // Clean up mocks
    afterAll(() => {
        getSpy.mockRestore();
    });

    // This test invokes getTitleByIdHandler and compares the result
    it('should get title by title number', async () => {
        const title = { title_number: 'ABC123456' };

        // Return the specified value whenever the spied get function is called
        getSpy.mockReturnValue({
            promise: () => Promise.resolve({ Item: title }),
        });

        const event = {
            httpMethod: 'GET',
            pathParameters: {
                title_number: 'ABC123456',
            },
        };

        // Invoke getTitleByIdHandler
        const result = await lambda.getTitleByIdHandler(event);

        const expectedResult = {
            statusCode: 200,
            body: JSON.stringify(title),
        };

        // Compare the result with the expected result
        expect(result).toEqual(expectedResult);
    });
});
