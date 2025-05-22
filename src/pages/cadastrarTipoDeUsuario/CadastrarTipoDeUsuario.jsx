import Cadastro from "../../components/cadastro/Cadastro"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import Lista from "../../components/lista/Lista"
import Banner from "../../assets/img/imagem3.png"

const CadastrarTipoDeUsuario = () => {
    const [tipoUsuario, setTipoUsuario] = useState([])
    async function cadastrarTipoUsuario(e) {
        e.preventDefault();
        if (tituloTipoUsuario.trim() != "") {
            try {
                await api.post("tipousuario", { tituloTipoUsuario: tipoUsuario });
                alertar("success", "Cadastro realizado com sucesso!")
                settipoEvento("")
                listartipoEvento(); // Atualiza lista após cadastro
            } catch (error) {
                alertar("error", "Erro! entre em contato com o suporte")
            }
        } else {
            alertar("error", "Preencha o campo vazio")
        }
    }

    return (
        <>
            <Header nomeUsu="Administrador"/>
            <Cadastro
                titulo="Cadastrar Tipo de Usuario"
                visibilidade="none"
                imagem={Banner}
                place="Titulo"
            />
            <Lista 
            titulo="Lista Tipo de Usuario"
            tdnome="Tipo de Usuario"
            tituloEvento="Titulo"
            visible="none"
            />
            <Footer />
        </>
    )
}

export default CadastrarTipoDeUsuario;