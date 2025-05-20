import "./Botao.css"
const Botao = (props) => {
    return(
        <button className="botao" type="submit">{props.nomeDoBotao}</button> //RockBotton
    )
}
export default Botao;