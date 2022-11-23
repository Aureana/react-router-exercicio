import React from "react"; 
import { useParams } from "react-router-dom";
import Header from "../components/Header";


const ProdutoId = () =>{
    const {id}= useParams()
    return(
        <div>
        <Header />
         <h1>Pagina de produto com {id}</h1>
        </div>
    )
}
export default ProdutoId