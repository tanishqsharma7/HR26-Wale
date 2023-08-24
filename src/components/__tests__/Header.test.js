import { render, screen } from "@testing-library/react";
import Header from "../Header";
import appStore from "../../utils/appStore.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load Header component with login button",()=>{

    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button");

   expect(loginButton).toBeInTheDocuments();

});

it("Should load Header component with cart items",()=>{

    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    );

    const cartItmes = screen.getByText(/🛒/);

   expect(cartItmes).toBeInTheDocuments();

});