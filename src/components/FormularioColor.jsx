import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ContenedorColor from "./ContenedorColor";
import { v4 as uuid } from "uuid";

const FormularioColor = () => {
  const unique_id = uuid();

  const [color, setColor] = useState({ id: unique_id, value: "#000000" });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("colores", JSON.stringify(color));
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
          onChange={(e) =>
            setColor({
              id: unique_id,
              value: e.target.value,
            })
          }
        />
      </Form.Group>
      <ContenedorColor color={color.value || "#000000"}></ContenedorColor>
      <Button variant="primary" type="submit">
        Guardar color
      </Button>
    </Form>
  );
};

export default FormularioColor;
