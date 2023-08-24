import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";


describe("Contact Us Page Test Cases",()=>{
    test("Should load contact us component",()=>{

        render(<Contact />);

        const heading = screen.getByRole("heading");
        //Assertion
        expect(heading).toBeInTheDocument();
    });

    //it==test

    it("Should load button inside contact component", () => {

        render(<Contact />);

        const button = screen.getByText("Submit")
        //Assertion
        expect(button).toBeInTheDocument();
    });

    test("Should load input name inside contact component", () => {

        render(<Contact />);

        const input = screen.getByPlaceholderText("Name");
        //Assertion
        expect(input).toBeInTheDocument();
    });

    test("Should load 2 input boxes on the contact component",()=>{
        render(<Contact />);

        const inputBoxes = screen.getAllByRole("textbox");

        expect(inputBoxes.length).toBe(2);

    });

});