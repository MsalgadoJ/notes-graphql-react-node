/*activamos mongo usando en la consola el comando mongod.
De ahí obtenemos el puerto*/
import mongoose from 'mongoose';

/* le mandamos parámetros para que no nos de error cuando llamemos
la conexión */
mongoose.connect("mongodb://localhost/graphqlreactdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));