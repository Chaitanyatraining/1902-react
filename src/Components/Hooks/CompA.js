import React from 'react'
import CompB from './CompB'
import { context } from './UseContextHook'

const CompA = () => {

  return (
    <div>
        <h2>CompA</h2>
        <context.Consumer>
            {(value) => value}
        </context.Consumer>
        <CompB />
    </div>
  )
}

export default CompA