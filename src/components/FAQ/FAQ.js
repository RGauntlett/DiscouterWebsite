import { Container, Row } from "react-bootstrap";
import styles from "./FAQ.module.css";

const FAQ = (props) => {
  return (
    <Container className="mt-3">
      <Row className={styles.FAQ}>
        <h2>FAQ's:</h2>
      </Row>
      <Container className={styles.FAQ}>
        <ul className="mt-3">
          <li>
            <h4>
              &#8226; If I subscribe, will it automatically charge me at the end
              of each subscription, or do I have to renew each month?
            </h4>
          </li>
          <li>
            <p>
              Once you have made a subscription you will be granted access to
              every offer we have to give for one month from the day that you
              purchased. At the end of the month you will be asked to subscribe
              again, you will not have to enter information to pay each time as
              that will be stored securely by our payment gateway, stripe.
            </p>
          </li>
          <li>
            <h4>
              &#8226; If I accidentally click on an offer too soon - can I get
              it back to use it at the right time?
            </h4>
          </li>
          <li>
            <p>
              There will be a buffer button to give you the opportunity to go
              back before claiming. However, once an offer has been claimed you
              will have to wait the cooldown period before you can once again
              claim this offer.
            </p>
          </li>
          <li>
            <h4>
              &#8226; If the merchant refuses to redeem the offer - what can I
              do?{" "}
            </h4>
          </li>
          <li>
            <p>
              It is written in the terms and conditions that businesses must
              honour offers that they load onto the app. As long as an offer is
              claimable and within the timeframe written by the business then
              the business will have to give the discount to that customer. If a
              user is trying to cheat by owning more than one account, or use a
              discount from Discouter in combination with another offer then
              businesses do have the right to refuse service. Please notify us
              immediately if any businesses are not honouring their offers at
              contact@discouter.com
            </p>
          </li>
          <li>
            <h4>
              &#8226; If I find a vendor/merchant who would be interested in
              being added how do I get them to contact you?
            </h4>
          </li>
          <li>
            <p>
              They can download the app themselves and create their business
              profile, or they can send an email to contact@discouter.com. They
              can also find out more information at our website:{" "}
              <a href="/Home">Discouter.com</a>
            </p>
          </li>
          <li>
            <h4>&#8226; If I have an issue using the app who do I contact?</h4>
          </li>
          <li>
            <p>
              All issues can be resolved by sending an email with an explanation
              of your issue to contact@discouter.com
            </p>
          </li>
          <li>
            <h4>&#8226; Does this app track where I am?</h4>
          </li>
          <li>
            <p>
              Yes, in order to recommend businesses that are local to you we
              will ask for your location.
            </p>
          </li>
          <li>
            <h4>
              &#8226; If the offer is a discount can my friends who are with me
              use it too - or do they need to download the app as well?
            </h4>
          </li>
          <li>
            <p>
              Discounts can only be claimed by users of the application. It only
              takes 1 minute to download and sign up though! So let them know
              about us and they can join in on the savings as well!
            </p>
          </li>
        </ul>
      </Container>
    </Container>
  );
};

export default FAQ;
