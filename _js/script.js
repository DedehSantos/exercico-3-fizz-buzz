var resultado = fizzbuzz(3);
console.log(resultado)

function fizzbuzz(entrada){
if (typeof entrada  !== 'number')
return 'não é um numero'

if ((entrada % 3 === 0) && (entrada % 5 === 0 ))
return (`o numero, ${entrada} é divisivel por 3 e 5 `)




if (entrada % 3 === 0 )
return (`o numero, ${entrada} é divisivel por 3 `)


 


return (entrada % 5 === 0)
    
    console.log(`o numero, ${entrada} é divisivel por 5 `)



}