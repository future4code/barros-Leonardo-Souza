const primeiraLista = [
  {
    nome: "Banana",
  },
  {
    nome: "Laranja",
  },
  {
    nome: "Cebola"
  }
];

const segundaLista = [
  {
    nome: "Laranja",
  },
  {
    nome:'Maçã'
  },
  {
    nome: "Cebola",
  },
];

function returnSingleList(list1=[], list2=[]) {
    const merging = [...list1, ...list2]

    for (let index = 0; index < merging.length; index++) {
        let testElement = merging[index].nome
        let currIndex = index

        for (let index = 0; index < merging.length; index++) {
           let currElement = merging[index].nome
           if (testElement === currElement && index !== currIndex) {
            merging.splice(index, 1)
           }
            
        }
    }
    return merging
}

console.log(returnSingleList(primeiraLista, segundaLista));