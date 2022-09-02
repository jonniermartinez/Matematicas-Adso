import react from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Inicio from './components/Inicio';
import Figuras from './components/Figuras';
import SolidoIrregular from './components/solido-irregular';
import './App.css';
import Navegacion from './components/navegacion.jsx'
import Cuadrado from './components/Cuadrado';
import Rectangulo from './components/Rectangulo';
import Trapecio from './components/Trapecio';
import Triangulo from './components/Triangulo';
import Rombo from './components/Rombo';
import Cubo from './components/Cubo';
import Cono from './components/Cono';
import Esfera from './components/Esfera';
import Cilindro from './components/Cilindro'
import Prisma from './components/Prisma'

function App() {
  return (
    <div className="App">
        <Navegacion></Navegacion>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="figuras" element={<Figuras />} />
            <Route path='solido-irregular' element={<SolidoIrregular />} />
            <Route path='cuadrado' element={<Cuadrado />} />
            <Route path='rectangulo' element={<Rectangulo />} />
            <Route path='trapecio' element={<Trapecio />} />
            <Route path='triangulo' element={<Triangulo />} />
            <Route path='rombo' element={<Rombo />} />
            <Route path='cubo' element={<Cubo />} />
            <Route path='cono' element={<Cono />} />
            <Route path='esfera' element={<Esfera />} />
            <Route path='cilindro' element={<Cilindro />} />
            <Route path='prisma' element={<Prisma />} />
          </Routes>
          <footer className="footer">Jonnier Martinez</footer>

    </div>
  )
}

export default App
