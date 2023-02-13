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
    
    let tab = []
    for(let i = 0; i < studentArray.length; i++){
      listContainer.innerHTML += `
      <a href="/front/html/notes.html?id=${studentArray[i].pseudo}" class="student"><span class="student-name">${studentArray[i].nomPrenom}</span> <div class="moyGen">moy</div></a>`
      annualAvg()

    }

   
     
    // Calcul moyenne annuelle
      function annualAvg(){
        const studentTab = document.querySelectorAll('a.student')
        for(let i = 0; i < studentTab.length; i++){
          if(studentArray[i].nomPrenom == studentTab[i].querySelector('span').innerText){
            const annualMoy = (trimestreAvg(studentArray[i].t1) + trimestreAvg(studentArray[i].t2) + trimestreAvg(studentArray[i].t3)) / 3
            studentTab[i].querySelector('.moyGen').innerText = annualMoy.toFixed(2) // arrondi au dixième
          }
        }
      }
  }
}

// Fonction qui calcule la moyenne d'un seul trimestre 
function trimestreAvg(trimestre){

  let moyenneTrimestre = 0

 

  const matiereTab = ['francais', 'math', 'anglais', 'histGeo', 'eps']
    // Boucle pour parcourir toutes les matières
  for(let i = 0; i<matiereTab.length; i++){
    let moySum = 0
    let coefSum = 0   
    const noteTab = trimestre.notation[matiereTab[i]].notes
  // Boucle pour parcourir toutes les notes d'une seule matière
    for (let x = 0; x < noteTab.length; x++){
  coefSum += noteTab[x][1]
  moySum += noteTab[x][0] * noteTab[x][1]
}
    moyenneTrimestre += (moySum/coefSum) * trimestre.notation[matiereTab[i]].coef
  }
  moyenneTrimestre/=13



  
  // Je retourne la moyenne
  return moyenneTrimestre
}

// Déconnexion
document.querySelector('a#logout').onclick = () => {
  sessionStorage.removeItem('session')
}
