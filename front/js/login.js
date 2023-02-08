if (sessionStorage.getItem('session') && sessionStorage.getItem('session')== 'prof'){
  location.pathname = '/front/html/liste.html'
}

if (sessionStorage.getItem('session') && sessionStorage.getItem('session')== 'eleves'){
  location.pathname = '/front/html/notes.html'
}
const form = document.querySelector('form')

form.onsubmit = (e) => {
    e.preventDefault()

    const dataObj = {
        pseudo: document.querySelector('#id').value,
        mdp: document.querySelector('#pw').value
    }
    // Création et configuration d'un objet XML
const xhr = new XMLHttpRequest();
xhr.open("POST", "http://127.0.0.1:8000/login.php", true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
xhr.setRequestHeader("Access-Control-Allow-Methods", "*");

 // Code à exécuter une fois le fichier XML est chargé*
xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    // Récupération de la réponse contenant les données XML
    const data = this.response;
    
    
if(data === "teacher successful log in"){
    location = "./liste.html"
    sessionStorage.setItem('session', 'prof');
}

if(data === "student successful log in"){
  location = `./notes.html?id=${dataObj.pseudo}`
  sessionStorage.setItem('session', 'eleves');
}

console.log(sessionStorage.getItem('session'))

    // Manipulation du DOM pour récupérer aux données XML
    // et les afficher dans les cards
  }
}
xhr.send(`data= ${JSON.stringify(dataObj)}`);
}


