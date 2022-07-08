import React, { useState } from 'react';
import Post from './components/Post/Post';
import { MainContainer,MyForm } from "./style";


function App() {

  const [inputName, setInputName] = useState("")
  const [inputProfile, setInputProfile] = useState("")
  const [inputPub, setInputPub] = useState("")

  const handleInputName = (event) => {
    setInputName(event.target.value);
  }

  const handleInputProfile = (event) => {
    setInputProfile(event.target.value);
  }

  const handleInputPub = (event) => {
    setInputPub(event.target.value);
  }

  const [posts, setPosts]  = useState([{
    nome: 'Paulinha',
    fotoUsuario: 'https://picsum.photos/50/50',
    fotoPost: 'https://picsum.photos/200/150'
  }, {
    nome: 'Vi',
    fotoUsuario: 'https://conteudo.imguol.com.br/c/parceiros/f8/2021/11/18/arcane-o-que-se-sabe-sobre-relacao-de-vi-e-caitlyn-1637278422670_v2_450x337.jpg',
    fotoPost: 'https://techdoxx.com/wp-content/uploads/2022/01/7ec83f50-7b9c-11ec-bf5e-fcdcb4b003da.jpeg'
  }, {
    nome: 'Astra',
    fotoUsuario:'https://i.pinimg.com/474x/93/34/dc/9334dce66dec7dbd806ac62b932be035.jpg' ,
    fotoPost: 'https://s2.glbimg.com/M5ywpKAaJmxNbeY2FFpM6z8iMWI=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/s/A/VsxciQRwaTbAZIcAvBTw/astra-wallpaper-08.png'
  }])

  function retornarArrayConsole(element) {
    return element
  }

  let arrayElementosPostConsole = posts.map(retornarArrayConsole)

  console.log(arrayElementosPostConsole);

  function retornarExercicio(element) {
    return( <Post 
      nomeUsuario={element.nome} 
      fotoUsuario={element.fotoUsuario} 
      fotoPost={element.fotoPost}
      />)
  }

  const arrayElementos = posts.map(retornarExercicio)

  const addPost = (e) => {
    e.preventDefault()
    const refreshPosts = [...posts,{nome:inputName, fotoUsuario:inputProfile, fotoPost:inputPub}]
    setPosts(refreshPosts)
    setInputName("")
    setInputProfile("")
    setInputPub("")
  }

return(
  <MainContainer>
    <MyForm>
      <input type="text" placeholder="Nome" value={inputName} onChange={handleInputName}></input>
      <input type="text" placeholder="Link foto de perfil" value={inputProfile} onChange={handleInputProfile}></input>
      <input type="text" placeholder="Link da publicação" value={inputPub} onChange={handleInputPub}></input>
      <button onClick={addPost}>Adicionar Publicação</button>
    </MyForm>

    {arrayElementos}

  </MainContainer>
)

}


export default App;
