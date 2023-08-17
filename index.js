const fastify = require('fastify')({logger: true});
const path = require('path');
const cors = require('@fastify/cors');
console.log(process.argv[2]);


fastify.register(cors, {});
fastify.register(require('@fastify/static'), {
  root: process.argv[2],
});

fastify.listen({ port: 8000 }, (err, address) => {
  if (err) throw err
});
