import React, {useContext} from 'react'
import CompA from './CompA'
import CompB from './CompB'

export const context = React.createContext()

const UseContextHook = () => {
  return (
    <div>
        <h2>UseContextHook</h2>
        <context.Provider value="ReactJs">
            <CompA />
        </context.Provider>
    </div>
  )
}

export default UseContextHook