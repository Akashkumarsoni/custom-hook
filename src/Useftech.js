import { useState } from "react";

const useFtech = (url) => {


  const [fetch,setFetch] = useState("");
  
  fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      localStorage.setItem("data", JSON.stringify(json.data.rows));

      setFetch(json.data.rows);
    })
    .catch((e) => {
      console.log(e);
    });

    return [fetch,setFetch];
};

export default useFtech;
