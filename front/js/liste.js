if(!sessionStorage.getItem('session')){
  location.pathname = '/front/html/login.html'
}

// Création et configuration d'un objet de requête XML
const xhr = new XMLHttpRequest();
xhr.open("GET", "../../back/database/eleves.json", true);
xhr.send();

 // Code à exécuter une fois le fichier XML est chargé*
xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    // Récupération de la réponse contenant les données XML
    const data = this.response;
    
    const studentArray = JSON.parse(data)
    const listContainer = document.querySelector('.list') 
    for(let i = 0; i < studentArray.length; i++){
      
      





    
      
      
      listContainer.innerHTML += `
      <a href="/front/html/notes.html?id=${studentArray[1].pseudo}" class="student">${studentArray[i].nomPrenom} <div class="moyenne" id="average1">12.6</div></a>`
    }
  }
}








// Déconnexion
document.querySelector('a#logout').onclick = () => {
  sessionStorage.removeItem('session')
}
