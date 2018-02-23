var test = require('tape');
var request = require('supertest');
var app = require('../myApp');
const os = require('os');


test('Correct message returned', function (t) {
  request(app)
    .get('/hello/john')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      var expectedHostname = os.hostname();
      var expectedBody = ({ message : 'Hello John from ' + expectedHostname });

      t.error(err, 'No error');
      t.same(res.body, expectedBody, 'Body as expected');
      t.same(os.hostname(), expectedHostname, 'Hostname as expected');
      t.end();
    });
});