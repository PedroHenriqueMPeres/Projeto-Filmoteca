import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista"
import api from "../../Services/services"
import Swal from "sweetalert2";
import { useState } from "react"

const CadastroFilme = () => {

    const alertar = (icone, mensagem) => {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: icone,
            title: mensagem
        });
    };

    const [listaGenero, setListaGenero] = useState([])
    const [filme, setFilme] = useState([])
    const [genero, setGenero] = useState("")

    async function cadastrarFilme() {
        if (filme.trim() !== "") {
            await api.post("filme", {titulo: filme, idGenero: genero 
            }); 
            alertar("success","Sucesso! Cadastro realizado com sucesso!");
            setFilme("");
            setGenero("");
        }
        try {

        } catch (error) {
            console.log(error);
        }
    }

    async function listarGenero() {
        try {
            const resposta = await api.get("genero");
            setListaGenero(resposta.data);
        } catch (error) {
            alertar("success", "Sein man")
        }
    }
    useState(() => {
        listarGenero();
    }, [])
    return (
        <> {/*Fragment, o pai da estrutura e a forma melhor e mais segura pra não dar pau no seu codigo**/}
            <Header />
            <main>
                <Cadastro
                    tituloCadastro="Cadastro de Filme"
                    placeholder="filme"
                    lista={listaGenero}
                    ValorInput={filme}
                    setValorInput={setFilme}
                    funcCadastro={cadastrarFilme}
                    valorSelect={genero}
                    setValorSelect={setGenero}
                />
                <Lista
                    tituloDaLista="Lista de Filmes"
                />
            </main>
            <Footer />
        </>
    )
}

export default CadastroFilme;