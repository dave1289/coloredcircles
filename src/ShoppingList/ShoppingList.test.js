import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ShoppingList from "./ShoppingList";

it("renders without crashing", () => {
   render(<ShoppingList />);
})

it("matches snapshot", () => {
   const { asFragment } = render(<ShoppingList />);
   expect(asFragment()).toMatchSnapshot();
})

it("should add new item", () => {
   const {queryByText} = render(<ShoppingList />);
   expect(queryByText('Product Name: Chocolate Milk')).not.toBeInTheDocument();
})

it("should add new item", () => {
   const {queryByText, getByLabelText} = render(<ShoppingList />);
   const input = getByLabelText("Product Name:")
   const btn = queryByText("Add Item")
   fireEvent.change(input, {target: {value: 'Chocolate Milk'}})
   fireEvent.click(btn);
   expect(queryByText('Product Name: Chocolate Milk')).toBeInTheDocument();   
})