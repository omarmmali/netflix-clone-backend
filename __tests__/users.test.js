process.env.NODE_ENV = 'test';

const chai = require('chai');
chai.use(require('chai-http'));

let expect = chai.expect;

const server = require('../app');

describe('/users', () => {
    it('returns the id sent to it', done => {
        chai.request(server)
            .get('/users/1')
            .end((err, res) => {
               expect(res.body.idSent).to.equal('1');
               done();
            });
    })

    it('returns the name sent to it', done => {
        chai.request(server)
            .get('/users/1/omar')
            .end((err, res) => {
                expect(res.body.nameSent).to.equal('omar');
                expect(res.body.idSent).to.equal('1');
                done();
            });
    })
});
