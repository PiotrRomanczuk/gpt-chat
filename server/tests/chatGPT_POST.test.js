const request = require('supertest');
const app = require('../server');

describe('/chatgpt', () => {
  it('should respond with the generated response message', (done) => {
    const requestBody = {
      content: 'Hello, GPT-3.5 Turbo!',
    };

    request(app)
      .post('/chatgpt')
      .send(requestBody)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        // Assert the response structure and content
        const { response } = res.body;
        expect(response).to.be.a('string');
        expect(response).to.not.be.empty;

        done();
      });
  });

  it('should handle errors and respond with a 500 status code', (done) => {
    const requestBody = {
      // Invalid request body without the required 'content' property
    };

    request(app)
      .post('/chatgpt')
      .send(requestBody)
      .expect(500, done);
  });
});