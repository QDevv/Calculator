let one = document.querySelector('.one')
let two = document.querySelector('.two')
let three = document.querySelector('.three')
let four = document.querySelector('.four')
let five = document.querySelector('.five')
let six = document.querySelector('.six')
let seven = document.querySelector('.seven')
let eight = document.querySelector('.eight')
let nine = document.querySelector('.nine')
let del = document.querySelector('.del')
let zero = document.querySelector('.zerro')
let dott = document.querySelector('.dott')
let multiply = document.querySelector('.multiplyy')
let equals = document.querySelector('.equals')
let input = document.querySelector('.input')
let result = document.querySelector('.res')
let input2 = document.querySelector('.input2')
let input3 = document.querySelector('.input3')
let input4 = document.querySelector('.input4')
let divide = document.querySelector('.divide')
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let reset = document.querySelector('.reset')
let tog1 = document.querySelector('.light-red')
let tog2 = document.querySelector('.orange')
let tog3 = document.querySelector('.cyan')


let in1 = input.innerHTML
let in2 =  input2.innerHTML
let in4 =  input4.innerHTML

// let isClosed = true 

let funclightred = () => {
    if (tog1.classList.contains('lightActive')) {
        console.log(5);
      tog1.classList.remove('lightActive');
      tog1.classList.add('light-red');
      tog3.classList.remove('cyanActive');
      tog2.classList.add('lightActive');
      tog3.classList.add('lightActive');
      document.body.style.backgroundColor = "hsl(222, 26%, 31%)"


      document.querySelector('.no1').classList.remove('toggle2')
      document.querySelector('.no2').classList.remove('toggle2')
      document.querySelector('.no3').classList.remove('toggle2')


      document.querySelector('.pp').classList.remove('toggle2')
      document.querySelector('.calc').classList.remove('toggle2')

      
      
    }
}
tog1.addEventListener('click', funclightred)


let funcorange = () => {
 if (!tog2.classList.contains('orangeActive') || tog2.classList.contains('lightActive')) {
     console.log(4);
     tog2.classList.remove('lightActive');
     tog3.classList.remove('cyanActive');
     tog2.classList.add('orangeActive');
    //  tog1.classList.remove('light-red');
     tog1.classList.add('lightActive');
     tog3.classList.add('lightActive');
     document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
    //  document.getElementsByClassName('no').style.color = "black"
    document.querySelector('.no1').classList.add('toggle2')
    document.querySelector('.no2').classList.add('toggle2')
    document.querySelector('.no3').classList.add('toggle2')

    document.querySelector('.pp').classList.add('toggle2')
    document.querySelector('.calc').classList.add('toggle2')

    

     
    //  document.querySelector('body').style.display = 'white';
// console.log(!false);
 }
}
tog2.addEventListener('click', funcorange)

let funcCyan = () => {
    if (!tog3.classList.contains('cyanActive') || tog3.classList.contains('lightActive')) {
        tog3.classList.add('cyanActive');
        tog2.classList.add('lightActive');
        tog1.classList.add('lightActive');
        // console.log(!true);
        document.body.style.backgroundColor = "red";
        document.querySelector('.calculator-display').classList.add('toggle3')
        // document.querySelector('.grid').classList.add('toggle3')
       

    }

}
tog3.addEventListener('click', funcCyan)


let funcOne = () => {
    

    // console.log(input.innerHTML != "" && input2.innerHTML != "");
    // console.log(input2.value);
   if (input.innerHTML == "") {
      input.innerHTML = 1
   }
   else if (input.innerHTML != "" && input2.innerHTML == "") {
       
       input2.innerHTML = 1
   }
   else if (input.innerHTML != "" && input2.innerHTML != "" && input3.innerHTML == "") {
    input3.innerHTML = 1;
   
       
   }
   else if (input3.innerHTML != "") {
       input4.innerHTML = 1;
   }

}
// let mood = funcOne()
// console.log(mood);
// funcOne()    
one.addEventListener('click', funcOne)


