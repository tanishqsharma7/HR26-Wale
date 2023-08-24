import { fireEvent, render, screen }  from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../Body.js";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("Should render the body conponent with search button", async ()=>{
    await act(async() => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    )
    );

    const searchBtn = screen.getByRole("button", {name: "Search"});

    const searchInput = screen.getByTestId(searchInput);

    fireEvent.change(searchInput, {target : {value : "burger"}});
    fireEvent.click(searchBtn);

    const cards = screen.getAllByTestId("resCard");

    expect (cards.length).toBe(4);

});