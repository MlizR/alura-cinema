import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();

FavoritosContext.displayName = "Favoritos"

export default function FavoritoProvider({ children })
{
    const [favorito, setFavorito] = useState([]);

    return <FavoritosContext.Provider value={{ favorito, setFavorito }}>
    {children}
    </FavoritosContext.Provider>
};

export function useFavoritosContext(){
    const {favorito, setFavorito} = useContext(FavoritosContext);

    function agregarFavorito(nuevoFavorito){
        // El método some devuelve un true o false
        const favoritoRepetido = favorito.some(
            (item) => item.id === nuevoFavorito.id
        );

        // Copia de la lista favorito
        let nuevaLista = [...favorito];
        // Si no hay un favoritoRepetido
        if(!favoritoRepetido){
            //Se le agrega el nuevoFavorito y se retorna el estado
            nuevaLista.push(nuevoFavorito);
            return setFavorito(nuevaLista);
        }

        // Si hay algun favorito repetido se elimina 
        nuevaLista = favorito.filter((item) => item.id !== nuevoFavorito.id)
        return setFavorito(nuevaLista);
    }
    return { favorito, agregarFavorito };
}