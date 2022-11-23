import { useNavigate } from 'react-router-dom';
import {goToHomePage, goToProfilePage, goToProdutoID} from '../Router/coordinator'

function Header() {
  const navigate = useNavigate()

  return (
    <header>
      <button onClick={() => goToHomePage(navigate)}>
        Ir para página inicial
      </button>
      <button onClick={()=> goToProfilePage(navigate, 'Aureana')}>
        Ir para página de perfil
      </button> 
      <button onClick={() => goToProdutoID(navigate, 'id')}> 
        Pesquisar produto por Id 
      </button>   
    </header>
  );
}

export default Header;
