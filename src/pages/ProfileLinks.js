import me from "../assets/images/profile_pic.jpg";
import slack from "../assets/images/slack.png";
import github from "../assets/images/github.png";
import { Link } from "react-router-dom";

const ProfileLinks = () => {
  return (
    <div className="profile_container">
      <div className="profile_section">
        <img id="profile__img" src={me} className="profile_pic" alt="profile" />
        <h3 id="full_name">Nafisat Faruk</h3>
      </div>
      <div className="link_section">
        <a href="https://twitter.com/NykzzieT" rel="noreferrer" target="_blank">
          <div id="twitter">Twitter - NykzzieT</div>
        </a>

        <div id="slack" style={{ display: "none" }}>
          Slack - Nafisat Faruk
        </div>

        <a
          href="https://training.zuri.team"
          rel="noreferrer"
          target="_blank"
          id="btn__zuri"
        >
          <div>Zuri Team</div>
        </a>

        <a
          href="https://books.zuri.team"
          rel="noreferrer"
          target="_blank"
          id="books"
        >
          <div>Zuri Books</div>
        </a>

        <a
          href="https://books.zuri.team/python-for-beginners?ref_id=NafisatF"
          rel="noreferrer"
          target="_blank"
          id="book__python"
        >
          <div>Python Books</div>
        </a>

        <a
          href="https://background.zuri.team"
          rel="noreferrer"
          target="_blank"
          id="pitch"
        >
          <div>Background Check for Coders</div>
        </a>

        <a
          href="https://books.zuri.team/design-rules"
          rel="noreferrer"
          target="_blank"
          id="book__design"
        >
          <div>Design Books</div>
        </a>

        <Link to="/contact" id="contact">
          <div>Contact me</div>
        </Link>
      </div>

      <div className="personal_links">
        <a href="https://twitter.com/NykzzieT" rel="noreferrer" target="_blank">
          <img alt="icon-logo" src={slack} style={{ width: 20, height: 20 }} />
        </a>
        <a href="https://github.com/phyya" rel="noreferrer" target="_blank">
          <img alt="icon-logo" src={github} style={{ width: 20, height: 20 }} />
        </a>
      </div>
    </div>
  );
};

export default ProfileLinks;
