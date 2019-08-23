const request = require('supertest')
const server = require('./server')
const db = require('../database/dbConfig.js')
const authenticate = require('../auth/authenticate-middleware.js');

describe('POST /register', () => {
    beforeEach( async() => {
        await db('users').truncate()
    })

    it('returns 201 created', () => {
        return request(server)
            .post('/api/auth/register')
            .send({
                username: 'user',
                password: 'password'
            })
            .then(res => {
                expect(res.status).toBe(201)
            })
    });
    it('returns object', () => {
        return request(server)
            .post('/api/auth/register')
            .send({
                username: 'user',
                password: 'password'
            })
            .then(res => {
                expect(typeof res.body).toBe('object')
            })
    })
})

describe('POST /login', () => {
    it('returns 200', () => {
        return request(server)
            .post('/api/auth/login')
            .send({
                username: 'user',
                password: 'password'
            })
            .then(res => {
                expect(res.status).toBe(200)
            })
    });
    it('returns object', () => {
        return request(server)
            .post('/api/auth/login')
            .send({
                username: 'user',
                password: 'password'
            })
            .then(res => {
                expect(typeof res.body).toBe('object')
            })
    });
})


const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6InVzZXIiLCJpYXQiOjE1NjY1Nzc3NzIsImV4cCI6MTU2NjY2NDE3Mn0.IQZTwf3KdYkkuKVPnDMp5Z_0ACeZfaYfGkOxRa5lAFk'

describe('GET /jokes', () => {
    it('returns 200', () => {
        
        return request(server)
            .get('/api/jokes')
            .set('Authorization', token)
            .then(res => {
                expect(res.status).toBe(200)
            })
    });
    it('returns an object', () => {
        return request(server)
            .get('/api/jokes')
            .set('Authorization', token)
            .then(response => {
                expect(typeof response).toBe('object')
            })
    });
})