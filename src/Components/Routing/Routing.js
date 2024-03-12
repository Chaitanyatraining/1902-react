import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ListsandKeys from '../ListsandKeys'
import ContactUs from '../ContactUs'
import Home from '../Home'
import Counter from '../Counter'
import LifeCycleMethods from '../LifeCycleMethods'
import Pagination from '../Pagination'
import UseStateCounter from '../Hooks/UseStateCounter'
import UseEffectHook from '../Hooks/UseEffectHook'
import UseEffectPagination from '../Hooks/UseEffectPagination'
import UseContextHook from '../Hooks/UseContextHook'
import UseReducerHook from '../Hooks/UseReducerHook'

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
            <Route path="usestatehook" element={<UseStateCounter />}  />
            <Route path="useeffecthook" element={<UseEffectHook />}  />
            <Route path="useeffectpagination" element={<UseEffectPagination />}  />
            <Route path="usecontext" element={<UseContextHook />}  />
            <Route path="usereducer" element={<UseReducerHook />}  />
        </Routes>
    </div>
  )
}

export default Routing