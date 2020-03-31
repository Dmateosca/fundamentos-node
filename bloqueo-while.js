let s = new Date().getTime();

setTimeout(function(){
    console.log("Han Pasado " + (new Date().getTime() - s ) + "milisegundos");
}, 20000)

while(true){
    if (new Date().getTime() - s >= 10000){
        console.log("esto es un bucle while, he estado en bucle durante 1 segundo");
        break;
    }
}