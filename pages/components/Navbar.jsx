import Image from "next/image";
import logo from '../img/0001.png'

function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <Image src={logo} width={80} height={80} className="logo" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="nabvar-nav nv">
            <a class="nav-link" aria-current="page" href="./pages/registro.html">Registro</a>
            <a class="nav-link" href="#">Informacion</a>
            <a class="nav-link" href="#" >Nosotros</a>
            <a class="nav-link">Parques</a>            
        </div>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    )
}

export default Navbar;