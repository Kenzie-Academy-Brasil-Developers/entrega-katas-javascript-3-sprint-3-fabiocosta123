const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
/*  Criar função showResults 
    criar codigos dos katas
    criar uma variavel para resultado
    chamar showResult, que deve o valor da variavel
    retornar resultado do kata

*/
// implemente o código do kata 1 aqui

 function showResult(resultado){
     const div = document.getElementById('kata1')
     const res = document.createElement('p')
     res.innerText = resultado
     div.appendChild(res)
 }
function kata1(num) {
    let resultado = ''
    for (let i = 1; i <= num; i ++) {
        resultado += i + ', ' 
    }
    showResult(resultado)
    return resultado
       
}
// implemente o código do kata 2 aqui

function showResult(resultado){
    const div = document.getElementById('kata2')
    const res = document.createElement('p')
    res.innerText = resultado
    div.appendChild(res)
}

function kata2(num) {
    let resultado = ''
    for(let i = num; i >= 1; i--){
        resultado += i + ','
    }
    showResult(resultado)
    return resultado
      
}
// implemente o código do kata 3 aqui

function showResult(resultado){
    const div = document.getElementById('kata3')
    const res = document.createElement('p')
    res.innerText = resultado
    div.appendChild(res)
}

function kata3(num) {
    let resultado = ''
    for(let i = 1; i <= num; i++){
        resultado += i * (-1)+ ','
        
        
    }
    showResult(resultado)
    return resultado
    

// implemente o código do kata 4 aqui
}

function showResult(resultado){
    const div = document.getElementById('kata4')
    const res = document.createElement('p')
    res.innerText = resultado
    div.appendChild(res)
}
function kata4(num) {
    let resultado = ''
    for(let i = num; i >= 1; i--){
        resultado += i*(-1) + ','
    }
    showResult(resultado)
    return resultado
}
// implemente o código do kata 5 aqui
function showResult(resultado){
    const div = document.getElementById('kata5')
    const res = document.createElement('p')
    res.innerText = resultado
    div.appendChild(res)
}

function kata5(num) {
    let resultado = ''
    for(let i = num; i >= -25; i-=2){
        resultado += i + ','
    }
    showResult(resultado)
    return resultado
}
// implemente o código do kata 6 aqui

function showResult(resultado){
    const div = document.getElementById('kata6')
    const res = document.createElement('p')
    res.innerText = resultado
    div.appendChild(res)
}

function kata6(i) {
    let resultado = ''
    for(let i = 3; i <= 100; i++){
        if(i % 3 === 0){
        resultado += i +  ','
        }
    }
    showResult(resultado)
    return resultado
}

// implemente o código do kata 7 aqui
function showResult(resultado){
    const div =  document.getElementById('kata7')
    const res = document.createElement('p')
    res.innerText = resultado
    div.appendChild(res)
}

function kata7() {
    let resultado = ''
    for(let i = 1; i <= 100; i++){
        if(i % 7 === 0){
            resultado += i + ','
        }
    }
    showResult(resultado)
    return(resultado)
}
 // implemente o código do kata 8 aqui
function showResult(resultado) {
    const div = document.getElementById('kata8')    
    const res = document.createElement('p')
    res.innerText = resultado
    div.appendChild(res)
}
function kata8() {
    let resultado = ''
    for(let i = 100; i >= 1; i--){
        if(i % 3 === 0 && i % 7 === 0){
            resultado += i + ','
        }
    }
   showResult(resultado)
   return resultado
}
// implemente o código do kata 9 aqui
function showResult(resultado){
    const div = document.getElementById('kata9')
    const res = document.createElement('p')
    res.innerText = resultado
    div.appendChild(res)
}

function kata9() {
    let resultado = ''
    for(let i = 5; i <= 100 ; i+=5){
        resultado += i + ','
    }
    showResult(resultado)
    return resultado
}
// implemente o código do kata 10 aqui

function showResult(resultado){
    const div = document.querySelector('.kata10')
    const res = document.createElement('p')
    res.innerText = resultado
    div.appendChild(res)
    
}
function kata10() {
    let resultado = sampleArray
    for(let i = 0; i <= sampleArray; i++){
        resultado += i + ','
    }
    showResult(resultado)
    return resultado
}

// implemente o código do kata 11 aqui

function showResult(resultado){
    const div = document.querySelector('.kata11')
    const res = document.createElement('p')
    res.innerText = resultado
    div.appendChild(res)
   
}
function kata11(){
    let resultado = ''
    for(let i = 1; i < sampleArray.length; i++){
        if(sampleArray[i] % 2 === 0){
            resultado += sampleArray[i] + ','
        }

    }
    showResult(resultado)
    return resultado
    
}

 // implemente o código do kata 12 aqui

 function showResult(resultado){
     const div = document.querySelector('.kata12')
     const res = document.createElement('p')
     res.innerText = resultado
     div.appendChild(res)
 }

function kata12() {
    let resultado = ''
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 2 === 1){
            resultado += sampleArray[i] + ','
        }
    }
    showResult(resultado)
    return resultado
   
}
// implemente o código do kata 13 aqui

function showResult(resultado){
    const div = document.querySelector('.kata13')
    const res = document.createElement('p')
    res.innerText = resultado
    div.appendChild(res)    
}

function kata13() {
    let resultado = ''
    for(let i = 0; i <= sampleArray.length; i++){
        if(sampleArray[i] % 8 === 0){
            resultado += sampleArray[i] + ','
        }
    }
    showResult(resultado)
    return resultado
}
// implemente o código do kata 14 aqui

function showResult(resultado){
    const div = document.querySelector('.kata14')
    const res = document.createElement('p')
    res.innerText = resultado
    div.appendChild(res)
}
function kata14() {
   let resultado = ''
   for(let i = 0; i < sampleArray.length; i++){
       resultado += sampleArray[i] * sampleArray[i] +  ','
   }
   showResult(resultado)
   return resultado
}
// implemente o código do kata 15 aqui
function showResult(resultado){
    const div = document.querySelector('.kata15')
    const res = document.createElement('p')
    res.innerText = resultado
    div.appendChild(res)
}
function kata15() {
    let resultado = 0
    for (let i = 0; i <= 20; i++){
        resultado += i
        
    }
    showResult(resultado)
    return resultado
}
// implemente o código do kata 16 aqui
function showResult(resultado){
    const div = document.querySelector('.kata16')
    const res = document.createElement('p')
    res.innerText = resultado
    div.appendChild(res)
}
function kata16() {
    let resultado = 0
    for( let i = 0; i < sampleArray.length; i++){
        resultado += sampleArray[i]
    }
    showResult(resultado)
    return resultado
}
// implemente o código do kata 17 aqui
function showResult(resultado){
    const div = document.querySelector('.kata17')
    const res = document.createElement('p')
    res.innerText = resultado
    div.appendChild(res)
}

function kata17() {
    let resultado = 940
    for (let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] < resultado){
            resultado = sampleArray[i]
        }
    }
    showResult(resultado)
    return resultado
    
}
// implemente o código do kata 18 aqui

function showResult(resultado){
    const div = document.querySelector('.kata18')
    const res = document.createElement('p')
    res.innerText = resultado
    div.appendChild(res)
}

function kata18() {
    let resultado = 0
    for( let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] > resultado){
            resultado = sampleArray[i]
        }
    }
    showResult(resultado)
    return resultado
    
}



/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
