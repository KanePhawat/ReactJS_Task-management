import "./Item.css";
import edit from "../img/edit.png";
import bin from "../img/bin.png";

export default function Item(props) {
  const { data, delData, editTask } = props;
  return (
    <div className="result">
      <div className="header">
        <p className="title">{data.title}</p>
        <div>
          <button>
            <img
              src={edit}
              alt="edit"
              className="edit-logo"
              onClick={() => editTask(data.id)}
            />
          </button>
          <button>
            <img
              src={bin}
              alt="bin"
              className="bin-logo"
              onClick={() => delData(data.id)}
            />
          </button>
        </div>
      </div>
      <div className="detail">
        <p>{data.detail}</p>
      </div>
    </div>
  );
}
