const express = require ('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola desde la nube con Express!');
});

app.listen(por, () => {
  console.log('Servidor escuchando en http://localhost${port}');
});
        
