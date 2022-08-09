import express, { request, response } from 'express';


const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');


    //Json
    response.json([
        'Daniel',
        'Priscila',
        'Sapup3'
    ]);
});





//
app.post('/users', (request, response) => {
    const user = {
        name: 'Daniel',
        email: 'danielsapup3@gmail.com'
    };

    response.json(user);
});


app.listen(3333);










