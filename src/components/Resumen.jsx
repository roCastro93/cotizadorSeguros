import React from 'react'
import styled from '@emotion/styled';
import {Primeramayuscula} from '../helper';
const Resumen = ({datos}) => {

    const { marca, year, plan} = datos;
    if( marca ===''|| year === ''|| plan ===''){
        return null;
    }

    const ContenedorResumen = styled.div`
        padding: 1rem;
        text-align: center;
        background-color: #00838f;
        color: #FFFFFF;
        margin-top: 1rem;
    `;
    return ( 
        <ContenedorResumen>
        <h2>Resumen De Cotizacion </h2>
        <ul>
            <li>marca: {Primeramayuscula(marca)}</li>
            <li>plan: {Primeramayuscula(plan)}</li>
            <li>año del auto: {year}</li>
        </ul>
        </ContenedorResumen>
     );
}
 
export default Resumen;