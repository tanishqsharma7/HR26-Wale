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

it("Should search res list for burger text input", async ()=>{
    await act(async() => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    )
    );

    const cardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(20);

    const searchBtn = screen.getByRole("button", {name: "Search"});

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, {target : {value : "burger"}});
    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId("resCard");

    expect (cardsAfterSearch.length).toBe(3);

});

it("Should filter top rated restaurants", async ()=>{
    await act(async() => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    )
    );

    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(20);

    const topRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});
    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("rescard");
    expect(cardsAfterFilter.length).toBe(20);

});