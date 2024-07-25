const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Index page', function () {
    it('should return status code 200', function (done) {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                if (err) return done(err);
                expect(res).to.have.status(200);
                done();
            });
    });

    it('should return the correct message', function (done) {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                if (err) return done(err);
                expect(res.text).to.equal('Welcome to the payment system');
                done();
            });
    });

    it('should have the correct content type', function (done) {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                if (err) return done(err);
                expect(res).to.have.header('content-type', 'text/html; charset=utf-8');
                done();
            });
    });
});