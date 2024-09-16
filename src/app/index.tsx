import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import Personagem from "./Componentes/Pagina Inicial/PaginaInicial"
import AppRouter from "next/dist/client/components/app-router";

export default function index(){
    return(
        <>
        <Header />
        <Personagem />
        <Footer />
        </>
    )
}