import chai from 'chai'
import chaiHttp from 'chai-http'
const assert = chai.assert;
import app from '../../app.js'

chai.use(chaiHttp)

const baseRoute = '/api/v1/user'

describe('testing Tests', () => {
    it('checks the test works', () => {
        let actualValue = 10;
        let expectedValue = 10;

        assert.equal(actualValue, expectedValue);
    })
})

describe('Testing User Routes', () => {
    it('GET the user', () => {
        chai.request(app)
        .get(baseRoute+'/')
        .end((err, res) => {
            assert.equal(res.status, 200)
        })
    })
})