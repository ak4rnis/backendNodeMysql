const express = require("express");
const cors = require('cors');
const morgan = require("morgan");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const authroutes = require("./routers/auth");
const usuariosroutes = require("./routers/usuarios");
const db = require("./connect");

const comentariosroutes = require("./routers/comentarios");
const valoracionesroutes = require("./routers/valoraciones");
const seccionesroutes = require("./routers/secciones");
const respuestascomentariosroutes = require("./routers/respuestas_comentarios");
const pagostripesroutes = require("./routers/pagos_stripes");
const ordenitemsroutes = require("./routers/ordenitems");
const ordenroutes = require("./routers/ordenes");
const instructoroutes = require("./routers/instructores");
const cursoseccionroutes = require("./routers/cursosecciones");
const cursosroutes = require("./routers/cursos");
const comprasroutes = require("./routers/compras");
const categoriasroutes = require("./routers/categorias");
const carritosroutes = require("./routers/carritos");
const swaggerConfig = require('./swagger');


db.getConnection()
  .then((connection) => {
    console.log('Conexión a la base de datos exitosa');

    // Configuración de rutas y otras configuraciones de tu aplicación
    // ...

    // Arrancar el servidor
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error en la conexión a la base de datos:', error);
  });

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}));

app.use(cors());


app.use("/api/auth", authroutes);
app.use("/api/usuarios", usuariosroutes);
app.use("/api/secciones", seccionesroutes);
app.use("/api/comentarios", comentariosroutes);
app.use("/api/valoraciones", valoracionesroutes);
app.use("/api/respuestascomentarios", respuestascomentariosroutes);
app.use("/api/pagos_stripes", pagostripesroutes);
app.use("/api/ordenitems", ordenitemsroutes);
app.use("/api/ordenes", ordenroutes);
app.use("/api/instructores", instructoroutes);
app.use("/api/cursosecciones", cursoseccionroutes);
app.use("/api/cursos", cursosroutes);
app.use("/api/compras", comprasroutes);
app.use("/api/categorias", categoriasroutes);
app.use("/api/carritos", carritosroutes);

swaggerConfig(app);



module.exports = app;