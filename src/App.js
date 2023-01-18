import logo from './logo.svg';
import './App.css';
import List from './component/List';
import Profile from './component/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Gallery from './component/profile/Gallery';
import ToDo from './component/profile/ToDo';
import Posts from './component/profile/Posts';

function App() {
  return (
    <div >
      <BrowserRouter>
        {/* <List></List> */}
        <Routes>
          <Route exact path='/' element={<List></List>}></Route>
          <Route exact path='/:id/profile' element={<Profile></Profile>}></Route>
          <Route exact path='/:id/posts' element={<Posts></Posts>}></Route>
          <Route exact path='/:id/gallery' element={<Gallery></Gallery>}></Route>
          <Route exact path='/:id/todo' element={<ToDo></ToDo>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
