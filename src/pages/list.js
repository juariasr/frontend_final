import React, { useEffect, useState } from "react";
import { getListTasks } from "../api/task";
import Task from "../components/task";

export default function List() {
  const [data, setData] = useState([]);

  async function GetTasks() {
    getListTasks()
      .then((data) => setData(data))
      .catch((error) => {
        alert(error);
      });
  }

  useEffect(() => {
    getListTasks();
  }, []);

  return (
    <>
      {data.map((item) => {
        return (
          <Task id={item._id} description={item.description} done={item.done} />
        );
      })}
    </>
  );
}
