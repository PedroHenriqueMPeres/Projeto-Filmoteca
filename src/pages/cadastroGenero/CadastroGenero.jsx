import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Lista from "../../components/lista/Lista";
import Cadastro from "../../components/cadastro/Cadastro";
import api from "../../Services/services";
import Swal from "sweetalert2";
import { useState, useCallback } from "react";

const CadastroGenero = () => {
    const [genero, setGenero] = useState("");
    const [listaGenero, setListaGenero] = useState([]);
    const [paginaAtual, setPaginaAtual] = useState(1);
    const itensPorPagina = 5; // ou qualquer valor desejado

        

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
    const alertarExcluir = (icone, mensagem) => {
        const Toast = Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    };

    const cadastrarGenero = async (evt) => {
        evt.preventDefault();
        if (genero.trim() !== "") {
            try {
                await api.post("genero", { nome: genero });
                alertar("success", "Cadastro realizado com sucesso");
                setGenero("");
                listarGenero(); // Atualiza a lista após o cadastro
            } catch (error) {
                alertar("error", "Erro! Entre em contato com o suporte (os guri)");
            }
        } else {
            alertar("error", "Preencha o campo antes de cadastrar");
        }
    };

    const listarGenero = useCallback(async () => {
        try {
            const resposta = await api.get("genero");
            setListaGenero(resposta.data);
        } catch (error) {
            console.log(error);
        }
    }, []);

    const excluirGenero = async (id) => {
        console.log(id);

        try {
            await api.delete(`genero/${id.idGenero}`);
            alertarExcluir("success", "Gênero excluído com sucesso");
            listarGenero(); // Atualiza a lista após exclusão
        } catch (error) {
            console.log(error);
            alertar("error", "Erro ao tentar excluir o gênero");
        }
    };

async function  editarGenero(id) {
    // console.log(id);
    
        const { value: novoGenero } = await Swal.fire({
            title: "Insira o Genero",
            input: "text",
            inputLabel: "Novo Genero",
            inputValue: id.nome,
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return "Você precisa de algo nesse espaço!";
                }
            }
        });
        if (novoGenero) {
            
            try {
                await api.put(`genero/${id.idGenero}`,{nome: novoGenero});
                Swal.fire(`O genero modificado ${novoGenero}`);
            } catch (error) {
                console.log(error);
            }

        }
    }
    listarGenero();

    const totalPaginas = Math.ceil(listaGenero.length / itensPorPagina);
    const inicio = (paginaAtual - 1) * itensPorPagina;
    const fim = inicio + itensPorPagina;
    const itensPaginados = listaGenero.slice(inicio, fim);


    return (
        <>
            <Header />
            <main>
                <Cadastro
                    funcCadastro={cadastrarGenero}
                    valorInput={genero}
                    setValorInput={setGenero}
                    tituloCadastro="Cadastro de Gênero"
                    visibilidade="none"
                    placeholder="gênero"
                />
                <Lista
                    tituloDaLista="Lista de Gêneros"
                    visivel="none"
                    lista={itensPaginados} // ou listaGenero, dependendo da sua paginação
                    funcExcluir={excluirGenero}
                    funcEditar={editarGenero}
                />

                <div style={{ textAlign: "center", margin: "20px 0" }}>
                    {Array.from({ length: totalPaginas }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => setPaginaAtual(i + 1)}
                            disabled={paginaAtual === i + 1}
                            style={{
                                margin: "0 5px",
                                padding: "5px 10px",
                                fontWeight: paginaAtual === i + 1 ? "bold" : "normal",
                                cursor: "pointer",
                                borderRadius: "5px",
                                color:"red",
                                backgroundColor:"#ffffff",
                                border:"1px solid #73061b"
                            }}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>

            </main>
            <Footer />
        </>
    );
};

export default CadastroGenero;
