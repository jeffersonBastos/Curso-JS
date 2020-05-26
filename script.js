
var appElement = document.querySelector('#app');

var buttonElement = document.createElement('button');
var textButton = document.createTextNode('Adicionar');

buttonElement.appendChild(textButton);

var inputElement = document.createElement('input');

inputElement.setAttribute("type", "text");
inputElement.setAttribute("name", "user");
inputElement.placeholder = "Nome do usuario";

var listElement = document.createElement('ul');

appElement.appendChild(inputElement);
appElement.appendChild(buttonElement);
appElement.appendChild(listElement);



function getValueInput(){
 var usuario = inputElement.value;
 inputElement.value = '';
 return 'https://api.github.com/users/'+usuario+'/repos'; 

};

   

   buttonElement.onclick = function (){
    listElement.innerHTML = '';
  
    var carregandoElement = document.createElement('li');
    var carregandoText = document.createTextNode("Carregando Repositorios");
            
    carregandoElement.appendChild(carregandoText);
    listElement.appendChild(carregandoElement);
    axios.get(getValueInput())
        .then(function(response){
            listElement.innerHTML = '';
            for(repo of response.data){
                var repoElement = document.createElement('li');
                var nameRepo = document.createTextNode(repo.name);
                
                repoElement.appendChild(nameRepo);
                listElement.appendChild(repoElement);
            }
        })
        .catch(function(error){
            
            listElement.innerHTML = '';
            var errorElement = document.createElement('li');
            var errorText = document.createTextNode("Esse usuario é inexistente");
            
            errorElement.appendChild(errorText);
            listElement.appendChild(errorElement);
            
        });
        
    }


   
   