const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Register', () => {
  it('should register a new user', (done) => {
    chai
      .request(app)
      .post('http://localhost:9000/register') 
      .send({
        first_name: 'John',
        last_name: 'Doe',
        email: 'john@example.com',
        password: 'password123'
      })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('first_name', 'John');
        expect(res.body).to.have.property('last_name', 'Doe');
        expect(res.body).to.have.property('email', 'john@example.com');
        // Add more assertions as needed

        done();
      });
  });

  it('should return an error if required fields are missing', (done) => {
    chai
      .request(app)
      .post('http://localhost:9000/register') 
      .send({})
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.text).to.equal('First Name is required');
        // Add more assertions for other required fields

        done();
      });
  });

  it('should return an error if the user already exists', (done) => {
    chai
      .request(app)
      .post('http://localhost:9000/register') 
      .send({
        first_name: 'John',
        last_name: 'Doe',
        email: 'john@example.com',
        password: 'password123'
      })
      .end(() => {
        chai
          .request(app)
          .post('http://localhost:9000/register') 
          .send({
            first_name: 'John',
            last_name: 'Doe',
            email: 'john@example.com',
            password: 'password456'
          })
          .end((err, res) => {
            expect(res).to.have.status(409);
            expect(res.text).to.equal('User Already Exist. Please Login');

            done();
          });
      });
  });
});
