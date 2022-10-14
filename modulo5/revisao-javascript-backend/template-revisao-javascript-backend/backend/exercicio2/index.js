const template = [
  { id: 1, nome: "Fulano" },
  { id: 2, nome: "Ciclano" },
  { id: 3, nome: "Beltrano" },
  { id: 4, nome: "Fulana" },
];

function registerClients(id, name) {
  const checkId = template.map((item) => {
    return item.id;
  });
  if (checkId.includes(id)) {
    return console.log(`Erro. Parametro invalido. id já existe`);
  } else {
    template.push({ id: id, name: name });
  }
  console.log(template);
}

registerClients(6, "Batatinha");


function table(number=0) {
    if (number > 0 && number <= 10) {
      for (let index = 0; index <= 10; index++) {
        console.log(`${number} x ${index} = ${number * index}`);
      }
    } else {
        console.log(
          "Erro. Parâmetro inválido (’número precisa valer entre 1 e 10’)."
        );
    }
}

table()