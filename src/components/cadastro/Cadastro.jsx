import "./Cadastro.css"
import Botao from "../botao/Botao"
import Lista from "../lista/Lista"
import { useState, useEffect } from "react"
import api from "../../Services/services"
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
                            <select style={{ color: "red" }} name="genero" id=""
                            value={props.valorSelect}
                            onChange={(e) => props.setValorSelect(e.target.value)}
                            >
                                <option value="" disabled selected>Selecione</option>
                                {props.lista && props.lista.length > 0 && props.lista.map((itemGenero)=>
                                <option value= {itemGenero.idGenero}>
                                {itemGenero.nome}</option>)}
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