import React, { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import MyPostedJobLists from "./MyPostedJobLists";
import { jobsCreatedByPromise } from "../../api/jobsAPI";

const MyPostedJobs = () => {

    const {user} = useAuth();

  return <div> 
            <h2>My Posted Jobs:</h2>
            <Suspense>
                <MyPostedJobLists jobsCreatedByPromise={jobsCreatedByPromise(user.email)}></MyPostedJobLists>
            </Suspense>
        </div>
};

export default MyPostedJobs;
