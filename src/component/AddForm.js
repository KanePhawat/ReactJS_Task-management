import "./AddForm.css";

export default function AddForm(props) {
  const { title, setTitle, saveTask, detail, setDetail, editId } = props;
  return (
    <>
      <h2>Add New Task Here</h2>
      <form onSubmit={saveTask}>
        <div className="title">
          <p>Title</p>
          <input
            className="text"
            type="text"
            placeholder="new task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="details">
          <p>
            Detail <span>(optional)</span>
          </p>
          <textarea
            className="text"
            type="text"
            placeholder="detail"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-btn">
          {editId ? "update" : "create"}
        </button>
      </form>
    </>
  );
}
