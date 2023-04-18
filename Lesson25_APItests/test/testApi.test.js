const axios = require('axios');
const validator = require('jsonschema');
const realtimeWeatherAPISchema = require('../test/testData/realtimeWeatherAPISchema.v1.json');
const sportsAPISchema = require('../test/testData/sportsAPISchema.v1.json');
const astronomyAPISchema = require('../test/testData/astronomyAPISchema.v1.json');


describe(`API tests for RealtimeWeatherAPI`, function () {
    describe('first test', function () {
        let response;
        beforeAll(async () => {
            response = await axios.get('https://weatherapi-com.p.rapidapi.com/current.json', {
                params: {
                    q: '53.1,-0.13'
                },
                headers: {
                    'X-RapidAPI-Key': 'c9b007c33amshe8a513383335e69p128706jsna14342fd9f31',
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                }
            })
        });

        test('status code should be 200 for realtimeWeatherAPI', async () => {
            expect(response.status).toEqual(200);
        })
        test('json schema should be valid for realtimeWeatherAPI', async () => {
            const result = await validator.validate(response.data, realtimeWeatherAPISchema)
            expect(result.valid).toEqual(true)
        });
    })


    describe('API tests for Sports API', function () {
        let responseTwo;
        beforeAll(async () => {
            responseTwo = await axios({
                method: "GET",
                url: 'https://weatherapi-com.p.rapidapi.com/sports.json',
                params: {q: 'London'},
  headers: {
    'X-RapidAPI-Key': 'c9b007c33amshe8a513383335e69p128706jsna14342fd9f31',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  },
            })
        });

        test('status code should be 200 for sportsAPI', async () => {
            expect(responseTwo.status).toEqual(200)
        })

        test('json schema should be valid for sportsAPI ', async () => {
            const resultTwo = await validator.validate(responseTwo.data, sportsAPISchema);
            expect(resultTwo.valid).toEqual(true)
        })
    });

    describe('API tests for Astronomy API', function () {
        let responseThree;
        beforeAll(async () => {
            responseThree = await axios({
                method: "GET",
                url: 'https://weatherapi-com.p.rapidapi.com/astronomy.json',
                params: {q: 'London'},
  headers: {
    'X-RapidAPI-Key': 'c9b007c33amshe8a513383335e69p128706jsna14342fd9f31',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  },
            })
        });

        test('status code should be 200 for Astronomy API', async () => {
            expect(responseThree.status).toEqual(200)
        })

        test('json schema should be valid for Astronomy API ', async () => {
            const resultThree = await validator.validate(responseThree.data, astronomyAPISchema);
            expect(resultThree.valid).toEqual(true)
        })
    });
});