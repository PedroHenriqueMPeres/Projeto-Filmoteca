import { useEffect, useState } from "react";

const ListaPaginada = ({ dados }) => {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 5;

  const totalPaginas = Math.ceil(dados.length / itensPorPagina);

  const itensPaginaAtual = dados.slice(
    (paginaAtual - 1) * itensPorPagina,
    paginaAtual * itensPorPagina
  );

  const mudarPagina = (numeroPagina) => {
    setPaginaAtual(numeroPagina);
  };

  return (
    <div>
      <ul>
        {itensPaginaAtual.map((item, index) => (
          <li key={index}>{item.nome}</li>
        ))}
      </ul>

      <div style={{ marginTop: "1rem" }}>
        {Array.from({ length: totalPaginas }, (_, i) => (
          <button
            key={i}
            onClick={() => mudarPagina(i + 1)}
            disabled={paginaAtual === i + 1}
            style={{
              margin: "0 5px",
              fontWeight: paginaAtual === i + 1 ? "bold" : "normal"
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ListaPaginada;
