const clients = [
  {
    name: "Henrique",
    email: "henrique@test.com",
  },

  {
    name: "Thais",
    email: "thais@test.com",
  },
  {
    name: "Nivea",
    email: "nivea@test.com",
  },
  {
    name: "Matias",
    email: "matias@test.com",
  },
  {
    name: "Gustavo",
    email: "gustavo@test.com",
  },
];
const list = document.getElementById("clients");

const createParagraph = (textContent, parent) => {
  const paragraph = document.createElement("p");
  const text = document.createTextNode(textContent);
  paragraph.appendChild(text);

  parent.appendChild(paragraph);
};

clients.forEach((client) => {
  //li
  const listItem = document.createElement("li");

  createParagraph(client.name, listItem);

  createParagraph(client.email, listItem);

  list.appendChild(listItem);
});