let funcTwo = () => {
   if (input.innerHTML == "") {
       input.innerHTML = 2
   }
   else if (input.innerHTML != "" && input2.innerHTML == "") {
       
       input2.innerHTML = 2
   }
   else if (input.innerHTML != "" && input2.innerHTML != "" && input3.innerHTML == "") {
    input3.innerHTML = 2;
   
       
   }
   else if (input3.innerHTML != "") {
       input4.innerHTML = 2;
   }
   else{
       
   }

}
// let mood = funcOne()
// console.log(mood);
// funcOne()    
two.addEventListener('click', funcTwo)


let funcThree = () => {
    if (input.innerHTML == "") {
       return input.innerHTML = 3
    }
    else if (input.innerHTML != "" && input2.innerHTML == "") {
        
        input2.innerHTML = 3
    }
    else if (input.innerHTML != "" && input2.innerHTML != "" && input3.innerHTML == "") {
     input3.innerHTML = 3;
    
        
    }
    else if (input3.innerHTML != "") {
        input4.innerHTML = 3;
    }
 
 }
 // let mood = funcOne()
 // console.log(mood);
 // funcOne()    
 three.addEventListener('click', funcThree)


 let funcfour = () => {
    if (input.innerHTML == "") {
       return input.innerHTML = 4
    }
    else if (input.innerHTML != "" && input2.innerHTML == "") {
        
        input2.innerHTML = 4
    }
    else if (input.innerHTML != "" && input2.innerHTML != "" && input3.innerHTML == "") {
     input3.innerHTML = 4;
    
        
    }
    else if (input3.innerHTML != "") {
        input4.innerHTML = 4;
    }
 
 }
 // let mood = funcOne()
 // console.log(mood);
 // funcOne()    
 four.addEventListener('click', funcfour)




 let funcfive = () => {
    if (input.innerHTML == "") {
       return input.innerHTML = 5
    }
    else if (input.innerHTML != "" && input2.innerHTML == "") {
        
        input2.innerHTML = 5
    }
    else if (input.innerHTML != "" && input2.innerHTML != "" && input3.innerHTML == "") {
     input3.innerHTML = 5;
    
        
    }
    else if (input3.innerHTML != "") {
        input4.innerHTML = 5;
    }
 
 }
 // let mood = funcOne()
 // console.log(mood);
 // funcOne()    
 five.addEventListener('click', funcfive)


 let funcsix = () => {
    if (input.innerHTML == "") {
       return input.innerHTML = 6
    }
    else if (input.innerHTML != "" && input2.innerHTML == "") {
        
        input2.innerHTML = 6
    }
    else if (input.innerHTML != "" && input2.innerHTML != "" && input3.innerHTML == "") {
     input3.innerHTML = 6;
    
        
    }
    else if (input3.innerHTML != "") {
        input4.innerHTML = 6;
    }
 
 }
 // let mood = funcOne()
 // console.log(mood);
 // funcOne()    
 six.addEventListener('click', funcsix)



 let funcseven = () => {
    if (input.innerHTML == "") {
       return input.innerHTML = 7
    }
    else if (input.innerHTML != "" && input2.innerHTML == "") {
        
        input2.innerHTML = 7
    }
    else if (input.innerHTML != "" && input2.innerHTML != "" && input3.innerHTML == "") {
     input3.innerHTML = 7;
    
        
    }
    else if (input3.innerHTML != "") {
        input4.innerHTML = 7;
    }
 
 }
 // let mood = funcOne()
 // console.log(mood);
 // funcOne()    
 seven.addEventListener('click', funcseven)

 let funceight= () => {
    if (input.innerHTML == "") {
       return input.innerHTML = 8
    }
    else if (input.innerHTML != "" && input2.innerHTML == "") {
        
        input2.innerHTML = 8
    }
    else if (input.innerHTML != "" && input2.innerHTML != "" && input3.innerHTML == "") {
     input3.innerHTML = 8;
    
        
    }
    else if (input3.innerHTML != "") {
        input4.innerHTML = 8;
    }
 
 }
 // let mood = funcOne()
 // console.log(mood);
 // funcOne()    
 eight.addEventListener('click', funceight)


 let funcnine = () => {
    if (input.innerHTML == "") {
       return input.innerHTML = 9
    }
    else if (input.innerHTML != "" && input2.innerHTML == "") {
        
        input2.innerHTML = 9
    }
    else if (input.innerHTML != "" && input2.innerHTML != "" && input3.innerHTML == "") {
     input3.innerHTML = 9;
    
        
    }
    else if (input3.innerHTML != "") {
        input4.innerHTML = 9;
    }
 
 }
 // let mood = funcOne()
 // console.log(mood);
 // funcOne()    
 nine.addEventListener('click', funcnine)


 let funczero = () => {
    if (input.innerHTML == "") {
       return input.innerHTML = 0
    }
    else if (input.innerHTML != "" && input2.innerHTML == "") {
        
        input2.innerHTML = 0
    }
    else if (input.innerHTML != "" && input2.innerHTML != "" && input3.innerHTML == "") {
     input3.innerHTML = 0;
    
        
    }
    else if (input3.innerHTML != "") {
        input4.innerHTML = 0;
    }
 
 }
 // let mood = funcOne()
 // console.log(mood);
 // funcOne()    
 zero.addEventListener('click', funczero)


 let funcdel = () => {
    if (input4.innerHTML !== "") {
       return input4.innerHTML = ""
    }
    else if (input4.innerHTML == "" && input3.innerHTML != "") {
        
        input3.innerHTML = ""
    }
    else if (input3.innerHTML == "" && input2.innerHTML != "") {
     input2.innerHTML = "";
    
        
    }
    else if (input2.innerHTML == "" && input.innerHTML != "") {
        input.innerHTML = "";
    }
 
 }
 // let mood = funcOne()
 // console.log(mood);
 // funcOne()    
 del.addEventListener('click', funcdel)


 let funcreset = () => {
input.innerHTML = "";
input2.innerHTML = "";
input3.innerHTML = "";
input4.innerHTML = "";
result.innerHTML = "";
 
 }
 // let mood = funcOne()
 // console.log(mood);
 // funcOne()    
 reset.addEventListener('click', funcreset)












