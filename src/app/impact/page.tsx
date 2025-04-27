import Hero3 from "./Hero/Hero";
import "./page.modules.css";

import { storiesData as data } from "../data";

import pic from "../assets/journal-pic.jpg";

async function Impact() {
  return (
    <div className="impact">
      <Hero3 />

      <div className="latest">
        <h1>THE LATEST</h1>
      </div>

      <div className="impact-article-container">
        {data
          .map((item: any, key: number) => {
            return (
              <article key={key} className="article">
                <div>
                  <img className="impact-top-image" src={pic.src} />
                </div>

                <div className="impact-text">
                  <p>{item.tag}</p>
                  <h3>{item.title}</h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        item.story.length > 150
                          ? item.story.slice(0, 150) + "..."
                          : item.story,
                    }}
                  />
                </div>

                <p>Click here to continue reading....</p>
              </article>
            );
          })
          .reverse()
          .slice(0, 3)}
      </div>

      <div className="more-stories">
        <p> CLICK TO VIEW MORE STORIES </p>
      </div>
    </div>
  );
}

export default Impact;
