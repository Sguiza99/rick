import React from "react";
import Hook from "../Hooks/useFetch";
import "./Home.css"
import { Navbar } from "../Navbar/Navbar";
import Greenportal from "../../Assets/Green portal.png"
import Button from "react-bootstrap/Button"


const Personajes = () => {
    const { datos, pagina, Paginasig } = Hook('https://rickandmortyapi.com/api/character/');

    return (
        <div className="principal">
            <Navbar/>
            <div className="Logo">
                <div className="text">
                    <h2>Bienvenido a la
                        API de Rick y Morty</h2>
                </div>
                <img className="greenportal" src={Greenportal}></img>
            </div>
            <div className="personajes">
                {datos.map(personaje => (
                    <div className="carta" key={personaje.id}>
                        <img classname ="imgp" src={personaje.image} alt=""></img>
                        <div className="Informacion">
                            <h2>{personaje.name}</h2>
                            <p>Estado : {personaje.status}</p>
                            <p>Especie : {personaje.species}</p>
                            <p>Genero : {personaje.gender}</p>
                        </div>
                    </div>

                ))}
            </div>
            <div className="paginacion">
                <Button variant="outline-success" onClick={() => Paginasig('atras')}><h4>Atras</h4></Button>{' '}
                <h5 className="nombrepagina">Pagina{pagina}</h5>
                <Button variant="outline-success" onClick={() => Paginasig('siguiente')}><h4>Siguiente</h4></Button>{' '}
            </div>
        </div>
    )
}


export default Personajes;