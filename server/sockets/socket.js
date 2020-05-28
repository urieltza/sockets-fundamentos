
const { io } =require('../server');


io.on('connection', (client) =>{
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario:'Administrador',
        mensaje:'Bienvenido a esta aplicación'
    });

    
    client.on('disconnect', ()=>{
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente
    client.on('EnviarMensaje', (data, call) =>{
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if( mensaje.usuario){
        //     call({
        //         resp:"Todo salio bien!!"
        //     });
        // }else{
        //     call({
        //         resp:'Toda salio mal!!!!'
        //     });
        // }


    });
});