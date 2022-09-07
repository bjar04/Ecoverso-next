import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';

var nombres = ["harold", "mariana", "estefania"];
export default function Home() {
  return (
    <div className="main">
     <Navbar/>
     <Banner/>
     
    </div>
  )
}
