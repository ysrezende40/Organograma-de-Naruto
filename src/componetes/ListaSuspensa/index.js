import './ListaSuspensa.css'

const ListaSuspensa = (props) =>{
    return(
        <div className='Lista-Suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.Aoalterado(evento.target.value)} value={props.valor}>
               {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa