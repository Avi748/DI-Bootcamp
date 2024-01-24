const knex = require('knex')

const db = knex({
    client: 'pg',
    connection: {
        host: 'flora.db.elephantsql.com',
        port: 5432,
        user: 'ojnieejm', 
        password: 'gzOKovxSV4XmLCm-l5YryVc_0jBeEaD1',
        database: 'ojnieejm',
    }
});

module.exports = {db}