import { Container, Row, Col, Button } from "react-bootstrap";
import HomeImage1 from "../../assets/Sketch_Collage_Black_Borders_copy.jpg";
import HomeImage2 from "../../assets/Business_Collage.jpg";
import styles from "./Home.module.css";

const Home = (props) => {
  return (
    <Container className={styles.home}>
      <Row className="mt-3 align-items-center">
        <Col>
          <img
            src={HomeImage1}
            width="100%"
            height="100%"
            className="d-inline-block align-top"
            alt="Home"
          />
        </Col>
        <Col className={styles.textCol}>
          <h2>For our Users</h2>
          <p>
            Explore the Discouter App to discover discounts at local businesses
            on the Northern Beaches. Support our local small businesses and
            claim the offers that they provide exclusively to our users!
          </p>
          <Button>Join Us!</Button>
        </Col>
      </Row>

      <Row className="mt-3 align-items-center">
        <Col className={styles.textCol}>
          <h2>Your Business</h2>
          <p>
            Allow Discouter to ease both the financial and time costs associated
            with marketing. Zero Risk. Zero Cost. Full Control. As Discouter is
            based solely on the Northern Beaches, we give you a direct line of
            contact you your customer base.
          </p>
          <Button>Find Out More!</Button>
        </Col>
        <Col>
          <img
            src={HomeImage2}
            width="100%"
            height="100%"
            className="d-inline-block align-top"
            alt="Home"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
