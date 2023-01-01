const app = require('./app');
const { initDB } = require('./initializeDB');

initDB();
require('./connection');

async function main(){
    await app.listen(app.get('port'));
    console.log('Server on port ', app.get('port'));
}

main();