document.getElementById("form-cnx").addEventListener("submit", function (e) {
  e.preventDefault();
  let erreur;
  let pseudo = document.getElementById("id");
  let password = document.getElementById("pw");

  if (pseudo.value !== password.value) {
    erreur = "Le mot de passe est incorrect";
  }
  if (!password.value) {
    erreur = "Veuillez renseigner votre mot de passe";
  }
  if (!pseudo.value) {
    erreur = "Veuillez renseigner votre identifiant";
  }

  if (erreur) {
    e.preventDefault();
    document.getElementById("erreur").innerHTML = erreur;
    return false;
  }
});
