import React from "react";
import { useLoaderData } from "react-router-dom";

const Jobs = () => {
  const jabsData = useLoaderData();

  const data = jabsData.map((job) => {
    return (
      <div  key={job.id} >
        
          <p>{"Job Title : " + job.title}</p> 
          <p>{"Job Company : " + job.company}</p>
          <p>{"Job salary : " + job.salary}</p>
      
      </div>
    );
  });

  return <div className="jobs">
    {data}
    
    </div>;
};

export default Jobs;

// eslint-disable-next-line react-refresh/only-export-components
export const jobsLoader = async () => {
  const resp = await fetch("http://localhost:5000/jobs");
  if(!resp.ok){
    throw new Error('Could not fetch the jobs')
  }
  return resp.json();
};
