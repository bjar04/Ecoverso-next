import Image from "next/image";
import facebook from "../img/facebook.png"
import instagram from "../img/instagram.png"
import github from "../img/github.png"


function Banner(){
    return(
        <>
        <div class="container-fluid">
        <div class="title">
            <h2 class="text-light" style={{textAlign: "center"}}>Bienvenido a Ecoverso</h2>
        </div>
        <div class="contenido">
            <div class="main">
                <h2 class="card-text" style={{textAlign: "center"}}>Ecoverso</h2>
                <p class="card-text text-dark" style={{fontSize: "20px"}}>
                    Tenemos la visión de que Colombia tiene un sin fin de diversidad ecológica, un universo que es necesario reconocer y explorar.
                    ¡Hola explorador, te damos la bienvenida a Ecoverso! Podrás navegar a través de Antioquía, una galaxia donde encontrarás planetas y estrellas los cuales te proporcionarán diversas aventuras y nuevos conocimientos, adéntrate en un viaje por los parques y áreas protegidas de la región Antioquia, Colombia.
                </p>
            </div>
        </div>
        <footer class="bg-dark">
        <div class="credenciales">
            <p class="text-light">
                <span>© 2022 Ecoverso</span>
                
                <span>Todos los derechos reservados</span>
            </p>
            <div class="names d-flex">
                <a id="nombres">Harold Castaño</a>
                <a id="nombres">• Mariana Jaramillo</a>
                <a id="nombres">• Henrry Sepulveda</a>
                <a id="nombres">• Jhojan Espinosa</a>
                <a id="nombres">• Estefania Muñoz</a>
            </div>
            <div class="icons d-flex">
                <Image src={facebook} width={30} height={30}/>
                <Image src={instagram} width={30} height={30}/>
                <Image src={github} width={30} height={30}/>
            </div>
        </div>
    </footer>
    </div>
    
    </>

    )

}

export default Banner;