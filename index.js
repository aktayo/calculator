let display = document.querySelector('input');
let buttons = document.querySelectorAll('.bttn');
let ans = document.querySelector('.equal');
let clr = document.querySelector('.clear');
// let multiply = document.querySelector('.mult');
 
buttons.forEach(function(buttn){
    buttn.addEventListener('click', function(e){
        let value = e.target.dataset.val;
    display.value +=value;
    let num =display.value;
    }
    )
})
clr.addEventListener('click', ()=>display.value ='');
function res(){
    display.forEach(digit);
    console.log(digit);
}
ans.addEventListener('click', function (e){
   display.value = eval(display.value) ;
})
