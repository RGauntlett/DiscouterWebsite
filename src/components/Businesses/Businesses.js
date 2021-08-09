import { Row, Col, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import PageButton from "../UI/PageButton";
import BusinessImg from "../../assets/BusinessImg.jpg";
import styles from "./Businesses.module.css";

const Businesses = (props) => {
  return (
    <div className={styles.Businesses}>
      <div className={styles.MainImg}>
        <Image src={BusinessImg} fluid />
      </div>
      <Row className="mt-5 mx-3">
        <Col xs={12} md={8} className={styles.Businesses}>
          <h2>Advertise With Us For Free!</h2>
          <p>
            Send us a message about your business to get started. Ask for a
            personal meeting with one of our staff, or for help doing it
            yourself. To go your own way, download the app and create an
            account. Then go to your Account page and hit the Create New
            Business button. Design your business profile page and decide on the
            discounts that you choose to offer our users. The entire set-up
            should only take about 10 minutes. Let us know if there is anything
            that we can do to help!{" "}
          </p>
        </Col>
        <Col sm={12} md={4}>
          <LinkContainer to="/Contact">
            <PageButton>Email Us Now!</PageButton>
          </LinkContainer>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col sm={12} md={{ span: 8, offset: 2 }} className={styles.Businesses}>
          <h2>We Were Built For You!</h2>
          <p>
            Discouter’s main focus will always be to help those that help
            others. We know that you work as hard as you can to provide the best
            possible end-product to your customers. Our goal is to make your
            life easier by providing zero-risk and zero-cost marketing.
            Marketing is the laundry of the small-medium business world; your
            work is never done. Our goal is to give you one place that is easy
            to modify and control from any device. We are confident that we will
            become a large part of your marketing campaigns, for free! There is
            no lock-in contract and you can remove your business from Discouter
            at any time, might as well give it a try!
          </p>
        </Col>
      </Row>
      <Row className={styles.Businesses}>
        <Col sm={12} md={{ span: 4, offset: 2 }} className="mt-5 px-1">
          <h3>Advertise</h3>
          <p>
            Discouter is a FREE mobile-marketing platform based solely on the
            Northern Beaches. Unlike other mobile advertising apps with global
            reach; Discouter delivers a direct link to your customer base, the
            Northern Beaches community. Use our platform to display the
            incredible services that you provide to the locals. Early adopting
            businesses will receive a paid promotion specifically for them
            through our social media. We will also be able to thank you for
            starting with us by making you a featured business on the home page
            as our following grows.{" "}
          </p>
        </Col>
        <Col sm={12} md={4} className="mt-5 mp-1">
          <h3>Discount</h3>
          <p>
            In order to have your business published on Discouter we ask for one
            thing. Each business must give at least two discounts to our users.
            You have total control over what you offer. Feel free to use your
            offers to target aspects of your business that customers might not
            know about. Or, use a discount you know will be hugely popular to
            simply bring more people through the door.{" "}
          </p>
        </Col>
      </Row>
      <Row className={styles.Businesses}>
        <Col sm={12} md={{ span: 4, offset: 2 }} className="mt-5 px-1">
          <h3>Personalization</h3>
          <p>
            You will have full control over your businesses’ page. Not only do
            you control what you choose to offer through Discouter; you also
            have full control over the images, information, and content you
            provide to users.{" "}
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Businesses;
