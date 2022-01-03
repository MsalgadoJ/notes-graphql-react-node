import {Schema, model} from 'mongoose';

const messageSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required:true
  },
  author: {
    type: String,
    required: true
  }
});

/* lo pasamos al modelo para usarlo en otras partes de la app */
export default model('Message', messageSchema);
