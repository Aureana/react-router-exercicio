import React from "react";
import{BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from "../pages/ErrorPage"
import HomePage from "../pages/HomePage";
import ProfilePage from '../pages/ProfilePage'
import ProdutoId from "../pages/ProdutoID";


const Router = () =>{
    return(
        <BrowserRouter>
        <Routes>
        <Route index element={<HomePage/>}/>
        <Route path='/profile/:nome' element={<ProfilePage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        <Route path='/product/:id' element={<ProdutoId/>}/>

        </Routes>
        </BrowserRouter>
    );
};
export default Router;