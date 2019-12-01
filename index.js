import express from 'express';

const app = express();

app.set('port', 8000);

app.get('/', (req, res) => {
    res.send('Todo listo');
});

app.listen(() => console.log(`server runnin' in http://localhost:${app.get('port')}`));