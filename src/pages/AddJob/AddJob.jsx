import React from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddJob = () => {
  const { user } = useAuth();
  const addAJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    // process salary range data
    const {min,max,currency, ...newJob} = data;
    newJob.salaryRange = {min, max, currency}; 

    // process requirements and responsibilities
    newJob.requirements = newJob.requirements.split(',').map(req => req.trim());
    newJob.responsibilities = newJob.responsibilities.split(',').map(res => res.trim());
    newJob.status = "active"

    console.log(newJob)

    // save job to the database
    axios.post('http://localhost:3000/jobs', newJob)
      .then(res => {
        console.log(res)
        if(res.data.insertedId){
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Job added successfully',
            showConfirmButton: false,
            timer: 1500
          })
        //   form.reset();
        }
      })
      .catch(err => {
        console.error('Error adding job:', err);
      })
  };
  return (
    <div>
      <h2>Please add a job</h2>
      <form onSubmit={addAJob}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Basic Info</legend>

          <label className="label">Job Title</label>
          <input
            type="text"
            name="title"
            className="input"
            placeholder="Job Title"
          />

          <label className="label">Company</label>
          <input
            type="text"
            name="company"
            className="input"
            placeholder="Company Name"
          />

          <label className="label">Location</label>
          <input
            type="text"
            name="location"
            className="input"
            placeholder="Company Location"
          />

          <label className="label">Company Logo</label>
          <input
            type="text"
            name="company_logo"
            className="input"
            placeholder="Company Logo URL"
          />
        </fieldset>

        {/* Job Type */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Type</legend>
          <div className="filter">
            <input className="btn btn-square" type="reset" value="×" />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="On-site"
              value="On-Site"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Remote"
              value="Remote"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Hybrid"
              value="Hybrid"
            />
          </div>
        </fieldset>

        {/* Job Category */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Type</legend>
          <select
            defaultValue="Job Category"
            name="category"
            className="select"
          >
            <option disabled={true}>Job Category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </fieldset>

        {/* Application Deadline */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Application Deadline</legend>
          <input
            type="date"
            name="application_deadline"
            className="input"
            placeholder="Application Deadline"
          />
        </fieldset>

        {/* salary range */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Salary Range</legend>

          <label className="label">Minimum salary</label>
          <input
            type="text"
            name="min"
            className="input"
            placeholder="Minimum Salary"
          />

          <label className="label">Maximum salary</label>
          <input
            type="text"
            name="max"
            className="input"
            placeholder="Maximum Salary"
          />

          <label className="label">Currency</label>
          <select
            defaultValue="select a Currency"
            name="currency"
            className="select"
          >
            <option disabled={true}>Select a Currency</option>
            <option value="USD">BDT</option>
            <option value="EUR">EUR</option>
            <option value="GBP">USD</option>
          </select>
        </fieldset>

        {/* Job Description */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Description</legend>
          <textarea
            name="description"
            className="textarea"
            placeholder="Job Description"
          ></textarea>
        </fieldset>

        {/* Job Requirements */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Requirements</legend>
          <textarea
            name="requirements"
            className="textarea"
            placeholder="Job Requirements (separate by comma)"
          ></textarea>
        </fieldset>

        {/* Job Responsibilities */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Responsibilities</legend>
          <textarea
            name="responsibilities"
            className="textarea"
            placeholder="Job Responsibilities (separate by comma)"
          ></textarea>
        </fieldset>

        {/* HR Info */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">HR Info</legend>

          <label className="label">HR Name</label>
          <input
            type="text"
            name="hr_name"
            className="input"
            placeholder="HR Name"
          />

          <label className="label">HR Email</label>
          <input
            type="text"
            name="hr_email"
            className="input"
            placeholder="HR Email"
            defaultValue={user?.email}
          />
        </fieldset>

        <input type="submit" value="Add Job" className="btn btn-primary mt-4" />
      </form>
    </div>
  );
};

export default AddJob;
