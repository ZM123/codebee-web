// see https://github.com/apollographql/relay-modern-hello-world/blob/master/scripts/getSchema.js

const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '../schema/schema.graphql');

if (!fs.existsSync(path.dirname(file)))
  fs.mkdirSync(path.dirname(file));

const {
  buildClientSchema,
  introspectionQuery,
  printSchema
} = require('graphql/utilities');

fetch('http://localhost:3000/graphql', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ query: introspectionQuery })
})
  .then(res => res.json())
  .then(res => {
    fs.writeFileSync(file, printSchema(buildClientSchema(res.data)));
  })
  .catch(err => console.error(err));
