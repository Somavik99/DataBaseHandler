import LoginImage from "../../assets/business-presentation.png";
import SignImage from "../../assets/unlock-folder.png";

const SectionIMage = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
};

function DireectingPage() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "8%",
          fontSize: "50px",
          fontWeight: "600",
        }}
      >
        <div> Database Management Details</div>
      </div>
      <section style={SectionIMage}>
        <img src={LoginImage} alt="Login" style={{ width: "30vw" }} />

        <img src={SignImage} alt="SignUp" style={{ width: "30vw" }} />
      </section>
    </div>
  );
}

export default DireectingPage;
