import { getByTestId, render } from "@testing-library/react"
import React from "react"
import NumberGame from "./NumberGame"


it('renders without crashing', () => {
   render(<NumberGame />)
})

it('finds h1', () => {
   const {getByText} = render(<NumberGame />)
   getByText('Target Num', {exact: false})
})

it('finds guess', () => {
   const {getAllByText} = render(<NumberGame />)
   getAllByText('Guess', {exact: false})
})