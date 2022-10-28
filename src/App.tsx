import React, {useState} from 'react';
import './App.css';
import ToDoList from "./ToDoList/ToDoList";


function App() {
  const [posts , setPosts] = useState([
    {string:'My name is Genius' , id:JSON.stringify(Math.floor(Math.random()* 1000))} ,
    {string: 'How are you' , id:JSON.stringify(Math.floor(Math.random() * 1000))} ,
    {string: 'Well thank you' , id:JSON.stringify(Math.floor(Math.random() * 1000))}
  ]);

  const [showPosts , setShowPosts] = useState(false);
  const post = {string: '' , id:JSON.stringify(Math.floor(Math.random() * 1000))}
  const togglePosts = (event: React.ChangeEvent<HTMLInputElement>) => {
    post.string = event.target.value
    post.id = JSON.stringify(Math.floor(Math.random() * 1000))
  }

  const removePosts = (id: string) => {
    const index = posts.findIndex(p => p.id === id);
    const postsCopy = [...posts];
    postsCopy.splice(index, 1);
    setPosts(postsCopy);
  }

  const toggle = () => {
    if(post.string !== ''){
      posts.push(post);
    }
    setShowPosts(!showPosts);
  }
  let postsLists: React.ReactNode =  null;

  if(showPosts){
    postsLists = posts.map((list , index) => (
        <ToDoList massage={list.string} key={list.id} remove={() => removePosts(posts[index].id)}/>
    ))
  }



  return (
    <div className="App">
      <input onChange={event =>  togglePosts(event)}/>
      <button onClick={() => toggle()}>Add</button>
      {postsLists}
    </div>
  );
}

export default App;
