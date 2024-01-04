import Colaborador from '../Colaborador';
import './Times.css'


const Time = (props) =>{
    const css = {backgroundColor: props.corSecundaria}
    return (
        //se for true                       //ira renderizar o resto
       ( props.colaboradores.length>0) ? <section className='time' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.NomeTime}</h3>
            <div className='Colaboradores'>
              {props.colaboradores.map( colaborador => <Colaborador  CordDacard={(colaborador.cargo === 'jounin') ? 'red' : props.corPrimaria} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/> )}
            </div>
        </section>
        : ''// se não ficara vazio 
    )
}

export default Time;