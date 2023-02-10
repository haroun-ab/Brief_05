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
  let moyfrancaisT1 = 0
  let coefSumFr = 0

  let moyMathT1 = 0
  let coefSumMath = 0

  let moyAnglaisT1 = 0
  let coefSumAng = 0

  let moyHistGeoT1 = 0
  let coefSumHg = 0

  let moyEpsT1 = 0
  let coefSumEps = 0   
  const noteTab = trimestre.notation.francais.notes

  // Boucle pour parcourir toutes les notes d'une seule matière
  for (let x = 0; x < noteTab.length; x++){
    // Moyenne Français
    coefSumFr += trimestre.notation.francais.notes[x][1]
    moyMathT1 += trimestre.notation.francais.notes[x][0] * trimestre.notation.francais.notes[x][1] 
  
    // Moyenne Math
    coefSumMath += trimestre.notation.math.notes[x][1]
    moyfrancaisT1 += trimestre.notation.math.notes[x][0] * trimestre.notation.math.notes[x][1] 
  
    // Moyenne Anglais
    coefSumAng += trimestre.notation.anglais.notes[x][1]
    moyAnglaisT1 += trimestre.notation.anglais.notes[x][0] * trimestre.notation.anglais.notes[x][1] 

    // Moyenne Histoire-Géo
    coefSumHg += trimestre.notation.histGeo.notes[x][1]
    moyHistGeoT1 += trimestre.notation.histGeo.notes[x][0] * trimestre.notation.histGeo.notes[x][1] 

    // Moyenne EPS
    coefSumEps += trimestre.notation.eps.notes[x][1]
    moyEpsT1 += trimestre.notation.eps.notes[x][0] * trimestre.notation.eps.notes[x][1] 
  }

  const moyenneTrimestre = (moyfrancaisT1/ coefSumFr *2 + moyMathT1/ coefSumMath *2 + moyHistGeoT1/ coefSumHg *5 + moyAnglaisT1/ coefSumAng *1 + moyEpsT1/ coefSumEps * 3) / (1+2+2+3+5)
  // Je retourne la moyenne
  return moyenneTrimestre
}






// Déconnexion
document.querySelector('a#logout').onclick = () => {
  sessionStorage.removeItem('session')
}
