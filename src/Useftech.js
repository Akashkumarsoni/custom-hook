import { useState } from "react";

const useFtech = (url) => {


  const [data, extractDataFromApi] = useState("");
  
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      // localStorage.setItem("data", JSON.stringify(json.data.rows));
      extractDataFromApi(json.data.rows);
    })
    .catch((e) => {
      console.log(e);
    });

    return [data,extractDataFromApi];
};

export default useFtech;
