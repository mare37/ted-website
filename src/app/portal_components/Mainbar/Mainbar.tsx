import { ObjectId } from "mongoose";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/app/context/store";
import Item from "./Item";
import { loadingDiv } from "./localcomponents";

import "./Mainbar.modules.css";

interface Journal {
  _id: ObjectId;
  title: string;
  journal: string;
  imageName: string;
  identity: string;
}

interface Story {
  _id: ObjectId;
  title: string;
  tag: string;
  story: string;
  imageName: string;
  identity: string;
}

interface info {
  journalsLoading: boolean;
  storiesLoading: boolean;
  journals: Journal[];
  stories: Story[];
}

function Mainbar(props: info) {
  // const [width, setWidth] = useState(0)
  const router = useRouter();
  console.log(props.journals);
  console.log(props.stories);

  const { sidebar, setSidebar } = useGlobalContext();

  return (
    <div className={sidebar === true ? "mainbar after" : "mainbar"}>
      <div className="mainbar-nav">
        {" "}
        <img
          className="mainbar-nav-humburger"
          onClick={() => {
            setSidebar((prev: boolean) => {
              console.log(prev);
              return true;
            });
          }}
          src="./humburger-icon.png"
        />{" "}
        <div>
          {" "}
          <img src="men-digging.jpg" /> <p>Welcome Ted</p>{" "}
        </div>{" "}
      </div>

      <div className="mainbar-body">
        <h2>Dashboard</h2>

        <div className="mainbar-item-container">
          <div
            onClick={() => {
              router.push("/dashboard/journal");
            }}
            className="mainbar-item"
          >
            <section>
              <h3>Journals</h3>
              <p>
                {props.journalsLoading
                  ? "Loading.."
                  : props.journals.length === 0
                  ? "---"
                  : props.journals.length}
              </p>
            </section>

            <img src="./humburger-icon.png" />
          </div>

          <div
            onClick={() => {
              router.push("/dashboard/stories");
            }}
            className="mainbar-item"
          >
            <section>
              <h3>Stories</h3>
              <p>
                {props.storiesLoading
                  ? "Loading.."
                  : props.stories.length === 0
                  ? "---"
                  : props.stories.length}
              </p>
            </section>

            <img src="./humburger-icon.png" />
          </div>

          <div className="mainbar-item">
            <section>
              <h3>Visitors</h3>
              <p>100</p>
            </section>

            <img src="./humburger-icon.png" />
          </div>
        </div>

        <h3 className="mainbar-latestjournals-heading">Latest Journals</h3>

        <div className="latest-journals">
          {props.journalsLoading ? (
            loadingDiv
          ) : props.journals.length === 0 ? (
            <p className="no-show">No Journals To Show</p>
          ) : (
            props.journals
              .map((item: Journal, key: number) => {
                return (
                  <Item
                    key={key}
                    id={item._id}
                    title={item.title}
                    journal={item.journal}
                    imageName={item.imageName}
                    identity={"journal"}
                  />
                );
              })
              .reverse()
              .slice(0, 2)
          )}
        </div>

        <h3 className="mainbar-latestjournals-heading">Latest Stories</h3>

        <div className="latest-journals">
          {props.storiesLoading ? (
            loadingDiv
          ) : props.stories.length === 0 ? (
            <p className="no-show">No Stories To Show</p>
          ) : (
            props.stories
              .map((item: Story, key: number) => {
                return (
                  <Item
                    key={key}
                    id={item._id}
                    title={item.title}
                    tag={item.tag}
                    story={item.story}
                    imageName={item.imageName}
                    identity={"impact"}
                  />
                );
              })
              .reverse()
              .slice(0, 2)
          )}
        </div>
      </div>
    </div>
  );
}

export default Mainbar;
