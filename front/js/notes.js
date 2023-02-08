if(!sessionStorage.getItem('session')){
    location.pathname = '/front/html/login.html'
}
  
if (sessionStorage.getItem('session') && sessionStorage.getItem('session')== 'eleves'){
    document.querySelector('a#home').remove()

    document.querySelector('.edit-btn').style.cssText = "display: none"

}

const trimestreBtn = document.querySelectorAll(".btn-group nav button")
const tableContainer = document.querySelector('main .table-container')

window.onload = () => {
  trimestreBtn[0].style.cssText = "color: var(--primary); font-weight: 600";
  tableContainer.innerHTML = `<table class="t1 show">
  <form><thead><td class="matieres">Matières</td><td class="moyennes">Moy.</td><td class="notes">Notes</td><td class="appreciation">Appréciations</td></thead>
  <tbody>
  <tr>
          <td>
              <span class="bold">Français</span><br>
              <span class="little">Mme Perrin</span>
          </td>
          <td class="moy bold">11.2</td>
          <td class="notation"><div class="flex-center"><div class="note-coef"><input class="note" type="text" value="8"> <input class="coef" type="text" value="9"></div><div class="note-coef"><input class="note" type="text" value="8"> <input class="coef" type="text" value="9"></div><div class="note-coef"><input class="note" type="text" value="8"> <input class="coef" type="text" value="9"></div><div class="note-coef"><input class="note" type="text" value="8"> <input class="coef" type="text" value="9"></div><div class="note-coef"><input class="note" type="text" value="8"> <input class="coef" type="text" value="9"></div><div class="note-coef"><input class="note" type="text" value="8"> <input class="coef" type="text" value="9"></div></div></td>
          <td class="appreciation"><textarea oninput="updateTextareaHeight(this)">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, recusandae.</textarea></td>
      </tr>
      <tr>
      <td>
          <span class="bold">Français</span><br>
          <span class="little">Mme Perrin</span>
      </td>
      <td class="moy bold">11.2</td>
      <td class="notation"><div class="flex-center"><div class="note-coef"><input class="note" type="text" value="8"> <input class="coef" type="text" value="9"></div><div class="note-coef"><input class="note" type="text" value="8"> <input class="coef" type="text" value="9"></div><div class="note-coef"><input class="note" type="text" value="8"> <input class="coef" type="text" value="9"></div><div class="note-coef"><input class="note" type="text" value="8"> <input class="coef" type="text" value="9"></div><div class="note-coef"><input class="note" type="text" value="8"> <input class="coef" type="text" value="9"></div><div class="note-coef"><input class="note" type="text" value="8"> <input class="coef" type="text" value="9"></div></div></td>
      <td class="appreciation"><textarea oninput="updateTextareaHeight(this)">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, recusandae.</textarea></td>
  </tr>
    </tbody>
  <tfoot>
      <tr><td>Générale</td><td class="moygen">11.2</td><td colspan="2"><textarea>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptatibus molestias impedit exercitationem aliquam eum reiciendis nesciunt molestiae ipsam repellendus?</textarea></td></tr>
  </tfoot>
  </form>
  </table>`

  //----Entrer et sortir du mode modification-----//
const table = document.querySelector('table');
const allInputs = document.querySelectorAll('input')
const allTextArea = document.querySelectorAll('textarea')
const h1 = document.querySelector('h1')
const switchBtn = document.querySelector('.btn-group > button')

switchMode(table, allInputs, allTextArea, h1, switchBtn)
};


