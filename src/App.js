import Header from "./component/Header";
import Item from "./component/Item";
import AddForm from "./component/AddForm";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [editId, setEditId] = useState(null);
  const [toggled, setToggled] = useState(false);
  const handleClick = () => {
    setToggled((s) => !s);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  function delData(id) {
    setTasks(tasks.filter((data) => data.id !== id));
  }
  function saveTask(e) {
    if (!title) {
      e.preventDefault();
      alert("กรุณาป้อนข้อมูลด้วยครับ");
    } else if (editId) {
      // อัพเดทข้อมูล
      e.preventDefault();
      const updateTask = tasks.map((item) => {
        // ค้นว่ารายการใดมีค่า id ตรงกับเลข editId => ให้เปลี่ยนแปลง title
        if (item.id === editId) {
          return { ...item, title: title, detail: detail };
        }
        return item;
      });
      setTasks(updateTask);
      setEditId(null);
      setTitle("");
      setDetail("");
    } else {
      // เพิ่มรายการใหม่
      e.preventDefault();
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        title: title,
        detail: detail,
      };
      setTasks([...tasks, newTask]);
      setTitle("");
      setDetail("");
    }
  }
  function editTask(id) {
    setEditId(id);
    const editTask = tasks.find((item) => item.id === id);
    setTitle(editTask.title);
    setDetail(editTask.detail);
  }
  return (
    <div className={`App${toggled ? " night" : " light"}`}>
      <Header toggled={toggled} onClick={handleClick} />
      <div className="container">
        <AddForm
          title={title}
          setTitle={setTitle}
          saveTask={saveTask}
          detail={detail}
          setDetail={setDetail}
          editId={editId}
        />
      </div>
      <div className="container">
        <h2>Task List</h2>
        <section>
          {tasks.map((data) => (
            <Item
              key={data.id}
              data={data}
              delData={delData}
              editTask={editTask}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
