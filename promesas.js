let destinatario = { nombre: "David", presente: true}


function entregaPaquete(destinatario){
    return new Promise(function(resolve,reject){
    setTimeout(()=> {
        if(destinatario.presente){
            resolve("El paquete ha sido entregado ")
        }else{
            reject("El destinatario estaba ausente");
        }
    },3000);
    });
    }

let miPromesa = entregaPaquete(destinatario);

miPromesa
.then(function(result){console.log("Success: "+ result)}, function(err){console.log("Reject: "+ err)})
.catch(ausente=>console.log(ausente))