// console.log(input2.innerHTML != "" );
// funcOne()

let funcMultiply = () => {
    console.log(`${input.innerHTML}`);
    if (input.innerHTML != "" && input2.innerHTML == "") {
        
        input2.innerHTML = 'x';
       
    }
    else if (input.innerHTML != "" && input2.innerHTML != "" && input3.innerHTML == "") {
     input3.innerHTML = 'x';
       
    }
}
multiply.addEventListener('click', funcMultiply)

//  DIVIDE


let funcDivide = () => {
    // console.log(`${input.innerHTML}`);
    if (input.innerHTML != "" && input2.innerHTML == "") {
        
        input2.innerHTML = '/';
       
    }
    else if (input.innerHTML != "" && input2.innerHTML != "" && input3.innerHTML == "") {
     input3.innerHTML = '/';
       
    }
}
divide.addEventListener('click', funcDivide)


let funcAdd= () => {
    // console.log(`${input.innerHTML}`);
    if (input.innerHTML != "" && input2.innerHTML == "") {
        
        input2.innerHTML = '+';
       
    }
    else if (input.innerHTML != "" && input2.innerHTML != "" && input3.innerHTML == "") {
     input3.innerHTML = '+';
       
    }
}
plus.addEventListener('click', funcAdd)


let funcMinus= () => {
    // console.log(`${input.innerHTML}`);
    if (input.innerHTML != "" && input2.innerHTML == "") {
        
        input2.innerHTML = '-';
       
    }
    else if (input.innerHTML != "" && input2.innerHTML != "" && input3.innerHTML == "") {
     input3.innerHTML = '-';
       
    }
}
minus.addEventListener('click', funcMinus)


