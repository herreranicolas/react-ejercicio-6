import { Form, Button } from "react-bootstrap";
import ContenedorColor from "./ContenedorColor";

const FormularioColor = () => {
  return (
    <Form className="border border-3 shadow p-3 text-center">
      <Form.Group className="mb-3">
        <Form.Label className="mx-3">Elegir color</Form.Label>
        <Form.Control type="color" className="d-inline-block" />
      </Form.Group>
      <ContenedorColor color={"yellow"}></ContenedorColor>
      <Button variant="primary" type="submit">
        Guardar color
      </Button>
    </Form>
  );
};

export default FormularioColor;
