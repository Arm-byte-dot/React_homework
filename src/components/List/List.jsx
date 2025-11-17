import "./List.css";
function List({ id, text, isDone, onToggle, onRemove }) {
  return (
    <>
      <div className={isDone ? "list-items green" : "list-items"}>
        <div className="todo">
          <p>{text}</p>
        </div>
        <div className="button-group">
          <div className="subbutton" onClick={onToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M2 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V7h-1V3H3v10h2.005v1H2.5a.5.5 0 0 1-.5-.5zm11.994 6.832l-4.52 4.519a.5.5 0 0 1-.706 0l-2.51-2.51l.706-.708l2.157 2.157l4.166-4.166z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="rebutton" onClick={onRemove}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
