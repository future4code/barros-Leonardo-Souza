
// EXERCICIO 2
type user = {
    id: number,
    name:string,
    phone:number,
    email:string,
    website:string
}

// EXERCICIO 5
type postData = {
    id: number,
    title:string,
    body:string,
    userId:number
}

// EXERCICIO 3
export const users: user[] = [
  {
    id: 1,
    name: "Leona",
    phone: 1685649756,
    email: "leona@gmail.com",
    website: "www.gmail.com",
  },
  {
    id:2,
    name:"Leticia",
    phone: 1185644866,
    email: "leticia@gmail.com",
    website:"www.semideia.com"
  },
  {
    id:3,
    name:"Ayo",
    phone:1396847925,
    email:"ayo@gmail.com",
    website:"www.noidea.com"
  }
];

// EXERCICIO 6
export const posts: postData[] = [
  {
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "sunt aut facere repellat provident occaec",
    userId:1
  },
  {
    id:2,
    title:"lorem impsum dolor sit amet et dolore mag et",
    body:"lorem impsum dolor sit amet et dolore mag et dolore mag et dolore mag et dolore mag et dolore mag et d",
    userId:1
  }
];