// ------Séléction des trimestres (2)------//
for (let i = 0; i<trimestreBtn.length; i++){
  trimestreBtn[i].onclick = () => {
    trimestreBtn.forEach(btn => {
      btn.style.cssText = "color: black; font-weight: 400";
    });

    trimestreBtn[i].style.cssText = "color: var(--primary); font-weight: 600";
    tableContainer.innerHTML = `<table class="t${i+1} show">
    <form><thead><td class="matieres">Matières</td><td class="moyennes">Moy.</td><td class="notes">Notes</td><td class="appreciation">Appréciations</td></thead>
    <tbody>
    <tr>
          <td>
              <span class="bold">Français</span><br>
              <span class="little">Mme Perrin</span>
          </td>
          <td class="moy bold">11.2</td>
          <td class="notation"><div class="flex-center"><div class="note-coef"><input class="note" type="text" value="8"> <input class="coef" type="text" value="9"></div><div class="note-coef"><input class="note" type="text" value="8"> <input class="coef" type="text" value="9"></div><div class="note-coef"><input class="note" type="text" value="8"> <input class="coef" type="text" value="9"></div><div class="note-coef"><input class="note" type="text" value="8"> <input class="coef" type="text" value="9"></div><div class="note-coef"><input class="note" type="text" value="8"> <input class="coef" type="text" value="9"></div><div class="note-coef"><input class="note" type="text" value="8"> <input class="coef" type="text" value="9"></div></div></td>
          <td class="appreciation"><textarea oninput="updateTextareaHeight(this)">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, recusandae.</textarea></td>
      </tr>
      <tr>
      <td>
          <span class="bold">Français</span><br>
          <span class="little">Mme Perrin</span>
      </td>
      <td class="moy bold">11.2</td>
      <td class="notation"><div class="flex-center"><div class="note-coef"><input class="note" type="text" value="8"> <input class="coef" type="text" value="9"></div><div class="note-coef"><input class="note" type="text" value="8"> <input class="coef" type="text" value="9"></div><div class="note-coef"><input class="note" type="text" value="8"> <input class="coef" type="text" value="9"></div><div class="note-coef"><input class="note" type="text" value="8"> <input class="coef" type="text" value="9"></div><div class="note-coef"><input class="note" type="text" value="8"> <input class="coef" type="text" value="9"></div><div class="note-coef"><input class="note" type="text" value="8"> <input class="coef" type="text" value="9"></div></div></td>
      <td class="appreciation"><textarea oninput="updateTextareaHeight(this)">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, recusandae.</textarea></td>
  </tr>
    </tbody>
    <tfoot>
        <tr><td>Générale</td><td class="moygen">11.2</td><td colspan="2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptatibus molestias impedit exercitationem aliquam eum reiciendis nesciunt molestiae ipsam repellendus?</td></tr>
    </tfoot>
    </form>
    </table>`;

     //----Entrer et sortir du mode modification-----//

          

const table = document.querySelector('table');
const allInputs = document.querySelectorAll('input')
const allTextArea = document.querySelectorAll('textarea')
const h1 = document.querySelector('h1')
const switchBtn = document.querySelector('.btn-group > button')

switchMode(table, allInputs, allTextArea, h1, switchBtn)
  }
};


 //----Entrer et sortir du mode modification-----//

    
 

 

 function switchMode(table, allInputs, allTextArea, h1, switchBtn) {
    if(table.classList.contains('show')){
        allInputs.forEach(element => {
            console.log(element)
            element.setAttribute('readonly', '')
        });
    
        allTextArea.forEach(element => {
            console.log(element)
            element.setAttribute('readonly', '')
        });
    };
              
    
    switchBtn.onclick = () => {
        if (switchBtn.classList.contains('edit-btn')){
            // Changer de bouton
            switchBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i><span class="text-btn">Valider</span>`
            switchBtn.classList.replace('edit-btn', 'save-btn')
            
            // Changer le titre de la page
            h1.innerText = "Notes de DUPONT Jean (Mode modification)"
        
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
            h1.innerText = "Notes de DUPONT Jean"
            
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
                element.style.ho = ""
            });    
        }
    }
 }

 // Déconnexion
document.querySelector('a#logout').onclick = () => {
    sessionStorage.removeItem('session')
  }
  