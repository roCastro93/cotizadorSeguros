import React, { useState } from "react";
import styled from "@emotion/styled";
import { obtenerDifYear, calcularMarca, calcularPlan } from "../helper";
const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;
const Label = styled.label`
  flex: 0 0 100px;
`;
const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;
const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Boton = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #ffff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
  margin-top: 2rem;
  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;
const Formulario = ({setResumen}) => {
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });
  const [error, setError] = useState(false);

  //extraer los valores del state
  const { marca, year, plan } = datos;

  const onChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (marca.trim() === "" || year.trim() === "" || plan.trim() === "") {
      setError(true);
      setTimeout(function () {
        setError(false);
      }, 3000);
      return;
    }
    setError(false);

    //una base de 2000
    let resultado = 2000;

    //obtener diferencia por año en cada año hay que restar 3%
    const diferencia = obtenerDifYear(year);
    resultado -= (diferencia * 3 * resultado) / 100;

    //americano 15%
    //asiatico 3%
    //europeo 30%
    resultado = parseFloat(calcularMarca(marca) * resultado);

    //plan basico 20%
    //completo 50%
    const incrementoPlan = calcularPlan(plan);
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);
    
    //total
    setResumen({
      cotizacion: resultado,
      datos: datos
    })
  };

  return (
    <form onSubmit={onSubmit}>
      {error ? <Error>Todos los campos son obligatorios</Error> : null}
      <Campo>
        <Label>Marca</Label>
        <Select name="marca" value={marca} onChange={onChange}>
          <option value="">-- Seleccione --</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Año</Label>
        <Select name="year" value={year} onChange={onChange}>
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Campo>
      <Campo>
        <Label htmlFor="">Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basico"
          checked={plan === "basico"}
          onChange={onChange}
        />
        Basico
        <InputRadio
          type="radio"
          name="plan"
          value="completo"
          checked={plan === "completo"}
          onChange={onChange}
        />
        Completo
      </Campo>
      <Boton type="submit">Cotizar</Boton>
    </form>
  );
};
export default Formulario;
