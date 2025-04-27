import "./JournalItem.modules.css";

function JournalItem(props: any) {
  return (
    <div className="journal-item">
      <div className="journal-container">
        <div>
          <img src={props.imageName} className="journal-image" />
        </div>

        <div className="journal-item-text">
          <h2>June 7, 2023 </h2>

          <h1>
            {props.title.length > 50
              ? props.title.slice(0, 50) + "..."
              : props.title}
          </h1>

          <p
            dangerouslySetInnerHTML={{
              __html:
                props.journal.length > 200
                  ? props.journal.slice(0, 200) + "..."
                  : props.journal,
            }}
          />

          <p>Continue reading</p>
        </div>
      </div>
    </div>
  );
}

export default JournalItem;
