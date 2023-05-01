import './App.css';
import Navbar from './Chat/Navbar/Navbar.js'
import Post from './Chat/Post/Post.js'
import ImageUploader from './Chat/ImageUploader/ImageUploader';
import { useState , useEffect } from 'react' 
import {db} from './firebase'
import {collection,onSnapshot,query,orderBy } from 'firebase/firestore';

function App() {
  const [post,setPost]=useState([]);

  useEffect(() => {
    const q = query(collection(db, 'post'), orderBy('timestamp', 'desc'));
    onSnapshot(q, (snapshot) => {
      setPost(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data()
        }))
      );
    })
  }, []);
  

  return (
   <div className="App">
    <Navbar></Navbar>
   <div className="section">
    <div className="ap-left">
        {
          post.map(({id,post}) => (
            <Post key={id} postID={id}  username={post.username} ImageURL={post.ImageURL} comment={post.comment} />
          ))
        }
      </div>
      <div className="ap-right">
        <ImageUploader></ImageUploader>
      </div>
   </div>
   </div>
  );
}

export default App;
