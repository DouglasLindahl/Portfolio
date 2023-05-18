import { useState } from 'react'
import React from 'react';
import { useQuery } from 'graphql-hooks';
import './App.css'

const WEBSITE_QUERY = `
query{
  allWebsites{
    id
    name
    link
    info
  }
}
`;


function App() {
  const { data, loading, error } = useQuery(WEBSITE_QUERY);


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
  return (
    <div class = "websiteContainer">
      {data.allWebsites.map((website) => (
        <div className="website" key={website.id}>
          <h1>{website.name}</h1>
          <a href={website.link}>{website.link}</a>
          <p>{website.info}</p>
        </div>
      ))}
    </div>
  )
}

export default App
