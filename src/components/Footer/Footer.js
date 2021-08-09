import { Container, Row, Col } from "react-bootstrap";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <Container className={styles.footer}>
      <Row className="mt-3 justify-content-md-center">
        <Col className="d-inline-block">
          <p>(0451) 223 112 || contact@discouter.com</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
