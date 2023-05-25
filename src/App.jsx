import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormularioColor from "./components/FormularioColor";
import CardColor from "./components/CardColor";

function App() {
  return (
    <>
      <h1 className="text-center display-3 my-3">Administrador de Colores</h1>
      <Container>
        <FormularioColor></FormularioColor>
      </Container>
      <Container>
        <h2 className="display-6 my-3">Lista de Colores</h2>
        <p className="lead text-center">No hay colores guardados</p>
        <Row xs={1} md={2} lg={3} xl={4}>
          <CardColor></CardColor>
        </Row>
      </Container>
    </>
  );
}

export default App;
