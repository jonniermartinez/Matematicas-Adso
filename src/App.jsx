import { Routes, Route, Link } from "react-router-dom";
import Inicio from './components/layaut/Inicio';
import Figuras from './components/layaut/Figuras';
import SolidoIrregular from './components/figuras/solido-irregular';
import './App.css';
import Navegacion from './components/layaut/navegacion'
import Cuadrado from './components/figuras/Cuadrado';
import Rectangulo from './components/figuras/Rectangulo';
import Trapecio from './components/figuras/Trapecio';
import Triangulo from './components/figuras/Triangulo';
import Rombo from './components/figuras/Rombo';
import Cubo from './components/figuras/Cubo';
import Cono from './components/figuras/Cono';
import Esfera from './components/figuras/Esfera';
import Cilindro from './components/figuras/Cilindro'
import Prisma from './components/figuras/Prisma'

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
