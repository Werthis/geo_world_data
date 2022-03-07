import { SocialIcon } from "react-social-icons";
import siteMetadata from "../../data/siteMetadata";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <SocialIcon
          className="socialICon"
          url={siteMetadata.github}
          bgColor="#8b8b8b"
        />
        {"  "}
        <SocialIcon
          className="socialICon"
          url={siteMetadata.linkedin}
          bgColor="#8b8b8b"
        />
      </div>
      <div className="copywright">
        {siteMetadata.author} {`© ${new Date().getFullYear()}`}{" "}
      </div>
    </footer>
  );
};

export default Footer;
