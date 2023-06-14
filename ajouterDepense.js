let ajouterDepense = document.querySelector(".ajouterDepense");

ajouterDepense.onclick(".onclick", function (event) {
  event.preventDefault();
  const titre = document.getElementsByClassName("label");
  const montant = document.getElementsByClassName("lable1");
  if (!titre || !montant) alert(" merci de remplir le formulaire");
});
