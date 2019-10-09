var grupo = ["Franco", "Agustina", "Federico", "Leo", "Bianca", "Ivo", "Tomás", "Gabriel", "Abelardo", "Alexis", "Walter", "Marcos", "Sebastian", "Luciano", "Sole", "Gonza"]

console.log(grupo.length);

console.log(grupo.sort())

console.log(grupo[0])

console.log(grupo[15])

for (let index = 0; index < grupo.length; index++) {
    console.log(grupo[index]);
}

var edades = [20, 17,22,25,31,26,27,24,30,32,35,20,19,28,23]

var x = 0; 
while (x<edades.length) {
    console.log(edades[x]);
    x++;
}
x=0;
while (x<edades.length) {
  
    if(edades[x]%2==0){
        console.log(edades[x], "somos pares");
    }
    x++;    
}

function menor (edades){
    var resul=edades[0];
    edades.forEach(edad => {
    if(resul>edad){
        resul=edad;
    }
   
    }
        
    );
    return resul;
}
console.log(menor(edades), "Menor");


function mayor (edades){
    var may=edades[0];
    edades.forEach(edad => {
        if(may<edad) {
            may=edad;
    }
    }
    );
    return may;
    }
console.log(mayor(edades), "Mayor");

function orden (edades, i){
    var i= 0;
    edades.forEach(edad=> {
        i=edades[i];
    }
    )
    return (orden(i)
    );
}

console.log(orden(1));