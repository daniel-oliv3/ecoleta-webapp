import express from 'express';


const app = express();

app.use(express.json());

const users = [
    'Daniel',
    'Priscila',
    'Sapup3',
    'Skater',
    'Daniela'
];


/* - */
app.get('/', (request, response) => {
    return response.json({ message: 'Olá, Mundo!'});
});




app.listen(3333);










