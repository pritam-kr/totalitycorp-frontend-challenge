import "./App.css";
import { Add } from "./componenets/add/add";
import Nav from "./componenets/nav/nav";
import { News } from "./componenets/news/news";
import { Post } from "./componenets/post/post";
import { Profile } from "./componenets/profile/profile";
import { UserPost } from "./componenets/userPost/userPost";
 

function App() {
  return (
    <div className="container">
      <Nav />

      <main className="wrapper main_container">
        <div className="main_left">
        <Profile />
        </div>

        <div className="main_middle">
          <Post />
          <UserPost />
        </div>

        <div className="main_right">
          <News />
          <Add />
          <footer>
           <div>
           <p>About</p>
            <p>Accessiblity</p>
            <p>Help Center</p>
            <p>Advertising</p>
            <p>Business Service</p>
           </div>

           <p>LinkedIn Corporation © 2022</p>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;
