import { useState } from 'react';
import Banner from './componetes/Banner/banner'; //aqui importamos o componente 
import Formulario from './componetes/Formulario';
import Time from './componetes/Times';
import Rodape from './componetes/Rodape';



function App() {
  const times = [
    {
      nome: '',
      corPrimaria: '',
      corSecundaria: '',
    },
    {
      nome: 'Time Asuma',
      corPrimaria: '#57C278',
      corSecundaria: '#A6FF96',


    },
    {
      nome: 'Time Kurenai',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
  },
  {
      nome: 'Time Kakashi',
      corPrimaria: '#1640D6',
      corSecundaria: '#39A7FF',
  },
  {
      nome: 'Time Gai',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
  },
  {
      nome: 'Time Yondaime',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
  },
  {
      nome: 'Irmãos da Areia',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
  },
  {
      nome: 'Time Sarutobi',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
  }  
  ]



  const [colaboradores, setColaboradores] = useState([])
  
  const aoNovoColaboradorAdicionado= (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);//os 3 pontinhos serve para manter os dados antigos e adicionar um novo
  }
  
  

  return (
    <div className="App">
      {/* colocamos o componete no codigo */}
      <Banner></Banner>
      <Formulario aoNovoColaboradorAdicionado={aoNovoColaboradorAdicionado} NomeDostimes={times.map(time=>time.nome)}/>
      {times.map(time=>
      <Time
        key={time.nome} 
        NomeTime={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}//filtra conforme o time
        >
        </Time> 

        )}
      <Rodape></Rodape>

      
      
      
      

      
    </div>
  );
}

export default App;





// 1. No componente `Formulario`, você coleta informações sobre um novo colaborador.

// 2. Quando o usuário envia o formulário no `Formulario`, essas informações são enviadas para o componente `App`, onde são adicionadas a um array de colaboradores.

// 3. O componente `App` armazena o array de colaboradores em seu estado.

// 4. O estado do array de colaboradores é passado como uma propriedade para o componente `Time`, que é responsável por renderizar os cartões dos times.

// 5. Dentro do componente `Time`, você mapeia o array de colaboradores e renderiza um componente `Colaborador` para cada um deles, aplicando estilos específicos com base nas informações dos times.

// 6. Os cartões dos colaboradores renderizados no `Time`, junto com os estilos aplicados, são devolvidos e exibidos no `App`.

// Em resumo, você coleta informações em `Formulario`, envia essas informações para `App`, onde elas são armazenadas e, em seguida, `Time` renderiza os colaboradores com base nos dados e estilos especificados. O fluxo completo de informações passa por esses componentes, permitindo que você crie e exiba os cartões dos colaboradores de acordo com as informações fornecidas pelos usuários.