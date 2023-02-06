// Création et configuration d'un objet XML
const xhr = new XMLHttpRequest();
xhr.open("GET", "../../back/database/eleves.json", true);
xhr.send();

 // Code à exécuter une fois le fichier XML est chargé*
xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    // Récupération de la réponse contenant les données XML
    const json = this.response;
    
    console.log(JSON.parse(json))

   // Manipulation du DOM pour récupérer aux données XML
    // et les afficher dans les cards
  }
}