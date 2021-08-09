import iframe from "react-dom";

const GoogleMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3603.1368223840163!2d151.28433064768976!3d-33.79780379196915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sau!4v1628309980310!5m2!1sen!2sau"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowfullscreen=""
      loading="lazy"
      title="Manly"
    ></iframe>
  );
};

export default GoogleMap;
