// var request = require('request');
var request = require('supertest');
var base_url1 = "http://localhost:3000/api/articles";
var base_url2 = "http://localhost:3000/api/top";
var assert = require("assert");
// var request = require('request');
var app = require('../server/server.js')



describe('Test1', () => {
	describe("GET", () => {
		it("return status code 200", (done) => {
			request('http://localhost:3000')
			.get('/api/articles')
			.expect(200, done());
		})
	})
})

describe('Test2', () => {
	describe("GET", () => {
		it("return status code 200", (done) => {
			request('http://localhost:3000')
			.get('/api/top')
			.expect(200, done());
		})
	})
})

//supertests