import axios from "axios";
// import { useState } from "react";
import useDataString from "../../CustomHook/useDataString";

function AddData() {
  //   const [UserInputs, setUserInputs] = useState({
  //     name: "",
  //     email: "",
  //     mobile: "",
  //   });

  axios.defaults.baseURL = "http://localhost:8008/";

  //   const HandleInputChange = (e) => {
  //     const { name, value } = e.target;
  //     setUserInputs((prev) => {
  //       return {
  //         ...prev,
  //         [name]: value,
  //       };
  //     });
  //   };

  const { UserInputs, HandleInputChange, setUserInputs } = useDataString();

  const HandleAddSubmit = async (e) => {
    e.preventDefault();
    if (
      UserInputs.email !== "" &&
      UserInputs.mobile !== "" &&
      UserInputs.name !== ""
    ) {
      try {
        const Data = await axios.post("/POST", UserInputs);

        console.log(Data.data);
        setUserInputs({
          name: "",
          email: "",
          mobile: "",
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <form
        style={{
          background: "rgba(125, 127, 131, 0.5)",
          backdropFilter: "blur(10px)",
          border: "none",
        }}
      >
        <div>
          <label htmlFor="Name">Name:</label>
          <input
            type="text"
            name="name"
            id="Name"
            value={UserInputs.name}
            onChange={HandleInputChange}
          />
        </div>
        <div>
          <label htmlFor="Email">Email:</label>
          <input
            type="email"
            name="email"
            id="Email"
            value={UserInputs.email}
            onChange={HandleInputChange}
          />
        </div>
        <div>
          <label htmlFor="Mobile">Mobile:</label>
          <input
            type="number"
            name="mobile"
            id="Mobile"
            value={UserInputs.mobile}
            onChange={HandleInputChange}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <button
            type="submit"
            onClick={HandleAddSubmit}
            style={{ textAlign: "center" }}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddData;
