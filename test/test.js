'use strict';

const supertest = require('supertest'); 
const app = require('../app.js');

const request = supertest(app);

describe('Tests app', function() {
  it('verifies get', function(done) {
    request.get('/').expect(200).end(function(err, result) {
      test.value(result).hasHeader('content-type', 'text/html');
      done(err);
    });
  });
});
