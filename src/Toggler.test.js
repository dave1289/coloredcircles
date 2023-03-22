import React, { useState } from "react";
import Toggler from "./Toggler";
import { fireEvent, render } from '@testing-library/react';

it('should display on initial load', () => {
   const {getByText} = render(<Toggler />);
   const heading = getByText("Hello World");
   expect(heading).toHaveClass('Toggler-text');
   expect(heading).toBeInTheDocument();
})

it('should toggle off with button', () => {
   const {getByText} = render(<Toggler />);
   const heading = getByText("Hello World");
   fireEvent.click(getByText('Toggle'))
   expect(heading).not.toBeInTheDocument();
})