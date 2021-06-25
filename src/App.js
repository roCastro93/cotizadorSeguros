import React, {useState} from 'react'
import Header from "./components/Header";
import Formulario from './components/Formulario'
import styled from "@emotion/styled";
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';


const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #ffffff;
  padding: 3rem;
`;
function App() {
  const [ resumen, setResumen] = useState({
    cotizacion: 0,
    datos:{
      plan:'',
      year:'',
      marca:''
    }
  });

  const { cotizacion,datos } = resumen;
  return (
    <>
    <Contenedor>
      <Header titulo="Cotizador de seguros" />
      <ContenedorFormulario>
        <Formulario
          setResumen={setResumen}
        />
         <Resumen
         datos={datos}
         />
         <Resultado
         cotizacion={cotizacion}
         />
      </ContenedorFormulario>
   
    </Contenedor>
    </>
  );
}

export default App;
