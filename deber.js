'use strict'

let semana = ['LUNES' , 'DOMINGO' , 'MARTES' , 'JUEVES', 'MIERCOLES' , 'SABADO' , 'VIERNES'];

//elimina el dia domingo del inicio de la lista
semana.shift() ;

//agrega el dia lunes al inicio de la lista
semana.unshift('LUNES');

//agregar el dia domingo al final de la lista
semana.push('DOMINGO');

//insertar el dia viernes en la posicion correspondiente
semana.splice(4,0,'VIERNES');

//mostrar en la pantalla elemento por elemento usando una for

for (let i = 0; i < semana.length; i++ ){
    alert(semana[i]);
}


