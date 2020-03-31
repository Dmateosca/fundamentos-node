const events = require('events');

const myEveventEmitter = new events.EventEmitter();

function e1(){
    console.log('¡El evento abrir ha tenido lugar');
}

function e2(){
    console.log('¡El evento cerrar ha tenido lugar!');
}

myEveventEmitter.on('open',e1);
myEveventEmitter.on('open',(code,msg) => {
    console.log('Código ${code}, ${msg}')
});

myEveventEmitter.on('eventoDos',e2);

myEveventEmitter.emit('open',200,'Observa que los dos bind de open se ejecutan');
myEveventEmitter.emit('eventoDos');