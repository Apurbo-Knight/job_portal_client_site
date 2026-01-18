import React, { use } from "react";
import JobApplicationRow from "./JobApplicationRow";

const ApplicationList = ({ myApplicationsPromise }) => {
  const applications = use(myApplicationsPromise);
  return (
    <div>
      <h2 className="text-3xl">Jobs Applied So far:{applications.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <JobApplicationRow
                key={application._id}
                index={index}
                application={application}
              ></JobApplicationRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
