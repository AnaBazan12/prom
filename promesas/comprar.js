let total = 0 ;
function comprar(){
    return new promise((resolver, react )=>{
        setTimeout(()=>{total = total + 1;
            if(total < 5){
                console.log(total);
                resolver()
            }
            else reject("solo se puede comprar 4")
             },1000);
    })
}
comprar()
.then(()=> comprar())
.then(()=> comprar())
.then(()=> comprar())
.catch((error)=> console.log (error))
