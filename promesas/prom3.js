function sumar (valor){
    return Promise.resolve((valor+1));
}

function main(){
    let parametro = 3;
    sumar(parametro)
    .then(function(r1){return sumar(r1);})
    .then(function(r2){consola.log("Resultado final:"+ r2);
})
}
main()