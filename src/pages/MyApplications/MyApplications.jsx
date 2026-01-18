import React, { Suspense, use } from 'react'
import ApplicationStats from './ApplicationStats'
import ApplicationList from './ApplicationList'
import { myApplicationsPromise } from '../../api/applicationsAPI';
import useAuth from '../../hooks/useAuth';



const MyApplications = () => {
    const {user} = useAuth();
  return (
    <div>
        <ApplicationStats></ApplicationStats>
        <Suspense fallback={<p>Loading your applications...</p>}>
            <ApplicationList myApplicationsPromise={myApplicationsPromise(user.email)}></ApplicationList>
        </Suspense>
    </div>
  )
}

export default MyApplications