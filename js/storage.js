var nomes = JSON.parse(localStorage.getItem('list_nomes')) || [];
var ul = document.querySelector('#app ul');
var tnome = document.querySelector('#nome');
var tmsg = document.querySelector('#msg');
var btn_add = document.querySelector('.btn');

function render(){
 ul.innerHTML = '';
 for(nome of nomes){
     var li = document.createElement('li');
     var text = document.createTextNode(nome);
     li.appendChild(text);
     ul.appendChild(li);

 }
}
render();

btn_add.onclick = function(){
    adicionar();
}

function adicionar(){
    var result = tmsg.value;
    if(result!==''){
     nomes.push(result);
     nomes.value = '';
     render();
     saveToStorage()
    }
}

function deletar(pos){
 nomes.splice(pos,1);
 render();
 saveToStorage()
}

function saveToStorage(){
    localStorage.setItem('list_nomes', JSON.stringify(nomes));
}