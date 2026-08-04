const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

const categoriasAutos = [
    {
        nombre: 'JDM',
        autos: ['Toyota Supra MK4', 'Nissan Skyline GT-R R34', 'Mazda RX-7 FD', 'Honda NSX', 'Subaru Impreza WRX STI']
    },
    {
        nombre: 'Americanos',
        autos: ['Ford Mustang GT500', 'Chevrolet Camaro SS', 'Dodge Challenger Hellcat', 'Chevrolet Corvette Z06', 'Ford GT']
    },
    {
        nombre: 'Alemanes',
        autos: ['BMW M3 E46', 'Mercedes-AMG GT', 'Audi RS6 Avant', 'Porsche 911 GT3', 'Volkswagen Golf R']
    },
];

app.get('/', (req, res) => {
    res.render('index', {
        nombre: 'Bryan Lizcano',
        categoriasAutos
    });
});

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));