let funcResult = () => {
    console.log(`${input.innerHTML}${input2.innerHTML}` * `${input4.innerHTML}` * 2);
    console.log(`${input2.innerHTML}`);
    console.log(`${input3.innerHTML}`);
    console.log(`${input.innerHTML}`);
    console.log(`${input4.innerHTML}`);



    if (input2.innerHTML != "" && input.innerHTML != "" && input3.innerHTML == "x" && input4.innerHTML != "") {
     `${input.innerHTML}${input2.innerHTML}` * `${input4.innerHTML}`;
      let d =  `${input.innerHTML}${input2.innerHTML}` * `${input4.innerHTML}`;
      result.innerHTML = d.toFixed(2);
      
    }

    else if (input.innerHTML != "" && input2.innerHTML == "x" && input3.innerHTML != "" && input4.innerHTML != "") {
        `${input.innerHTML}` * `${input3.innerHTML}${input4.innerHTML}`;
         let d = `${input.innerHTML}` * `${input3.innerHTML}${input4.innerHTML}`;
         result.innerHTML = d;

       }
       
       
  else if (input.innerHTML != "" && input2.innerHTML != "" && input3.innerHTML == "/" && input4.innerHTML != "") {
        `${input.innerHTML}${input2.innerHTML}` / `${input4.innerHTML}`;
         let d =  `${input.innerHTML}${input2.innerHTML}` / `${input4.innerHTML}`;
         result.innerHTML = d;
  }

  else if (input.innerHTML != "" && input2.innerHTML == "/" && input3.innerHTML != "" && input4.innerHTML != "") {
    `${input.innerHTML}` / `${input3.innerHTML}${input4.innerHTML}`;
     let d =  `${input.innerHTML}` / `${input3.innerHTML}${input4.innerHTML}`;
     result.innerHTML = d;
      
   }
   else if (input.innerHTML != "" && input2.innerHTML != "" && input3.innerHTML == "+" && input4.innerHTML != "") {
   Number(`${input.innerHTML}${input2.innerHTML}`) + Number(`${input4.innerHTML}`);
     let d =  Number(`${input.innerHTML}${input2.innerHTML}`) + Number(`${input4.innerHTML}`);
     result.innerHTML = d;
}
    else if (input.innerHTML != "" && input2.innerHTML == "+" && input3.innerHTML != "" && input4.innerHTML != "") {
   Number(`${input.innerHTML}`) + Number(`${input3.innerHTML}${input4.innerHTML}`);
     let d =  Number(`${input.innerHTML}`) + Number(`${input3.innerHTML}${input4.innerHTML}`);
     result.innerHTML = d;
      
   }

   else if (input.innerHTML != "" && input2.innerHTML != "" && input3.innerHTML == "-" && input4.innerHTML != "") {
    Number(`${input.innerHTML}${input2.innerHTML}`) - Number(`${input4.innerHTML}`);
      let d =  Number(`${input.innerHTML}${input2.innerHTML}`) - Number(`${input4.innerHTML}`);
      result.innerHTML = d;
 }
     else if (input.innerHTML != "" && input2.innerHTML == "-" && input3.innerHTML != "" && input4.innerHTML != "") {
    Number(`${input.innerHTML}`) - Number(`${input3.innerHTML}${input4.innerHTML}`);
      let d = Number(`${input.innerHTML}`) - Number(`${input3.innerHTML}${input4.innerHTML}`);
      result.innerHTML = d;
    }
    else if (input.innerHTML != "" && input2.innerHTML == "x" && input3.innerHTML != "" ) {
       result.innerHTML = `${input.innerHTML}` * `${input3.innerHTML}`
    }
    else if (input.innerHTML != "" && input2.innerHTML == "/" && input3.innerHTML != "" ) {
        result.innerHTML = `${input.innerHTML}` / `${input3.innerHTML}`
     }
     else if (input.innerHTML != "" && input2.innerHTML == "+" && input3.innerHTML != "" ) {
        result.innerHTML = Number(`${input.innerHTML}`) + Number(`${input3.innerHTML}`)
     }
     else if (input.innerHTML != "" && input2.innerHTML == "-" && input3.innerHTML != "" ) {
        result.innerHTML = `${input.innerHTML}` - `${input3.innerHTML}`
     }
}

equals.addEventListener('click', funcResult)


