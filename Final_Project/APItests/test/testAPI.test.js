const axios = require('axios');
const validator = require('jsonschema');
const translationsSchema = require('../test/testData/translationsSchema.v1.json');
const getPublicConfigForContextSchema = require('../test/testData/getPublicConfigForContextSchema.v1.json');


describe(`API tests for Decathlon translations`, function () {
    describe('first test', function () {
        let response;
        beforeAll(async () => {
            response = await axios.get('https://www.decathlon.pl/pl/ajax/nfs/translations')
        });

        test('status code should be 200 for Decathlon translations', async () => {
            expect(response.status).toEqual(200);
        })
        test('json schema should be valid for Decathlon translations', async () => {
            const result = await validator.validate(response.data, translationsSchema)
            expect(result.valid).toEqual(true)
        });


        describe('API tests for getPublicConfigForContext on Decathlon', function () {
            let responseTwo;
            beforeAll(async () => {
                responseTwo = await axios({
                    method: "GET",
                    url: 'https://synerise.decathlon.pl/rtom-proxy/rtom/configs/getPublicConfigForContext?tracker=576B50AE-A9AA-F66D-5161-26EC6204D9C2'
                })
            });

            test('status code should be 200 getPublicConfigForContext on Decathlon', async () => {
                expect(responseTwo.status).toEqual(200)
            })

            test('json schema should be valid for getPublicConfigForContext on Decathlon ', async () => {
                const resultTwo = await validator.validate(responseTwo.data, getPublicConfigForContextSchema);
                expect(resultTwo.valid).toEqual(true)
            })
        })
    })
})