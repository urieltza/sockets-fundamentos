var socket = io();
        

socket.on('connect', function(){
    console.log('Conectado ala servidor');


});

socket.on('disconnect', function( ){
    console.log('Perdimos conexion con el servidor');
});
// on son para escuchar
// emit son para eviar informacion

// Enviar informacion
socket.emit('EnviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola mundo'
}, function (res) {
    console.log(res);
});
//Escuchar informacion
socket.on('enviarMensaje', function(respuesta){
    console.log(respuesta);
})