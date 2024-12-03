export default function OurWork(props) {
  const { type } = props;
  const isFleet = type === "fleet";

  const emsWork = [
    "https://www.youtube.com/embed/Mco92OSHrGA?si=Jcv9wkuegNs64onv",
    "https://www.youtube.com/embed/NVoA_tKDOIU?si=XYB39Fk4BbzMlMV_",
  ];
  const fleetWork = [
    "https://www.youtube.com/embed/alPmnA6ynsY?si=95sAsDB9IKt1Dfkd",
  ];

  let works = [];
  if (isFleet) works = fleetWork;
  else works = emsWork;

  return (
    <div id="our-work">
      <div className="container-md column">
        <h3>Some of Our Work</h3>
        <div className="row">
          <div className="flex1 column work-item">
            <iframe width="560" height="315" src={works[0]} />
          </div>

          {works[1] ? (
            <div className="flex1 column work-item">
              <iframe width="560" height="315" src={works[1]} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
