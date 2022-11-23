import { useParams } from "react-router-dom";
import Header from "../components/Header";

function ProfilePage() {
 const {nome}= useParams()
  return (
    <main>
      <Header />
      <h1>Página de Perfil de {nome}</h1>
    </main>
  );
}

export default ProfilePage;
