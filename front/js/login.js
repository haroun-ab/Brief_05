if (
  localStorage.getItem("session") &&
  localStorage.getItem("session") == "prof"
) {
  location.pathname = "/front/html/liste.html";
}

if (
  localStorage.getItem("session") &&
  localStorage.getItem("session") == "eleves"
) {
  location.pathname = "/front/html/notes.html";
}
const form = document.querySelector("form");

form.onsubmit = (e) => {
  e.preventDefault();

  const dataObj = {
    pseudo: document.querySelector("#id").value,
    mdp: document.querySelector("#pw").value,
  };
  // Création et configuration d'un objet de requête AJAX
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "http://127.0.0.1:8000/login.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
  xhr.setRequestHeader("Access-Control-Allow-Methods", "*");

  // Code à exécuter une fois le fichier JSON est chargé*
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Récupération de la réponse contenant les données JSON
      const data = this.response;

      if (data === "teacher successful log in") {
        location = "./liste.html";
        localStorage.setItem("session", "prof");
      } else if (data === "student successful log in") {
        location = `./notes.html?id=${dataObj.pseudo}`;
        localStorage.setItem("session", "eleves");
      } else {
        let erreur;
        let pseudo = document.getElementById("id");
        let password = document.getElementById("pw");
        if(!password.value && !pseudo.value){
          erreur = "Veuillez renseigner votre identifiant et votre mot de passe";
        }else if (!password.value) {
          erreur = "Veuillez renseigner votre mot de passe";
        }else if (!pseudo.value) {
          erreur = "Veuillez renseigner votre identifiant";
        }else{
          erreur = "Les identifiants saisis sont incorrects";
        }
       
      
        if (erreur) {
          document.getElementById("erreur").innerHTML = erreur;
        }
      }
    }
  };
  xhr.send(`data= ${JSON.stringify(dataObj)}`);
};
