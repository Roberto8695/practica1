require('dotenv').config(); // Cargar variables de entorno primero
const app = require('./app');

// Puerto del servidor
const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || '0.0.0.0'; // Permitir especificar el host en .env

// Iniciar el servidor
app.listen(PORT, HOST, () => {
    console.log(`Servidor corriendo en http://${HOST}:${PORT}`);
});

console.log('JWT_SECRET desde .env:', process.env.JWT_SECRET);
