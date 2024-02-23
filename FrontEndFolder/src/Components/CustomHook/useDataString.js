import { useState } from "react";

function useDataString(){
    const [UserInputs, setUserInputs] = useState({
        name: "",
        email: "",
        mobile: "",
      });

      const HandleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInputs((prev) => {
          return {
            ...prev,
            [name]: value,
          };
        });
      };

      return {UserInputs, HandleInputChange,setUserInputs}
}
export default useDataString;