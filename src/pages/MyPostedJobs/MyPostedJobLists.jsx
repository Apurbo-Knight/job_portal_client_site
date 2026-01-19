import React, { use } from "react";
import { Link } from "react-router";

const MyPostedJobLists = ({ jobsCreatedByPromise }) => {
  const jobs = use(jobsCreatedByPromise);
  return (
    <div>
      <h2>Jobs created By You: {jobs.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Job Title</th>
              <th>Deadline</th>
              <th>Count</th>
              <th>View Applications</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {jobs.map((job, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.application_deadline}</td>
                <td>{job.application_count}</td>
                <td><Link to={`/applications/${job._id}`}>View Applications</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobLists;
