import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ListsandKeys from '../ListsandKeys'
import ContactUs from '../ContactUs'
import Home from '../Home'
import Counter from '../Counter'
import LifeCycleMethods from '../LifeCycleMethods'
import Pagination from '../Pagination'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/listkeys' element={<ListsandKeys />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path="counter" element={<Counter />}  />
            <Route path="lifecyclemethods" element={<LifeCycleMethods />}  />
            <Route path="pagination" element={<Pagination />}  />
        </Routes>
    </div>
  )
}

export default Routing