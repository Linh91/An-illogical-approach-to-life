'use strict';

const app = require('./server');

var PORT;

if(process.env.NODE_ENV == 'test'){
  PORT = 3000
}
else{
  PORT = 9000
}

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
