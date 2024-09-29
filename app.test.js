const http = require('http');

describe('Server Test', () => {
  it('should respond with Hello World', (done) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/',
      method: 'GET'
    };

    const req = http.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        expect(data).toBe('Hello World!\n');
        done();
      });
    });

    req.on('error', (e) => {
      done(e);
    });

    req.end();
  });
});
