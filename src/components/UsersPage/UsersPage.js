import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./UsersPage.module.css";
import ReactPlayer from "react-player";
import { LinkContainer } from "react-router-bootstrap";
import ExploreImg from "../../assets/ExploreImg.png";
import EnjoyImg from "../../assets/EnjoyImg.png";
import SubscribeImg from "../../assets/SubscribeImg.jpg";
import PageButton from "../UI/PageButton";

const UsersPage = (props) => {
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} md={7} className={styles.UsersP}>
          <p>
            The idea behind the Discouter App is simple, support your local
            small businesses. After all, they are what make Manly such a special
            place to live. Whether it’s your favourite cafe, hairdresser,
            restaurant, bar, sports facility, beauty salon, or other
            establishment with hardworking locals, their staff and owners work
            tirelessly to make our community a better place. They deserve our
            support now more than ever! Each Business on Discouter offers 2
            deals exclusively to Discouter users! Download the app now to start
            claiming these offers today for Free!
          </p>
        </Col>
        <Col sm={12} md={5} classname={styles.DownloadButtons}>
          <div className="d-grid gap-2 px-2">
            <LinkContainer to="https://apps.apple.com/au/app/discouter/id1518920729">
              <PageButton>Download at the App Store</PageButton>
            </LinkContainer>
            <LinkContainer to="https://play.google.com/store/apps/details?id=org.discotuer.application">
              <PageButton className="pt-3">
                Download on the Play Store
              </PageButton>
            </LinkContainer>
          </div>
        </Col>
      </Row>

      <Row className={styles.VideoContainer}>
        <Col md={12} lg={4} xl={5}>
          <h2>How It Works:</h2>
        </Col>
        <Col md={12} lg={8} xl={7}>
          <ReactPlayer url="https://youtu.be/yNTkva5xyyw" />
        </Col>
      </Row>

      <Row className={styles.EnjoyExploreSubscribe}>
        <Col sm={12} md={4}>
          <Image src={ExploreImg} fluid alt="Explore" />
          <h2 className="mt-2">Explore</h2>
          <p>
            Scroll through the home page and seek out businesses in your area
            that are offering their amazing services/products. Click on the
            Business Profile Picture to read a blurb about what they do. If you
            would like to see what discounts they have on offer then click the
            Business Profile Picture twice or click on the Business Title to be
            directed to their page.{" "}
          </p>
        </Col>
        <Col sm={12} md={4}>
          <Image src={EnjoyImg} fluid alt="Enjoy" />
          <h2 className="mt-2">Enjoy</h2>
          <p>
            Visit any of the 40+ local businesses found on the application and
            claim the discounts that they offer only to our users! These are not
            one-time offers! Claim them again and again!
          </p>
        </Col>
        <Col sm={12} md={4}>
          <Image src={SubscribeImg} fluid alt="Subscribe" />
          <h2 className="mt-2">Subscribe</h2>
          <p>
            Once you have used our application we hope that you will see the
            great value that we offer. By subscribing to Discouter you will gain
            access to every offer that is available. Or continue using the
            application for free!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default UsersPage;
