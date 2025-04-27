import "./page.modules.css";


import { ourLocationsData as locations } from "../data";

async function OurWork() {
  // const locations = await getLocations()

  console.log(locations);

  return (
    <div className="our-work">
      <section className="our-work-hero">
        <img src="" />
        <p>{"Our projects are sucess driven"} </p>
      </section>

      <section className="our-work-overview">
        <h1>{"Overview"}</h1>
        <p>
          {`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum`}
      
        </p>
      </section>

      <section className="our-work-team">
        <div className="our-work-individual">
          <img className="our-work-individual-pic" src="./man.jpg" />

          <div className="our-work-individual-text">
            <h2>{'Teddy Ochieng'}</h2>
            <p>{"Founder"}</p>
          </div>
        </div>

        <div className="our-work-individual">
          <img className="our-work-individual-pic" src="./man2.jpg" />
          <div className="our-work-individual-text">
            <h2>{"John Doe"}</h2>
            <p>{"Director"}</p>
          </div>
        </div>
      </section>

      <section className="our-current-projects">
        <h1 className="our-current-projects-heading">Our Current Projects</h1>

        <div className="our-current-projects-container">
          {locations.reverse().map((item: any) => {
            return (
              <div key={item.id} className="our-current-projects-item">
                <section className="our-current-projects-item-text">
                  <h1>{`${item.town}, ${item.county}`}</h1>

                  <p>{item.content}</p>

                  <h3>{"At a glance"}</h3>
                  <p>
                    {" "}
                    <span> {`${item.numberOftrees}+`} </span> {"trees planted"}
                  </p>
                  <p>
                    {" "}
                    <span>{`${item.numberOfIndividuals}+`}</span> {"individuals employed"} 
                  </p>
                </section>

                <section className="our-current-projects-item-pic">
                  <img
                    src={`../${
                      item.imageName.length === 1
                        ? "../men-digging.jpg"
                        : item.imageName
                    }`}
                  />
                </section>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default OurWork;
