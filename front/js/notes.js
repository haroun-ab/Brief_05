// ------Séléction des trimestres------//
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
          <td class="note"><div class="flex-center"><input type="text" value="8"> <input type="text" value="9"> <input type="text" value="12"> <input type="text" value="15.5"> <input type="text" value="7"> <input type="text" value="13.5"></div></td>
          <td class="appreciation"><textarea oninput="updateTextareaHeight(this)">ipsum dolor sit amet consectetur adipisicing elit. Saepe, recusandae.</textarea></td>
      </tr>
      <tr>
          <td>
              <span class="bold">Français</span><br>
              <span class="little">Mme Perrin</span>
          </td>
          <td class="moy bold">11.2</td>
          <td class="note"><div class="flex-center"><input type="text" value="8"> <input type="text" value="9"> <input type="text" value="12"> <input type="text" value="15.5"> <input type="text" value="7"> <input type="text" value="13.5"></div></td>
          <td class="appreciation"><textarea oninput="updateTextareaHeight(this)">ipsum dolor sit amet consectetur adipisicing elit. Saepe, recusandae.</textarea></td>
      </tr>
      
    </tbody>
  <tfoot>
      <tr><td>Générale</td><td class="moygen">11.2</td><td colspan="2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptatibus molestias impedit exercitationem aliquam eum reiciendis nesciunt molestiae ipsam repellendus?</td></tr>
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
            <td class="note"><div class="flex-center"><input type="text" value="8"> <input type="text" value="9"> <input type="text" value="12"> <input type="text" value="15.5"> <input type="text" value="7"> <input type="text" value="13.5"></div></td>
            <td class="appeciation">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, recusandae.</td>
        </tr>
        <tr>
            <td>
                <span class="bold">Français</span><br>
                <span class="little">Mme Perrin</span>
            </td>
            <td class="moy bold">11.2</td>
            <td class="note"><div class="flex-center"><input type="text" value="8"> <input type="text" value="9"> <input type="text" value="12"> <input type="text" value="15.5"> <input type="text" value="7"> <input type="text" value="13.5"></div></td>
            <td class="appeciation">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, recusandae.</td>
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