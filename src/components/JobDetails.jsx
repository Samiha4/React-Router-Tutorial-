import React from "react";
import { useParams, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams();
  const DetailsLoader = useLoaderData();


  return (
    <div  className="jobs-details">
      <h1>Job Details Page</h1>
      <p><b>Job Id :</b>{id}</p>
      {/* you can fetch more details about the job using the id*/}
      <p><b>Job Title :</b> {DetailsLoader.title}</p> 
      <p><b>Job Company :</b> {DetailsLoader.company}</p>
      <p><b>Job salary : </b>{DetailsLoader.salary}</p>
      
    </div>
  );
};

export default JobDetails;

// eslint-disable-next-line react-refresh/only-export-components
export const jobsDetailsLoader = async ({ params }) => {
  const resp = await fetch("http://localhost:5000/jobs/" + params.id);
  if(!resp.ok){
    throw new Error('Could not fetch the job details')
  }
  return resp.json();
};
