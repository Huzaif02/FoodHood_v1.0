import React from 'react'

import { Routes, Route} from 'react-router-dom'
import Search from './pages/Search/Search'
import Landing from './pages/Landing/Landing'


const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/Home' element={ <Landing/> }/>
      <Route path='/Search' element={<Search/>}/>
    </Routes>
  )
}

export default AllRoutes