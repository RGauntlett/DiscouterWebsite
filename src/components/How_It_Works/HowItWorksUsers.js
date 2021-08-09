import { Container, Row, Col } from "react-bootstrap";
import PageButton from "../UI/PageButton";
import { LinkContainer } from "react-router-bootstrap";
import styles from "./HowItWorks.module.css";

const HowItWorksUsers = (props) => {
  return (
    <Container className="mt-5">
      <Row className={styles.HowItWorks}>
        <Col md={12} lg={8}>
          <h2>How It Works - For Users!</h2>
        </Col>
        <Col md={12} lg={4}>
          <LinkContainer to="/HowItWorksBusinesses">
            <PageButton>For Business Owners!</PageButton>
          </LinkContainer>
        </Col>
      </Row>
      <Container className={styles.List}>
        <ul className="mt-5">
          <li>
            <h3>&#8226; Step 1: Sign Up</h3>
          </li>
          <li>
            <p>
              Download the app and create an account. Join as a free member to
              immediately gain access to the primary discount offered from each
              business on Discouter. If you subscribe to the app you will gain
              access to every single discount that is available. Subscription is
              only $5 / 30 days and will not automatically renew so as to
              protect our customers.
            </p>
          </li>
          <li>
            <h3>&#8226; Step 2: Discover</h3>
          </li>
          <li>
            <p>
              Visit the home page and scroll through the businesses that
              advertise their services on Discouter. You can visit the home page
              as frequently as you want to discover what new businesses or
              offers are around!
            </p>
          </li>
          <li>
            <h3>&#8226; Step 3: Explore</h3>
          </li>
          <li>
            <p>
              If a business interests you, visit their profile page and see what
              exclusive offers they give our customers.
            </p>
          </li>
          <li>
            <h3>&#8226; Step 4: Experience</h3>
          </li>
          <li>
            <p>
              Visit the business and bring up the Discouter app on your phone.
              Find their business and go to their business page. Click on the
              offer that you would like to use and select “Claim”. A message
              will appear to make sure that you do not accidentally claim offers
              before you are at the business. Click on “Claim Now!” and you will
              be directed to the claim page. Show this page at point of payment
              and allow the staff member to select the “Offer Claimed” button on
              your phone.
            </p>
          </li>
          <li>
            <h3>&#8226; Step 5: Enjoy!</h3>
          </li>
          <li>
            <p>
              All that is left to do is enjoy the excellent products or services
              that are provided by the businesses listed on Discouter. Some
              offers will have a cooldown period that must pass before you can
              claim the same offer again. You will see a countdown on that offer
              until you can claim it again. Help support local businesses and
              save money by discovering and enjoying as many discounts as you
              would like through Discouter!
            </p>
          </li>
        </ul>
      </Container>
    </Container>
  );
};

export default HowItWorksUsers;
