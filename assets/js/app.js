window.onload = function(){
    var btn =document.getElementById('button-change');
    var txt = document.getElementById('paragraph');
    var btnDos = document.getElementById('magic');
    var txtDos = document.getElementById('text');

btn.addEventListener('click',function(){
    var txt = document.getElementById('paragraph');
    txt.innerHTML= '<h2>te amamos con ganas GIT</h2>';
 
})
btnDos.addEventListener('clik',function(){
    //txtDos.innerHTML ='';
    txtDos.classList.add('disappear');
})


}