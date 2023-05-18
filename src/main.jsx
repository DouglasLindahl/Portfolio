import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// ...
import { GraphQLClient, ClientContext } from 'graphql-hooks';

const client = new GraphQLClient({
    url: 'https://graphql.datocms.com/',
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`, // the API token should lay in your .env file
    },
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ClientContext.Provider value={client}>
            <App />
        </ClientContext.Provider>
    </React.StrictMode>
);