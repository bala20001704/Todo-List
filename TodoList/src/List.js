import React from "react";

function List({ id, completed, item, handlebuttondelete, handlecomplete }) {
  return (
    <div>
      {" "}
      <p>
        <p key={id} style={{ backgroundColor: completed ? "red" : "white" }}>
          {item}
        </p>
        <div className="actions">
          <button
            className="space"
            onClick={() => {
              handlecomplete(id);
            }}
          >
            Complete
          </button>
          <button className="space" onClick={() => handlebuttondelete(id)}>
            Delete
          </button>
        </div>
      </p>
    </div>
  );
}

export default List;
