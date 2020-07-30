import React from 'react';
import './App.css';

function UserList(props){
        return (
            <div className='App'>
            <ul>
            {props.listOfUSer.map((item) => (
              <li key={item.id}>
              {item.name}
              </li>
          ))}</ul>
          </div>
             );
}
export default UserList;