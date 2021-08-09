import { Container, Row, Col } from "react-bootstrap";
import PageButton from "../UI/PageButton";
import { LinkContainer } from "react-router-bootstrap";
import styles from "./HowItWorks.module.css";

const HowItWorksBusinesses = (props) => {
  return (
    <Container className="mt-5">
      <Row className={styles.HowItWorks}>
        <Col md={{ size: 12, order: "last" }} lg={{ size: 4, order: "first" }}>
          <LinkContainer to="/HowItWorksUsers">
            <PageButton>For Our Users!</PageButton>
          </LinkContainer>
        </Col>
        <Col md={12} lg={8}>
          <h2>How It Works - For Business Owners!</h2>
        </Col>
      </Row>
      <Container className={styles.BusinessList}>
        <ul className="mt-5">
          <li>
            <h3>&#8226; Step 1: Create an Account</h3>
          </li>
          <li>
            <p>
              First things first, create a user account on Discouter. Once you
              have created your account, visit your account page and at the
              bottom you will see a button to “Create New Business”.
            </p>
          </li>
          <li>
            <h3>&#8226; Step 2: Build Your Business Profile</h3>
          </li>
          <li>
            <p>
              After clicking the “Create New Business” button you will be taken
              to the business edit page. Here you will upload all the data
              necessary to tell people about your business. This includes: an
              image to be the face of your business, the suburb where your
              business operates, a small description of your business, contact
              information, a primary offer, and at least one secondary offer.
            </p>
          </li>
          <li>
            <h3>&#8226; Step 3: Decide Your Offers</h3>
          </li>
          <li>
            <p>
              As a business owner you have full control over what discounts your
              offer through Discouter. The only requirement is that you have one
              primary offer and at least one secondary offer. Keep in mind, all
              Discouter users will be able to redeem your primary offer. Only
              subscribed users will be able to claim any secondary offers. You
              will also be able to add a cooldown period on the offers that our
              users will have to wait before they can claim that offer again.
            </p>
          </li>
          <li>
            <h3>&#8226; Step 4: Enjoy the Free Marketing</h3>
          </li>
          <li>
            <p>
              Discouter was built with the goal of helping small businesses.
              Once you have built your business profile and chosen your offers
              we will handle all the marketing costs. Our mission is to get as
              many users on Discouter as we can. Each one of those users will be
              able to see your business and the great discounts they can access
              with you through the application.
            </p>
          </li>
          <li>
            <h3>&#8226; Step 5: Redeem Offers</h3>
          </li>
          <li>
            <p>
              When our users visit your business they will claim the discounts
              that you offer through Discouter. In order to keep the process as
              simple as possible, Discouter will not interfere with any payment
              process that you currently have in place. Users will select the
              “Claim” button and show your staff members the redeem offer page
              at POS. Users, or your staff member, will then click the Offer
              Claimed” button and the discount can be manually applied for the
              customer.
            </p>
          </li>
          <li>
            <h3>&#8226; Step 6: Update</h3>
          </li>
          <li>
            <p>
              You will have the option to update any information on your
              business page as frequently as you want. You can change the look
              of your page by using a different image for your business profile
              or highlight a new service or product through your description.
              Since you have total control of your offers there are a multitude
              of ways to use the discounts to help your business. Use them to
              promote your bestselling product or service to show people what
              you do best, or target a part of your business that people might
              be unaware of. The options are limitless and you can freely chop
              and change your offers to discover what works best for you!
            </p>
          </li>
          <li>
            <h3>&#8226; Step 7: Contact Us</h3>
          </li>
          <li>
            <p>
              Please feel free to let us know if you are having any trouble with
              the app. We are here to help you and will do our best to help
              clear up any issues as quickly as possible so that Discouter can
              start to advertise your business as soon as possible. Also we love
              to hear your feedback. If there is a feature or function that you
              think could be beneficial to your business please let us know and
              we can try to implement it into the app so that we can bring our
              best possible product to you!{" "}
            </p>
          </li>
        </ul>
      </Container>
    </Container>
  );
};

export default HowItWorksBusinesses;
