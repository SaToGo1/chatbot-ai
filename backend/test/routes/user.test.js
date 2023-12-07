import chai from 'chai'
import chaiHttp from 'chai-http'
const assert = chai.assert;

import app from '../../dist/app.js'
import User from "../../dist/models/User.js";

import mongoose from 'mongoose';
import connectToDatabase from '../../dist/db/connection.js';

chai.use(chaiHttp)

const baseRoute = '/api/v1/user'

before(async () => {
    await connectToDatabase();
    await User.deleteOne({
        "name": "Satogo",
        "email": "satogo@test.com",
    });
})

describe('testing Tests', () => {
    // it('checks the test works wrong', (done) => {
    //     let actualValue = 5;
    //     let expectedValue = 10;

    //     assert.equal(actualValue, expectedValue);
    //     done();
    // })

    it('checks the test works correct', (done) => {
        let actualValue = 10;
        let expectedValue = 10;

        assert.equal(actualValue, expectedValue);
        done();
    })
})

describe('Testing User reading', () => {
    it('GET the user', (done) => {
        chai.request(app)
            .get(baseRoute)
            .end((err, res) => {
                console.log('hi on get')
                assert.equal(res.status, 200)
                done();
            })
    })
})

describe('Testing User Creation POST', () => {
    it('creates an user', async () => {
        const response = await chai
            .request(app)
            .post(baseRoute+'/signup')
            .send({
                "name": "Satogo",
                "email": "satogo@test.com",
                "password": "123456"
            })

            assert.equal(response.status, 200)
            assert.equal(response.body.message, "OK")
    })

    it('fails to post an user with bad email', (done) => {
        chai.request(app)
            .post(baseRoute+'/signup')
            .send({
                "name": "Satogo",
                "email": "satogotest.com",
                "password": "123456"
            })
            .end((err, res) => {
                assert.equal(res.status, 422)
                assert.equal(res.body.errors[0].msg, 'email is required')
                done();
            })
    })

    it('fails to post an user with short password', (done) => {
        chai.request(app)
            .post(baseRoute+'/signup')
            .send({
                "name": "Satogo",
                "email": "satogo@test.com",
                "password": "12345"
            })
            .end((err, res) => {
                assert.equal(res.status, 422)
                assert.equal(res.body.errors[0].msg, 'password should contain atleast 6 characters')
                done();
            })
    })
})