let display = document.querySelector('input');
let buttons = document.querySelectorAll('button');
let ans = document.querySelector('equal');
let clr = document.querySelector('.clear');
 
buttons.forEach(function(butto){
    butto.addEventListener('click', function(e){
        let value = e.target.dataset.val;
    display.value +=value;
    let num =display.value;
    console.log(num);}
    )
})