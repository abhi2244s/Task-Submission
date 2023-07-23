import React, { useEffect, useState } from "react";
import db from "../utils/db";


const ApiExample = () => {
  const [data, setData] = useState([]);

  const fetchData =() => {
    setData(db);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{margin:"20px"}}>
      ApiExample
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <p>Name - {item.name}</p>
            <p>Description - {item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiExample;
