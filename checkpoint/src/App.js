import React, { useState, useEffect } from "react";
import axios from "axios";
import UserList from './UserList'
import './App.css'
function App() {
	 const [listOfUSer, setlistOfUSer] = useState([]);
	 useEffect(() => {
	   const fetchData = async () => {
	     const result = await axios.get(
	       "https://jsonplaceholder.typicode.com/users"
	     );
	     setlistOfUSer(result.data);
	   };
	   fetchData();
	 }, []);
	 return (
        <div>
          <UserList listOfUSer={listOfUSer}/>
        </div>
);
}
export default App;
