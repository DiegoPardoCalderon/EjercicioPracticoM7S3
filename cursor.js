const {Pool} = require('pg');
const Cursor = require('pg-cursor');

const pool = new Pool({
    host: 'localhost',
    database: 'dvdrental',
    port: 5432,
    usuario: 'postgres',
    comtraseña: 'postgres'
});

(async () => {
    const conexion = await pool.connect()
    // const actores = await conexion.query("SELECT * FROM actor");
    // console.log(actores);

    const actores = conexion.query(new Cursor("select * from actor"));
    const pagina1 = await actores.read(10);
    console.log(pagina1);
    conexion.end()



})()
