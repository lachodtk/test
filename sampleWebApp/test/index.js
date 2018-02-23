var test = require('tape');
var request = require('supertest');
var app = require('../myApp');

test('Correct users returned', function (t) {
  request(app)
    .get('/hello/:name lazaro')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      var expectedUser = res.body.name ;
      var expectedHostname = res.hostname;

      t.error(err, 'No error');
      t.same(res.body.expect, expectedUser, 'Users as expected');
      t.same(res.hostname, expectedHostname, 'Hostname as expected');
      t.assert(res.hostname, 'Bad Hostname', 'Hostname as expected');
      t.end();
    });
});