import { Card, Button, Col } from "react-bootstrap";
import ContenedorColor from "./ContenedorColor";

const CardColor = () => {
  return (
    <Col className="d-flex align-items-center justify-content-center">
      <Card style={{ width: "18rem" }}>
        <Card.Header>
          <Card.Title>Nombre color</Card.Title>
        </Card.Header>
        <Card.Body>
          <ContenedorColor></ContenedorColor>
        </Card.Body>
        <Card.Footer className="text-end">
          <Button variant="danger">Borrar color</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardColor;
