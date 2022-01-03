/* importamos message que es el modelo de datos que acabamos defnir */
import Message from '../../models/Message';

const Query = {
  ping() {
    return "pong!"
  },

  /* Al ejercutar Messages hacemos una consulta a la base de datos */
  messages: async () => {
    return await Message.find(); 
  }
}

export default Query;