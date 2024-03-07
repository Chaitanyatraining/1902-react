import React from 'react'
import { context } from './UseContextHook'

const CompC = () => {
  return (
    <div>
        <h2>CompC</h2>
        <context.Consumer>
            {(value) => value}
        </context.Consumer>
    </div>
  )
}

export default CompC