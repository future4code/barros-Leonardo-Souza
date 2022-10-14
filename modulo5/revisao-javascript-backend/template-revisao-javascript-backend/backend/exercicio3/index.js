function login(email, password) {
    const contas = [
      {
        email: "astrodev@labenu.com",
        password: "abc123",
      },
      {
        email: "bananinha@gmail.com",
        password: "bananinha",
      },
    ];
    const validEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);

      const validPassword = /^.{6,20}$/.test(password);

      if (!validEmail) {
       return  console.log("Email inválido");
      }
      if (!validPassword) {
        return console.log("Senha deve conter no mínimo 6 caracteres");
      }

      for (let index = 0; index < contas.length; index++) {
          if (contas[index].email === email && contas[index].password === password) {
            return console.log("login bem Sucedido");  
        }
    }
        console.log("Login inválido");
}

login("bananinha@gmail.com", "bananinha");