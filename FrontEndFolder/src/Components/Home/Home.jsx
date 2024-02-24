import { useEffect, useState } from "react";
import axios from "axios";
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { RiUserAddLine } from "react-icons/ri";
import { IoCheckmarkDone } from "react-icons/io5";
import AddData from "./AddData/AddData";
import { RxCross1 } from "react-icons/rx";
import { HiArrowsUpDown } from "react-icons/hi2";
import "./Home.css";

function Home() {
  const [GetTableData, setGetTableData] = useState([]);
  const [IsOpen, setIsOpen] = useState(false);
  const [IsEditing, setIsEditing] = useState(false);
  const [EditInput, setEditInput] = useState({
    name: "",
    email: "",
    mobile: "",
    _id: "",
  });

  let [IsAscending, setIsAscending] = useState(false);

  axios.defaults.baseURL = "http://localhost:8008/";

  const addButtonStyles = {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    border: "1.5px solid black",
    fontWeight: "600",
    fontSize: "1.8rem",
  };

  const HandleEditChange = (e) => {
    const { name, value } = e.target;
    setEditInput((Edits) => {
      return {
        ...Edits,
        [name]: value,
      };
    });
  };

  // const {  HandleInputChange } = useDataString();

  const FetchTableData = async () => {
    try {
      const responseData = await axios.get("/GET");
      setGetTableData(() => {
        return responseData.data.data;
      });
      console.log(responseData.data.data);
    } catch (err) {
      console.log(`Error Message : ${err.message}`);
    }
  };

  const HandleAddModal = () => {
    setIsOpen((open) => !open);
  };

  const HandleEdit = (data) => {
    setEditInput(data);
    setIsEditing(true);
  };

  const HandleDelete = async (id) => {
    try {
      const DeleteData = await axios.delete("/DELETE/" + id);
      if (DeleteData.data.success) {
        FetchTableData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const HandleUpdate = async () => {
    setIsEditing(false);
    try {
      const UpdatedData = await axios.put("/PUT", EditInput);
      if (UpdatedData.data.success) {
        FetchTableData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    FetchTableData();
  };

  const SortingDataNameAsc = () => {
    setIsAscending(true);
    const Data = [...GetTableData];
    if (GetTableData.length > 0) {
      const SortedData = Data.sort((a, b) => a.name.localeCompare(b.name));
      setGetTableData(SortedData);
    }
  };
  const SortingDataNameDsc = () => {
    setIsAscending(false);
    const Data = [...GetTableData];
    if (GetTableData.length > 0) {
      const SortedData = Data.sort((a, b) => b.name.localeCompare(a.name));
      setGetTableData(SortedData);
    }
  };
  const SortingDataEmailAsc = () => {
    setIsAscending(true);
    const Data = [...GetTableData];
    if (GetTableData.length > 0) {
      const SortedData = Data.sort((a, b) => a.email.localeCompare(b.email));
      setGetTableData(SortedData);
    }
  };
  const SortingDataEmailDsc = () => {
    setIsAscending(false);
    const Data = [...GetTableData];
    if (GetTableData.length > 0) {
      const SortedData = Data.sort((a, b) => b.email.localeCompare(a.email));
      setGetTableData(SortedData);
    }
  };

  useEffect(() => {
    FetchTableData();
  }, []);

  return (
    <div style={{ marginTop: "50px" }}>
      <div>
        <button onClick={HandleAddModal} style={addButtonStyles}>
          <RiUserAddLine color="Green" />
        </button>
        {IsOpen ? (
          <div className="Add__Modal">
            <div
              style={{
                float: "right",
                background: "black",
                color: "white",
                padding: "0.5rem",
                borderRadius: "10px",
                border: "1px solid white",
              }}
              onClick={closeModal}
            >
              <RxCross1 />
            </div>
            <AddData />
          </div>
        ) : null}
      </div>
      {GetTableData[0] ? (
        <table>
          <thead>
            <tr>
              <th>
                User Name
                {IsAscending === true ? (
                  <span onClick={SortingDataNameDsc}>
                    <HiArrowsUpDown />
                  </span>
                ) : (
                  <span onClick={SortingDataNameAsc}>
                    <HiArrowsUpDown />
                  </span>
                )}
              </th>
              <th>
                Email
                {IsAscending === true ? (
                  <span onClick={SortingDataEmailDsc}>
                    <HiArrowsUpDown />
                  </span>
                ) : (
                  <span onClick={SortingDataEmailAsc}>
                    <HiArrowsUpDown />
                  </span>
                )}
              </th>
              <th>Mobile</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {GetTableData.map((data, index) => {
              return (
                <tr key={index}>
                  <td>
                    {IsEditing ? (
                      <input
                        type="text"
                        name="name"
                        value={EditInput.name}
                        onChange={HandleEditChange}
                      />
                    ) : (
                      <>{data.name}</>
                    )}
                  </td>
                  <td>
                    {IsEditing ? (
                      <input
                        type="email"
                        name="email"
                        value={EditInput.email}
                        onChange={HandleEditChange}
                      />
                    ) : (
                      <>{data.email}</>
                    )}
                  </td>
                  <td>
                    {IsEditing ? (
                      <input
                        type="number"
                        name="mobile"
                        value={EditInput.mobile}
                        onChange={HandleEditChange}
                      />
                    ) : (
                      <>{data.mobile}</>
                    )}
                  </td>
                  <td>
                    {!IsEditing ? (
                      <button>
                        <FiEdit3
                          color="green"
                          onClick={() => HandleEdit(data)}
                        />
                      </button>
                    ) : (
                      <button onClick={HandleUpdate}>
                        <IoCheckmarkDone color="green" />
                      </button>
                    )}
                    <button onClick={() => HandleDelete(data._id)}>
                      <RiDeleteBin5Line color="red" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div
          style={{ textAlign: "center", fontSize: "50px", fontWeight: "600" }}
        >
          No Data Available
        </div>
      )}
    </div>
  );
}

export default Home;
