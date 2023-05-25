import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormularioColor from "./components/FormularioColor";

function App() {
  return (
    <Container>
      <h1 className="text-center display-3">Administrador de Colores</h1>
      <FormularioColor></FormularioColor>
    </Container>
  );
}

export default App;
