import Cabecera from "components/Cabecera/Cabecera";
import Container from "components/Container";
import Footer from "components/Footer/Footer";
import FavoritoProvider from "context/Favoritos";
// Genera una ruta padre la cual se va a encargar de manejar las demas rutas 
import { Outlet } from "react-router-dom";

function PaginaBase() {
    return(
        <main>
            <Cabecera />
            <FavoritoProvider>
                <Container>
                   <Outlet/> 
                </Container>
            </FavoritoProvider>
            <Footer/> 
        </main>
    )
}

export default PaginaBase;