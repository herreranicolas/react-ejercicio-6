import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ContenedorColor from "./ContenedorColor";

const FormularioColor = () => {
  const [color, setColor] = useState("#000000");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form
      className="border border-3 shadow p-3 text-center"
      onSubmit={handleSubmit}
    >
      <Form.Group className="mb-3">
        <Form.Label className="mx-3">Elegir color</Form.Label>
        <Form.Control
          type="color"
          className="d-inline-block"
          onChange={(e) => setColor(e.target.value)}
        />
      </Form.Group>
      <ContenedorColor color={color}></ContenedorColor>
      <Button variant="primary" type="submit">
        Guardar color
      </Button>
    </Form>
  );
};

export default FormularioColor;
