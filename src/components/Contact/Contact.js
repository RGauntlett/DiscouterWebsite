import GoogleMap from "./GoogleMap";
import { Row, Col, Container } from "react-bootstrap";
import PageButton from "../UI/PageButton";
import styles from "./Contact.module.css";
import { LinkContainer } from "react-router-bootstrap";

const Contact = (props) => {
  return (
    <Container className={styles.Contact}>
      <Row>
        <Col lg={{ size: 12, order: "last" }} xl={{ size: 7, order: "first" }}>
          <GoogleMap />
        </Col>
        <Col lg={12} xl={5} className="mb-5">
          <h2>Contact Us Today!</h2>
          <h4 className="mt-5">Email: contact@discouter.com</h4>
          <h4 className="my-5">Phone: (0451) 223 112</h4>

          <LinkContainer to="/privacypolicy">
            <PageButton>Privacy Policy</PageButton>
          </LinkContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
