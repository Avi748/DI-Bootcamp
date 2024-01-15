const knex = require('knex')

const db = knex({
    client: 'pg',
    connection: {
        host: 'flora.db.elephantsql.com', //'127.0.0.1'
        port: 5432,
        user: 'ojnieejm', //'postgres'
        password: 'gzOKovxSV4XmLCm-l5YryVc_0jBeEaD1',
        database: 'ojnieejm',
    }
});

// console.log("db=>", db);

//SELECT
// db.select('id','name','email','password')
// .from('users')
// .then(rows => {
//     console.log(rows);
// })
// .catch(error => {
//     console.log(error);
// })

// db('users')
// .select('id','name','email','password')
// .then(data => {
//     console.log(data);
// })

// db.raw("select * from users")
// .then(data => {
//     console.log(data.rows);
// })


//INSERT
// db('users')
// .insert([
//     {name: 'fff', email:'fff@gmail.com', password:'qaq12ws3ed'},
//     {name: 'ggg', email:'ggg@gmail.com', password:'qaq12ws3ed'},
//     {name: 'hhh', email:'hhh@gmail.com', password:'qaq12ws3ed'},
// ])
// .returning(['id', 'name'])
// .then(data => {
//     console.log(data);
// })
// .catch(error => {
//     console.log(error);
// })


//UPDATE
// db('users')
// .update({name: 'Dan'}) //previously was fff
// .where({id:7})
// .returning('*')
// .then(data => {
//     console.log(data);
// })
// .catch(error => {
//     console.log(error);
// })


//DELETE
db('users')
.where({id:8})
.del()
.returning('*')
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log(error);
})