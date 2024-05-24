import './App.css';
import Regis from './Regis';
import LoginForm from './LoginForm';
// import Home from './Home';
import axios from 'axios';
import Move from './Move';
import { useEffect } from 'react';
import { useState } from 'react';
function App() {
  const [posts,setPosts]=useState(null);
//   useEffect(()=>{axios.get("https://jsonplaceholder.typicode.com/todos")
//   .then(response=>response.json())
//   .then(response=>{
//   setPosts(response.data)})
//   .catch(error=>{
//     console.error("error came");
//   })
// },[]);

  useEffect(()=>
{
  fetch("https://jsonplaceholder.typicode.com/todos")

  .then(data=>data.json())
  .then(data=>{
  setPosts(data);  
  });
},[]);
  return (
<>
<Regis/>
{
  posts?(<ul>{posts.map(post=>(<li key={post.id}>
    <div>
      Id:{post.id}
    </div>
    <div>
      title:{post.title}
    </div>
  </li>))}</ul>):(<h1>load</h1>)
}

</>
    )
}

export default App;
