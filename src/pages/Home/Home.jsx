import React, { Suspense } from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";

const Home = () => {
  const jobsPromise = fetch("http://localhost:3000/jobs")
  .then((res) =>res.json());

  return (
    <div>
      <Banner />
      <Suspense fallback={<p>Loading jobs...</p>}>
        <HotJobs jobsPromise={jobsPromise} />
      </Suspense>
    </div>
  );
};

export default Home;
