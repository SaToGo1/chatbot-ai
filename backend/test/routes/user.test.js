import chai from 'chai'
import chaiHttp from 'chai-http'
const assert = chai.assert;

import app from '../../dist/app.js'
import User from "../../dist/models/User.js";

import mongoose, { mongo } from 'mongoose';
import connectToDatabase from '../../dist/db/connection.js';

chai.use(chaiHttp)

const baseRoute = '/api/v1/user'

before(async () => {
    connectToDatabase()
    .then(() => {
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
        console.log(`Server Open at port ${PORT}`)
        });
    })
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

describe('Testing Basic Requests', () => {
    it('GET the user', (done) => {
        chai.request(app)
            .get(baseRoute)
            .end((err, res) => {
                assert.equal(res.status, 200)
                done();
            })
    })

    it('POST signup creates an user', async () => {
        const response = await chai
            .request(app)
            .post(baseRoute+'/signup')
            .send({
                "name": "Satogo",
                "email": "satogo@test.com",
                "password": "123456"
            })

            assert.equal(response.status, 201)
            assert.equal(response.body.message, "OK")
    })

    it('POST login a user', async () => {
        const response = await chai
            .request(app)
            .post(baseRoute+'/login')
            .send({
                "email": "satogo@test.com",
                "password": "123456"
            })

            assert.equal(response.status, 200)
            assert.equal(response.body.message, "OK")
    })
})

describe('Testing POST User Creation Validations', () => {
    before(async () => {
        await User.deleteOne({
            "email": "notRegistered@test.com"
        });
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

    it('fails to login a user with incorrect password', async () => {
        const response = await chai
            .request(app)
            .post(baseRoute+'/login')
            .send({
                "email": "satogo@test.com",
                "password": "654321abc"
            })

            assert.equal(response.status, 403);
            assert.equal(response.text, "Incorrect password");
    })

    it('fails to login when user does not exist', async () => {
        const response = await chai
            .request(app)
            .post(baseRoute+'/login')
            .send({
                "email": "notRegistered@test.com",
                "password": "123456"
            })
            
            assert.equal(response.status, 401);
            assert.equal(response.text, "User not registered");
    })
})