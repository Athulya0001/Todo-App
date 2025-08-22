import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Signin from './components/Authentication/Signin';
import Signup from './components/Authentication/Signup';
import TodoPage from './components/Todo/TodoList';

const App = () => {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Signup />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="/signin" element={<Signin />} />
          <Route path='/todo' element={<TodoPage/>}/>
        </Routes>
    </div>
  )
}

export default App
