import "./Header.css";
import Logo from "../../assets/img/logo.svg"
import { Link } from "react-router-dom";
const Header = () => {
    return(
        <header>
            <div className="layout_grid cabecalho">
                 {/*Ao clicar na imagem, me redireciona a pagina login */}
                <Link to="/">
                    <img src={Logo} alt="logo da filmoteca" />
                </Link>
               
            <nav className="nav_header">
                <Link className="link_header" to="/Filme">Filme</Link>
                <Link className="link_header" to="/Genero">Gênero</Link>
            </nav> 
            
            </div>
            {/* mo rolê pra esse negocio vei, seloko*/}
        </header>
    )
}
export default Header;