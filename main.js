// declarons nos donnees pour les tables
let depense = [
  { titre: "electricte", montant: "40.000" },
  { titre: "loyer", montant: "30.000" },
  { titre: "transport", montant: "10.000" },
];
let revenu = [
  { titre: "Salaire", montant: "300.000" },
  { titre: "Busseness", montant: "100.000" },
  { titre: "Bonus", montant: "30.000" },
];
// remplir notre table
function createTableDepense() {
  const div = document.createElement("div");
  const p = document.createElement("p");
  p.textContent = "liste des depenses";
  const table = document.createElement("table");
  table.className = "my-table";
  const thead = document.createElement("thead");
  const trHead = document.createElement("tr");
  const th1 = document.createElement("th");
  th1.textContent = "Titre";
  const th2 = document.createElement("th");
  th2.textContent = "Montant";
  const th3 = document.createElement("th");
  th3.textContent = "Action";

  trHead.appendChild(th1);
  trHead.appendChild(th2);
  trHead.appendChild(th3);
  thead.appendChild(trHead);

  const tbody = document.createElement("tbody");
  for (let i = 0; i < 3; i++) {
    const tr = document.createElement("tr");
    //creer bouton suppresion //
    const supBtn = document.createElement("td");
    const supresion = document.createElement("button");
    const textSup = document.createTextNode("Suprimer");
    supresion.className = "button";
    supresion.appendChild(textSup);
    for (let index = 0; index < depense.length - 1; index++) {
      const td1 = document.createElement("td");
      const text = document.createTextNode(Object.values(depense[i])[index]);
      supresion.setAttribute("titre", depense[i].titre);
      td1.appendChild(text);
      tr.appendChild(td1);
      supBtn.appendChild(supresion);
      tr.appendChild(supBtn);
      tr.setAttribute("id", depense[i].titre);
    }

    tbody.appendChild(tr);
  }

  table.appendChild(thead);
  table.appendChild(tbody);
  div.appendChild(p);
  div.appendChild(table);

  document.body.appendChild(div);
}

//preparons notre table revenu

function createTableRevenu() {
  const div = document.createElement("div");
  const p = document.createElement("p");
  p.textContent = "liste des revenus";
  const table = document.createElement("table");
  table.className = "my-table";
  const thead = document.createElement("thead");
  const phrase = document.createElement("p");
  phrase.textContent = "liste des depenses";
  const trHead = document.createElement("tr");
  const th1 = document.createElement("th");
  th1.textContent = "Titre";
  const th2 = document.createElement("th");
  th2.textContent = "Montant";
  const th3 = document.createElement("th");
  th3.textContent = "Action";
  const trh = document.createElement("tr");
  const tdh = document.createElement("td");

  trHead.appendChild(th1);
  trHead.appendChild(th2);
  trHead.appendChild(th3);
  thead.appendChild(trHead);

  const tbody = document.createElement("tbody");

  for (let i = 0; i < 3; i++) {
    const tr = document.createElement("tr");
    //ajouter des bouttons de sup pour chaque ROW//
    const supBtn = document.createElement("td");
    const supresion = document.createElement("button");
    const textSup = document.createTextNode("Suprimer");
    supresion.className = "button";
    supresion.appendChild(textSup);

    for (let index = 0; index < revenu.length - 1; index++) {
      const td1 = document.createElement("td");
      const text = document.createTextNode(Object.values(revenu[i])[index]);
      supresion.setAttribute("titre", revenu[i].titre);
      td1.appendChild(text);
      tr.appendChild(td1);
      supBtn.appendChild(supresion);
      tr.appendChild(supBtn);
      tr.setAttribute("id", revenu[i].titre);
    }

    tbody.appendChild(tr);
  }

  table.appendChild(thead);
  table.appendChild(tbody);
  table.appendChild(tbody);
  div.appendChild(p);
  div.appendChild(table);

  document.body.appendChild(div);
}
// remove
createTableDepense();
createTableRevenu();
let sup = document.querySelectorAll(".button");
sup.forEach(function (button) {
  button.addEventListener("click", function () {
    const titre = this.getAttribute("titre");
    const tr = document.getElementById(titre);
    tr.parentNode.removeChild(tr);
  });
});

let supR = document.querySelectorAll(".button");
supR.forEach(function (button) {
  button.addEventListener("click", function () {
    const titre = this.getAttribute("titre");
    const tr = document.getElementById(titre);
    tr.parentNode.removeChild(tr);
  });
});
