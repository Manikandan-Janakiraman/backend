import React from 'react'
import StateUpdate from './Task/StateUpdate'
import ImmutableObject from './Task/ImmutableObject'
import MultiInput from './Task/MultiInput'
import Validation from './Task/Validation'
import Conditional from './Task/Conditional'
import Counter from './Task/Counter'
import Toggle from './Task/Toggle'
import Array from './Task/Array'
import MultipleState from './Task/MultipleState'
import FormSubmit from './Task/FormSubmit'

const App = () => {
  return (
    <>
    <StateUpdate />
    <ImmutableObject />

    <MultiInput />

    <Validation />

    <Conditional />

    <Counter />
    
    <Toggle />

    <Array />

    <MultipleState />

    <FormSubmit />


    
    </>
  )
}

export default App