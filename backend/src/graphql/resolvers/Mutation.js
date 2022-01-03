import Message from '../../models/Message';
const Mutation = {
  /*Devuelve información sobre la funcion padre, 
  información sobre la propia consulta, 
  información sobre el contexto*/
  createMessage: async (_, {title, content, author}) => {
    const newMessage = new Message({title, content, author});
    return await newMessage.save();
  }
};

export default Mutation;