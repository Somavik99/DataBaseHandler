import securityImage from "../../assets/otp-security.png";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import DataBaseImg from "../../assets/data-analysis.png";
import DataComputing from "../../assets/cloud-data-processing.png";
import SecureData from "../../assets/secured-shopping-and-delivery.png";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiFacebook } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { LuInstagram } from "react-icons/lu";
import "./Welcome.css";

function WelcomePage() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Welcome To Our Page</h1>
        <img src={securityImage} alt="image" style={{ width: "50vw" }} />
      </div>
      <ScrollReveal>
      <h1 style={{marginLeft:"20%"}}>Data Management</h1>
        <div className="Data__base">
         
          <img src={DataBaseImg} alt="dataBase" />
          <p>
            Management, the art of direction and control, Guiding teams towards
            a shared goal. Leadership essence, it is both science and art,
            Balancing tasks, people, playing every part. Strategizing plans to
            navigate the way, Allocating resources, day by day. Motivating
            individuals to strive for success, Building cohesion, resolving each
            mess. Adapting to challenges with swift precision, Fostering growth,
            a visionary mission. Communication key, in every direction,
            Management dance, a complex intersection.
          </p>
        </div>
      </ScrollReveal>
      <ScrollReveal>
      <h1 style={{marginLeft:"20%",marginBottom:"-5%",marginTop:"8%"}}>24X7 Customer Support</h1>
        <div className="Data__base">
          <img src={DataComputing} alt="dataBase" />
          <p style={{ marginLeft: "10%" }}>
            Database support, the backbone of digital age, Ensuring data is
            secure, the rightful stage. From SQL queries to schema design,
            Experts manage the lifeline of data, refined. Troubleshooting
            glitches, resolving queries, Maintaining integrity, no room for
            worries. Backups, migrations, upgrades they oversee, In the world of
            databases, they hold the key. Performance tuning, optimizing speed,
            Database support, fulfilling every need. From relational to NoSQL,
            they navigate, Ensuring systems run smoothly, no debate. Their
            expertise invaluable, in realms vast, Database support, a pillar
            unsurpassed.
          </p>
        </div>
      </ScrollReveal>
      <ScrollReveal>
      <h1 style={{marginLeft:"20%",marginBottom:"-2%",marginTop:"4%"}}>Secured  Data</h1>
        <div className="Data__base">
          <img src={SecureData} alt="dataBase" />
          <p>
            In realms of data, secrecy is paramount, Trustworthiness, a
            cornerstone to count. Encryption shields, from prying eyes,
            Confidentiality upheld, where truth lies. Integrity preserved,
            through every transaction, Trust in the system, a solid foundation.
            Authentication gates, access controlled, Ensuring only authorized
            paths unfold. Privacy respected, in each digital stride, Building
            trust, where data resides. Transparency embraced, to build rapport,
            In the realm of data, trust is the core.
          </p>
        </div>
      </ScrollReveal>
      <section className="Info__section">
        <p className="About">
          For more details contact <br/> us on the social websites
        </p>
        <div className="Contacts">
          <p>
            <FaLinkedinIn size={25} color="blue"/>
          </p>
          <p>
            <SiFacebook size={25} color="rgb(13,110,253)" />
          </p>
          <p>
            <BsTwitterX size={25} color="white" />
          </p>
          <p>
            <LuInstagram size={25} color="white"/>
          </p>
        </div>
        <p className="Email">
          Email: <span>datamange@email.com</span>
        </p>
      </section>
    </div>
  );
}

export default WelcomePage;
