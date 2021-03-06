import React, {useState} from 'react'
import './style.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import { App } from "../../App";



function Post(props){
 
  const [numeroCurtidas, setnumeroCurtidas] = useState (0) // define o estado original para zero mas adicionando um alterador que é o set
  const [curtido, setCurtido] = useState(false)
  const [comentando, setComentando] = useState()
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [respostaUsuario, setRespostaUsuario] = useState("")
  const handleRespostaUsuario = (event) => {
    setRespostaUsuario(event.target.value)
    console.log(respostaUsuario);
    }

  const onClickCurtida = () => {
    setCurtido(!curtido)
    if (curtido === true) {
      setnumeroCurtidas(numeroCurtidas - 1)
    } else {
      setnumeroCurtidas( numeroCurtidas + 1) 
    }
    console.log('Curtiu!')
  }
  
  const onClickComentario = () => {
    setComentando(!comentando)
    if(comentando) {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario} resposta={respostaUsuario} onChangeComentario={handleRespostaUsuario} />
    }
    console.log(comentando)
  }
  
  const aoEnviarComentario = () => {
    setComentando()
    setNumeroComentarios(numeroComentarios + 1)
  }

  let iconeCurtida

    if(curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(comentando) {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario}/>
    }

  return(
    <div className = 'PostContainer'>
      <div className='HeaderContainer'>
      <div className = 'PostHeader'>
        <img className = 'UserPhoto' src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </div>
      <div>
        <button>X</button>
        </div>
        </div>

      <img className = 'PostPhoto'src={props.fotoPost} alt={'Imagem do post'}/>

      <div className = 'PostFooter'>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </div>
      {componenteComentario}
    </div>
  )
}


export default Post