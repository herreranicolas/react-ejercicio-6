import { Form, Button } from "react-bootstrap";

const FormularioColor = () => {
  return (
    <Form className="border border-3 shadow p-3 text-center">
      <Form.Group className="mb-3">
        <Form.Label className="mx-3">Elegir color</Form.Label>
        <Form.Control type="color" className="d-inline-block" />
      </Form.Group>
      <div
        className="mx-auto mb-3"
        style={{
          backgroundColor: "black",
          padding: "5rem",
          width: "25%",
          height: "25%",
        }}
      ></div>
      <Button variant="primary" type="submit">
        Guardar color
      </Button>
    </Form>
  );
};

export default FormularioColor;
