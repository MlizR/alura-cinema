import Cabecera from "components/Cabecera/Cabecera";
import Container from "components/Container";
import Footer from "components/Footer/Footer";
import FavoritoProvider from "context/Favoritos";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import NotFound from "pages/NotFound";
import PaginaBase from "pages/PaginaBase";
import Player from "pages/Player";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
    return(
        // BrowserRouter: Avisa que se van a meanejar rutas desde la función "AppRoutes()"
        // Routes: Manejador de rutas >> Contiene todas las rutas en su interior
        // Route: Es la ruta especifica a la cual nos referimos     
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />}></Route>
                    <Route path="favoritos" element={<Favoritos />}></Route>
                    {/* Rutas dinámicas >>> Estructura: Parámetro de URL dinámico es dos puntos seguidos por el nombre del parámetro. */}
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;