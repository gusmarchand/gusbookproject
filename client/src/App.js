import React, { useEffect, useState } from "react";
import Routes from "./components/routes";
import UidContext from "./components/AppContext";
import axios from "axios";

const App = () => {
  const [uid, setUid = useState] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          setUid(res.data);
        })
        .catch((err) => console.log("No token "));
    };
    fetchToken();
  }, [uid]);

  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
};

export default App;
