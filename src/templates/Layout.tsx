import React from "react";
import  Footer  from "../components/Footer/Footer";
import  Navigation  from "../components/Navigation/Navigation";



export const Layout = ({children}:React.PropsWithChildren)=>{

    return (
        <>
        <Navigation />
        {children}
        <Footer />
        </>

    )



}