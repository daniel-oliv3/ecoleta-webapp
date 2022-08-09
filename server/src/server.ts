import express, { request, response } from 'express';


const app = express();

const users = [
    'Daniel',
    'Priscila',
    'Sapup3',
    'Skater'
];


/* - */
app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    return response.json(users);
});

/* - */
app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
});


/* - */
app.post('/users', (request, response) => {
    const user = {
        name: 'Daniel',
        email: 'danielsapup3@gmail.com'
    };

    response.json(user);
});


app.listen(3333);










