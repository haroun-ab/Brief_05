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
   
     //----Entrer et sortir du mode modification-----//

          

const table = document.querySelector('table');
const allInputs = document.querySelectorAll('input')
const allTextArea = document.querySelectorAll('textarea')
const h1 = document.querySelector('h1')
const switchBtn = document.querySelector('.btn-group > button')

switchMode(table, allInputs, allTextArea, h1, switchBtn)
  }
};

function switchMode(table, allInputs, allTextArea, h1, switchBtn) {
    if(table.classList.contains('show')){
        allInputs.forEach(element => {
            element.setAttribute('readonly', '')
        });
    
        allTextArea.forEach(element => {
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
    
            allTextArea.forEach(element => {
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
        
            allTextArea.forEach(element => {
                element.setAttribute('readonly', '')
            });
    
            // Réactiver les boutons de séléction des trimestres
            trimestreBtn.forEach(element => {
                element.removeAttribute('disabled')
            });    

            fillReport(id)
        }
    }
 }



 // Déconnexion
 document.querySelector('a#logout').onclick = () => {
    sessionStorage.removeItem('session')
  }





  function fillReport(id) {
    console.log(id)

    for(let i = 0; i < studentArray.length; i++){
        if(studentArray[i].pseudo == paramsId){
            document.querySelector('.nom-eleve').innerHTML = studentArray[i].nomPrenom
            

            const tableContainer = document.querySelector('main .table-container')

            tableContainer.innerHTML = `<table class="show" >
           <form><thead><td class="matieres">Matières</td><td class="moyennes">Moy.</td><td class="notes">Notes</td><td class="appreciation">Appréciations</td></thead>
           <tbody>
           <tr id="francais">
                 <td>
                     <span class="bold">Français</span><br>
                     <span class="little">Mme&nbsp;Perrin</span>
                 </td>
                 <td class="moy bold">11.2</td>
                 <td class="notation flex-center"></td>             
                 <td class="appreciation"><textarea oninput="updateTextareaHeight(this)">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, recusandae.</textarea></td>
             </tr>
             <tr id="math">
             <td>
                 <span class="bold">Math</span><br>
                 <span class="little">M.&nbsp;Darmanyan</span>
             </td>
             <td class="moy bold">11.2</td>
             <td class="notation flex-center"></td>             
             <td class="appreciation"><textarea oninput="updateTextareaHeight(this)">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, recusandae.</textarea></td>
         </tr>
         <tr id="histGeo">
             <td>
                 <span class="bold">Hist-geo</span><br>
                 <span class="little">Mme&nbsp;Carl</span>
             </td>
             <td class="moy bold">11.2</td>
             <td class="notation flex-center"></td>             
             <td class="appreciation"><textarea oninput="updateTextareaHeight(this)">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, recusandae.</textarea></td>
         </tr>
         <tr id="anglais">
             <td>
                 <span class="bold">Anglais</span><br>
                 <span class="little">Mme&nbsp;Houadeg</span>
             </td>
             <td class="moy bold">11.2</td>
             <td class="notation flex-center"></td>             
             <td class="appreciation"><textarea oninput="updateTextareaHeight(this)">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, recusandae.</textarea></td>
         </tr>
         <tr id="eps">
             <td>
                 <span class="bold">EPS</span><br>
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
         
           for(let j = 0; j<trTab.length; j++){
              //appreciation   
                document.querySelector(`#${trTab[j].id} .appreciation textarea`).innerHTML = studentArray[i][id].notation[trTab[j].id].appreciation
                const notesTab = studentArray[i][id].notation[trTab[j].id].notes
                for(let x = 0; x<notesTab.length; x++){
                    document.querySelector(`#${trTab[j].id} .notation`).innerHTML += `<div class="note-coef"><input class="note" type="text" value="${notesTab[x][0]}"> <input class="coef" type="text" value="${notesTab[x][1]}"></div>`

                }
                console.log(studentArray[i][id].notation);

           }
        //    document.querySelector('.anglais .appreciation textarea').innerHTML = ""
        
        }
    }

   


}

   
  
  }
}

 