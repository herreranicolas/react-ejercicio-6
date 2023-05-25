import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormularioColor from "./components/FormularioColor";
import CardColor from "./components/CardColor";

function App() {
  const [arrayColores, setArrayColores] = useState(
    JSON.parse(localStorage.getItem("colores")) || []
  );

  const guardarColor = (color) => {
    setArrayColores([...arrayColores, color]);
  };

  const borrarColor = (colorId) => {
    setArrayColores(arrayColores.filter((color) => color.id !== colorId));
  };

  useEffect(() => {
    localStorage.setItem("colores", JSON.stringify(arrayColores));
  }, [arrayColores]);

  return (
    <>
      <h1 className="text-center display-3 my-3">Administrador de Colores</h1>
      <Container>
        <FormularioColor guardarColor={guardarColor}></FormularioColor>
      </Container>
      <Container>
        <h2 className="display-6 my-3">Lista de Colores</h2>
        {arrayColores.length === 0 ? (
          <p className="lead text-center">No hay colores guardados</p>
        ) : (
          <Row xs={1} md={2} lg={3} xl={4}>
            {arrayColores.map((color) => (
              <CardColor
                key={color.id}
                color={color.value}
                id={color.id}
                borrarColor={borrarColor}
              ></CardColor>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
}

export default App;
