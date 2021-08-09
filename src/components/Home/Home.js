import { Container, Row, Col } from "react-bootstrap";
import HomeImage1 from "../../assets/WelcomePicture.png";
import HomeImage2 from "../../assets/BusinessImg.jpg";
import styles from "./Home.module.css";
import { LinkContainer } from "react-router-bootstrap";
import PageButton from "../UI/PageButton";

const Home = (props) => {
  return (
    <Container className={styles.home}>
      <Row className="mt-5 align-items-center">
        <Col sm={12} md={{ span: 5, offset: 1 }}>
          <img
            src={HomeImage1}
            width="100%"
            height="100%"
            className="d-inline-block align-top"
            alt="Home"
          />
        </Col>
        <Col sm={12} md={5} className={styles.textCol}>
          <h2 className="mt-3">For our Users</h2>
          <p>
            Explore the Discouter App to discover discounts at local businesses
            on the Northern Beaches. Support our local small businesses and
            claim the offers that they provide exclusively to our users!
          </p>
          <LinkContainer to="/UsersPage">
            <PageButton>Join Us!</PageButton>
          </LinkContainer>
        </Col>
      </Row>

      <Row className="mt-3 align-items-center">
        <Col sm={12} md={{ span: 5, offset: 1 }} className={styles.textCol}>
          <h2>Your Business</h2>
          <p>
            Allow Discouter to ease both the financial and time costs associated
            with marketing. Zero Risk. Zero Cost. Full Control. As Discouter is
            based solely on the Northern Beaches, we give you a direct line of
            contact you your customer base.
          </p>
          <LinkContainer to="/BusinessPage">
            <PageButton>Find Out More!</PageButton>
          </LinkContainer>
        </Col>
        <Col sm={{ size: 12, order: "first" }} md={{ order: "last", span: 5 }}>
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
