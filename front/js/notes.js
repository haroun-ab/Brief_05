if(!sessionStorage.getItem('session')){
    location.pathname = '/front/html/login.html'
}
  
if (sessionStorage.getItem('session') && sessionStorage.getItem('session')== 'eleves'){
    document.querySelector('a#home').remove()
    document.querySelector('.edit-btn').style.cssText = "display: none"
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

    // Récupération de l'id stocké dans les params
    var paramsId = new URLSearchParams(window.location.search).get('id');



const trimestreBtn = document.querySelectorAll(".btn-group nav button")
const tableContainer = document.querySelector('main .table-container')


tableContainer.id = `t${1}`
fillReport(tableContainer.id)
  trimestreBtn[0].style.cssText = "color: var(--primary); font-weight: 600";

  

  //----Entrer et sortir du mode modification-----//
const table = document.querySelector('table');
const allInputs = document.querySelectorAll('input')
const allTextArea = document.querySelectorAll('textarea')
const h1 = document.querySelector('h1')
const switchBtn = document.querySelector('.btn-group > button')

switchMode(table, allInputs, allTextArea, h1, switchBtn)


// ------Séléction des trimestres (2)------//
for (let i = 0; i<trimestreBtn.length; i++){
  trimestreBtn[i].onclick = () => {
    trimestreBtn.forEach(btn => {
      btn.style.cssText = "color: black; font-weight: 400";
    });
    tableContainer.id = `t${i+1}`
    trimestreBtn[i].style.cssText = "color: var(--primary); font-weight: 600";
    fillReport(tableContainer.id)
    const ctx = document.querySelector('#myChart');
    ctx.remove()
     //----Entrer et sortir du mode modification-----//

          

    const table = document.querySelector('table');
    const allInputs = document.querySelectorAll('input')
    const allTextAreas = document.querySelectorAll('textarea')
    const h1 = document.querySelector('h1')
    const switchBtn = document.querySelector('.btn-group > button')

    switchMode(table, allInputs, allTextAreas, h1, switchBtn)
}
};

function switchMode(table, allInputs, allTextAreas, h1, switchBtn) {
    if(table.classList.contains('show')){
        allInputs.forEach(element => {
            element.setAttribute('readonly', '')
        });
    
        allTextAreas.forEach(element => {
            element.setAttribute('readonly', '')
        });
    };
              
    switchBtn.onclick = () => {
        if (switchBtn.classList.contains('edit-btn')){
            // Changer de bouton
            switchBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i><span class="text-btn">Valider</span>`
            switchBtn.classList.replace('edit-btn', 'save-btn')
            
            // Changer le titre de la page
            for(let i = 0; i < studentArray.length; i++){
                if(studentArray[i].pseudo == paramsId){
                    h1.innerHTML = `Notes de <span class="nom-eleve">${studentArray[i].nomPrenom}</span> (Mode modification)`
                }
            }

            // Changer la classe de la table
            table.classList.replace('show', 'edit');
    
            // Rendre les champs modifiables
            allInputs.forEach(element => {
                element.removeAttribute('readonly');
            });
    
            allTextAreas.forEach(element => {
                element.removeAttribute('readonly', '');
            });
    
            // Désactiver les boutons de séléction des trimestres
            trimestreBtn.forEach(element => {
                element.setAttribute('disabled', 'disabled')
            });

    
        } else {
            // Changer de bouton
            switchBtn.innerHTML = `<i class="fa-solid fa-pencil"></i><span class="text-btn">Modifier</span>`
            switchBtn.classList.replace('save-btn', 'edit-btn')
              
            // Changer le titre de la page
            for(let i = 0; i < studentArray.length; i++){
            if(studentArray[i].pseudo == paramsId){
                h1.innerHTML = `Notes de <span class="nom-eleve">${studentArray[i].nomPrenom}</span>`
            }
        }

            
            // Changer la classe de la table
            table.classList.replace('edit', 'show')
    
            // Rendre les champs non-modifiables
            allInputs.forEach(element => {
                element.setAttribute('readonly', '')
            });
        
            allTextAreas.forEach(element => {
                element.setAttribute('readonly', '')
            });
    
            // Réactiver les boutons de séléction des trimestres
            trimestreBtn.forEach(element => {
                element.removeAttribute('disabled')
            });  

         


            const trTab = document.querySelectorAll('tbody tr')
            for(let i = 0; i < studentArray.length; i++){
                if(studentArray[i].pseudo == paramsId){

                    const trimesterObj = {}
                    const notesArr = []

            for(let j = 0; j<trTab.length; j++){
                // Récupération des notes
                const trNotesArray  = []
                const notesDivTab = trTab[j].querySelectorAll('.note-coef')
                for(let z = 0; z < notesDivTab.length; z++){
                    const note = notesDivTab[z].children[0].value
                    const coef = notesDivTab[z].children[1].value
                    if(note.length > 0 && coef.length > 0){
                        const singleNoteArr = [Number(note), Number(coef)] 
                        trNotesArray.push(singleNoteArr)
                    }
                }   
                //Récupération des appréciations 

                notesArr.push(trNotesArray)
              
            }
            const txtAreaArr = document.querySelectorAll('textarea')
            
                const obj =  {notation : {
                        francais : {notes : notesArr[0], coef: 2, appreciation :   txtAreaArr[0].value},
                        math : {notes : notesArr[1], coef: 2, appreciation :   txtAreaArr[1].value},
                        histGeo : {notes : notesArr[2], coef: 5, appreciation :  txtAreaArr[2].value},
                        anglais : {notes : notesArr[3], coef: 1, appreciation :  txtAreaArr[3].value},
                        eps : {notes : notesArr[4], coef: 3, appreciation : txtAreaArr[4].value}
                        }, appreciationGenerale:   txtAreaArr[5].value 
                        }
                        console.log(notesArr[1])
                trimesterObj[tableContainer.id] = obj
                        
                        const objectData = Object.assign(studentArray[i], trimesterObj)
                        console.log(objectData)
                    // Création et configuration d'un objet de requête AJAX
                    const xhr = new XMLHttpRequest();
                    xhr.open("POST", "http://127.0.0.1:8000/editNotes.php", true);
                    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
                    xhr.setRequestHeader("Access-Control-Allow-Methods", "*");

                    // Code à exécuter une fois le fichier JSON est chargé*
                    xhr.onreadystatechange = function() {
                        if (this.readyState == 4 && this.status == 200) {
                            // Récupération de la réponse contenant les données JSON
                            const data = this.response;
                            console.log(data);
                        }
                    }
                    xhr.send(`data= ${JSON.stringify(objectData)}`);
                }
            } 
        }
    }
 }

  function fillReport(id) {

    for(let i = 0; i < studentArray.length; i++){
        if(studentArray[i].pseudo == paramsId){
            document.querySelector('.nom-eleve').innerHTML = studentArray[i].nomPrenom
            
            const tableContainer = document.querySelector('main .table-container')

            tableContainer.innerHTML = `<table class="show" >
           <form><thead><td class="matieres">Matières</td><td class="moyennes">Moy.</td><td class="notes">Notes</td><td class="appreciation">Appréciations</td></thead>
           <tbody>
           <tr id="francais">
                 <td>
                     <span class="flex-between"><span class="matiere bold ">Français</span><span class="coef-matiere">2</span></span>
                     <span class="little">Mme&nbsp;Perrin</span>
                 </td>
                 <td class="moy bold">11.2</td>
                 <td class="notation flex-center"></td>             
                 <td class="appreciation"><textarea oninput="updateTextareaHeight(this)">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, recusandae.</textarea></td>
             </tr>
             <tr id="math">
             <td>
             <span class="flex-between"><span class="matiere bold ">Math</span><span class="coef-matiere">2</span></span>
             <span class="little">M.&nbsp;Darmanyan</span>
             </td>
             <td class="moy bold">11.2</td>
             <td class="notation flex-center"></td>             
             <td class="appreciation"><textarea oninput="updateTextareaHeight(this)">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, recusandae.</textarea></td>
         </tr>
         <tr id="histGeo">
             <td>
             <span class="flex-between"><span class="matiere bold ">Hist-Géo</span><span class="coef-matiere">5</span></span>
                 <span class="little">Mme&nbsp;Carl</span>
             </td>
             <td class="moy bold">11.2</td>
             <td class="notation flex-center"></td>             
             <td class="appreciation"><textarea oninput="updateTextareaHeight(this)">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, recusandae.</textarea></td>
         </tr>
         <tr id="anglais">
             <td>
             <span class="flex-between"><span class="matiere bold">Anglais</span><span class="coef-matiere">1</span></span>
             <span class="little">Mme&nbsp;Houadeg</span>
             </td>
             <td class="moy bold">11.2</td>
             <td class="notation flex-center"></td>             
             <td class="appreciation"><textarea oninput="updateTextareaHeight(this)">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, recusandae.</textarea></td>
         </tr>
         <tr id="eps">
             <td>
             <span class="flex-between"><span class="matiere bold">EPS</span><span class="coef-matiere">3</span></span>
             <span class="little">M.&nbsp;Martinelli</span>
             </td>
             <td class="moy bold">11.2</td>
             <td class="notation flex-center"></td>             
             <td class="appreciation"><textarea oninput="updateTextareaHeight(this)">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, recusandae.</textarea></td>
         </tr>
           </tbody>
           <tfoot>
               <tr><td>Générale</td><td class="moygen">11.2</td><td colspan="2"><textarea oninput="updateTextareaHeight(this)">${studentArray[i][id].appreciationGenerale}</textarea></td></tr>
           </tfoot>
           </form>
           </table>`;
           const trTab = document.querySelectorAll('tbody tr')

           let moyGen = 0
           let totalCoef = 0
           // Pour les stats 
           const moyTabStats = []
           const matiereTab = []
           for(let j = 0; j<trTab.length; j++){
            let moy = 0
            let coef = 0
   
              // appreciation   
                document.querySelector(`#${trTab[j].id} .appreciation textarea`).innerHTML = studentArray[i][id].notation[trTab[j].id].appreciation
                const notesTab = studentArray[i][id].notation[trTab[j].id].notes
                for(let x = 0; x < notesTab.length; x++){
                    document.querySelector(`#${trTab[j].id} .notation`).innerHTML += `<div class="note-coef"><input class="note" type="text" value="${notesTab[x][0]}"> <input class="coef" type="text" value="${notesTab[x][1]}"></div>`
                    // moyenne d'une matière
                    moy += notesTab[x][0] * notesTab[x][1] 
                    // total des coef
                    coef += notesTab[x][1]  
                }
                for(let w = 0; w < 6 - notesTab.length; w++){
                    document.querySelector(`#${trTab[j].id} .notation`).innerHTML += `<div class="note-coef"><input class="note" type="text" value=""> <input class="coef" type="text" value=""></div>`
                }
               
                const moyenneMatiere = (moy/coef).toFixed(2)
                document.querySelector(`#${trTab[j].id} .moy.bold`).innerHTML = moyenneMatiere
                const matiereCoef = studentArray[i][id].notation[trTab[j].id].coef
                totalCoef += matiereCoef
                moyGen += moyenneMatiere * matiereCoef
                moyTabStats.push(moyenneMatiere)
                matiereTab.push(trTab[j].id)
           }
           document.querySelector(`.moygen`).innerHTML = (moyGen/totalCoef).toFixed(2)

           console.log(matiereTab); 
           console.log(moyTabStats); 
           chart(moyTabStats)
           
            /* Statistiques*/ 
          
        }
        
    }
  }  
}
}

function chart(moyTabStats){
    const ctx = document.createElement('canvas');
    ctx.id = 'myChart'
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Français', 'Math', 'Histoire-Géo', 'Anglais', 'EPS'],
        datasets: [{
          label: 'Moyenne',
          data: [moyTabStats[0],moyTabStats[1],moyTabStats[2],moyTabStats[3], moyTabStats[4]],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            min: 0,
            max: 20
          }
        }
      }
    });
    const container = document.querySelector('.modal-body div');
    container.appendChild(ctx)
}
 // Déconnexion
 document.querySelector('a#logout').onclick = () => {
    sessionStorage.removeItem('session')
  }
