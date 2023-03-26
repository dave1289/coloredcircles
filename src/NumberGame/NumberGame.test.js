import { fireEvent, getByTestId, render } from "@testing-library/react"
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

it('should increment guesses on click', () => {
   const {getByText, debug} = render(<NumberGame />)
   const count = getByText('Guess #0', {exact: false})
   const btn = getByText('Generate Num');
   fireEvent.click(btn)
   expect(count).toHaveTextContent('1')
   expect(count).not.toHaveTextContent('0')
})