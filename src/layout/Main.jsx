import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Foorter/Footer';
import Header from '../shared/Header/Header';

const Main = () => {
    return (
        <div>
           <Header/>
           <Outlet/>
           <Footer/>
        </div>
    );
};

export default Main;