let btnNode = document.getElementById('myButton');
btnNode.addEventListener('click', function () {
    btnNode.innerText = 'Clicked';
});

let h1 = document.getElementById('myH1');
h1.addEventListener('mouseenter', function(){
    h1.style.color = 'blue';
});

h1.addEventListener('mouseleave', function(){
    h1.style.color = 'black';
});
