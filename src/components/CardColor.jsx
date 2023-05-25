import { Card, Button, Col } from "react-bootstrap";
import ContenedorColor from "./ContenedorColor";

const CardColor = ({ id, color, borrarColor }) => {
  return (
    <Col className="d-flex align-items-center justify-content-center mb-3">
      <Card style={{ width: "18rem" }}>
        <Card.Header>
          <Card.Title>Color: {color}</Card.Title>
        </Card.Header>
        <Card.Body>
          <ContenedorColor color={color}></ContenedorColor>
        </Card.Body>
        <Card.Footer className="text-end">
          <Button variant="danger" onClick={() => borrarColor(id)}>
            Borrar color
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardColor;
