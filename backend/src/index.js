import {server} from './server';
import './database';

/* pasamos la configuración a través de un objeto */
server.start({port: 3100}, ({port}) => {
  console.log('Server on port ', port)
})  