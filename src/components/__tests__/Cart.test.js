import { fireEvent, getByTestId, getByText, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu.js";
import Header from "../Header.js";
import Cart from "../Cart.js";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json"
import { Provider } from "react-redux";
import appStore from "../utils/appStore.js";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch= jest.fn(()=>
    Promise.resolve({
        json: ()=> Promise.resolve(MOCK_DATA_NAME)
    })
);

it ("should load restaurant menu component", async ()=>{

    await act(async()=>render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
                <RestaurantMenu/>
                <Cart/>
            </Provider>
    </BrowserRouter>));

    const accordionHeader = screen.getByText("Croissants (2)");
    fireEvent.click(accordionHeader);
    
    expect (screen.getAllByTestId("fooditems").length).toBe(2);

    const addBtns = screen.getAllByRole("button", {name : "Add + "});
    
    fireEvent.click(addBtns[0]);

    expect(screen.getByText("🛒 - (1)")).toBeInTheDocument();

    expect (screen.getAllByTestId("fooditems").length).toBe(4);
    fireEvent.click(screen.getByRole("button", {name : "Clear Cart"}));

    expect (screen.getAllByTestId("fooditems").length).toBe(2);

    expect(
        screen,getByText("Cart is Empt, Add Items to the cart!")
    ).toBeInTheDocument();

});