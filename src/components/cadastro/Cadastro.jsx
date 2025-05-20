import "./Cadastro.css"
import Botao from "../botao/Botao"
const Cadastro = (props) => {
    return (
        <>
            <section className="section_cadastro">

                <form onSubmit={props.funcCadastro} className="layout_grid form_cadastro">

                    <h1>{props.tituloCadastro}</h1>

                    <hr />

                    <div className="campos_cadastros">

                        <div className="campo-cad_nome">
                            <label htmlFor="nome">Nome</label>
                            <input placeholder={`Digite o nome do ${props.placeholder}`}
                             style={{ color: "red" }} 
                             type="text" 
                             name="nome" 
                             value={props.valorInput} 
                             //Ao mudar o input, algo acontece
                             //Atualizar o estado do pai ao digitar
                             //target está indo buscar o valor do "e"
                             onChange={(e)=>props.setValorInput(e.target.value)}/>
                        </div>

                        <div className="campo-cad_genero" style={{ display: props.visibilidade }}>
                            <label htmlFor="genero">Genero</label>
                            <select style={{ color: "red" }} name="genero" id="">
                                <option value="" disabled selected>Selecione</option>
                                <option value="">op 1</option>
                                <option value="">op 2</option>
                                <option value="">op 3</option>
                            </select>
                        </div>

                        <Botao nomeDoBotao="Cadastrar" />

                    </div>

                </form>



            </section>

        </>
    )
}
export default Cadastro;