import "./page.modules.css";
import JournalItem from "./JournalItem/JournalItem";
import { journalsData as data } from "../data";

async function Blog() {
  // const data = await getData();

  console.log(data);

  return (
    <div className="journal">
      {data.map((item: any, key: number) => {
        console.log(item);

        return (
          <JournalItem
            key={key}
            id={item.id}
            title={item.title}
            imageName={item.imageName.src}
            journal={item.journal}
          />
        );
      })}
    </div>
  );
}

export default Blog;
