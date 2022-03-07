import { useState, useEffect } from "react";
import * as d3 from "d3";

const Graph = () => {
  const [geoData, setGeoData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    d3.csv("small_csv.csv").then((data) => {
      // console.log(data);
      setGeoData(JSON.stringify(data));
    });
  }, []);
  console.log(geoData);

  return (
    <></>
    // <div className="graph">
    //   {error && <div>{error}</div>}
    //   {isPending && <div>{isPending}</div>}
    //   {geoData && <div>{geoData}</div>}
    // </div>
  );
};

export default Graph;
