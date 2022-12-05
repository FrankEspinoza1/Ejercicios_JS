const form=document.querySelector('#form');
form.addEventListener("submit",obtenerDatos)

function obtenerDatos(e){
    e.preventDefault();
    const nombre=document.querySelector('#name').value
    const categoria=document.querySelector('#categoria').value
    const horas=parseInt(document.querySelector('#number').value)
    let sueldo=0;
    let boni=0;
    let tot=0;
   

    if(horas>=1 & horas<=3){
        if(categoria=='b'){
            sueldo= horas*35
            boni=sueldo*0.15
            tot=sueldo+boni;
       }else if(categoria=='a'){
           sueldo= horas*40
           boni=sueldo*0.15
            tot=sueldo+boni;
       }else{
           sueldo= horas*30
           boni=sueldo*0.15
            tot=sueldo+boni;
       }
    }else

    if(horas>=4 & horas<=7){
        if(categoria=='b'){
            sueldo= horas*35
            boni=sueldo*0.20
            tot=sueldo+boni;
       }else if(categoria=='a'){
           sueldo= horas*40
           boni=sueldo*0.20
            tot=sueldo+boni;
       }else{
           sueldo= horas*30
           boni=sueldo*0.20
            tot=sueldo+boni;
       }
    }else

    if(horas>=8 & horas<=12){
        if(categoria=='b'){
            sueldo= horas*35
            boni=sueldo*0.30
            tot=sueldo+boni;
       }else if(categoria=='a'){
           sueldo= horas*40
           boni=sueldo*0.30
            tot=sueldo+boni;
       }else{
           sueldo= horas*30
           boni=sueldo*0.30
            tot=sueldo+boni;
       }
    }else{
        
    if(horas>=13 ){
        if(categoria=='b'){
            sueldo= horas*35
            boni=sueldo*0.35
            tot=sueldo+boni;
       }else if(categoria=='a'){
           sueldo= horas*40
           boni=sueldo*0.35
            tot=sueldo+boni;
       }else{
           sueldo= horas*30
           boni=sueldo*0.35
            tot=sueldo+boni;
       }
    }
    }
    console.log(sueldo)

    const respuesta=document.getElementById('respuesta')
    respuesta.textContent=`Hola ${nombre} de Categoría ${categoria}  con  ${horas} horas trabajadas recibirá: ` 
    const sueldoneto=document.getElementById('sueldoneto')
    sueldoneto.textContent=` Sueldo Básico: S/. ${sueldo} Bonificación por años de Servicio: S/. ${boni} Sueldo Neto: S/. ${tot}` 
   
}