import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';
import FileImg from '../FileImg';

const Formulario =(props) => {
  
  const [Nome,SetNome] = useState('') // Esta função cria uma variável de estado 'valor' e uma função 'setValor' para atualizá-la.
  const [Cargo,SetCargo] = useState('')
  const [Imagem,SetImagem] = useState('')
  const [Time,SetTimes] = useState('')


  const Aosalvar = (evento) =>{
    evento.preventDefault()
    const novoColaborador = {
      nome: Nome,
      cargo: Cargo,
      imagem: Imagem,
      time: Time,
    };

    // Atualize o estado colaboradores adicionando o novo colaborador
    props.aoNovoColaboradorAdicionado(novoColaborador);

    // Limpe os campos do formulário
    SetNome('');
    SetCargo('');
    SetImagem('');
    SetTimes('');
  }
  
  return(
    <section className="formulario-container">
        <h2>Preencha as informações para criar o perfil do personagem e montar a equipe</h2>
        <form onSubmit={Aosalvar} className="formulario form" encType="multipart/form-data">
          <CampoTexto valor={Nome} Aoalterado={valor=> SetNome(valor)} obrigatorio={true} label="Nome" placeholder="digite seu nome"></CampoTexto>
          <CampoTexto valor={Cargo} Aoalterado={valor=> SetCargo(valor)} obrigatorio={true}  label="Classe" placeholder="digite sua classe"></CampoTexto>
          <FileImg EnviodaImagem={valor=> SetImagem(valor)} obrigatorio={true} label="Imagem" ></FileImg>
          <ListaSuspensa valor={Time} Aoalterado={valor=> SetTimes(valor)} label="Times" items={props.NomeDostimes}></ListaSuspensa>
          <Botao texto="Criar Card"></Botao>
        </form>
     </section>
  )
     
}

export default Formulario;