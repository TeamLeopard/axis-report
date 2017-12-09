var request = require('supertest');
var assert = require("assert");
var app = require('../server/server.js')



describe('Test1', () => {
	describe("GET", () => {
		it("return status code 200 for /api/articles", (done) => {
			request('http://localhost:3000')
			.get('/api/articles')
			.expect(200, done());
		})
	})
})

describe('Test2', () => {
	describe("GET", () => {
		it("return status code 200 for /api/top", (done) => {
			request('http://localhost:3000')
			.get('/api/top')
			.expect(200, done());
		})
	})
})

describe('Test3', () => {
	describe("GET", () => {
		it("return status code 404 for a random path", (done) => {
			request('http://localhost:3000')
			.get('/api/down')
			.expect(404,done);
		})
	})
})

//supertests