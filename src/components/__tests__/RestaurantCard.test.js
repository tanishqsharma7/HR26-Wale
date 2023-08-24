import { render, screen } from "@testing-library/react"
import RestrauntCard from "../RestaurantCard.js";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it ("should render RestaurantCard component with props data",()=>{
    render(<RestrauntCard resData={MOCK_DATA} />);

    const name = screen.getByText("Bakingo");

    expect(name).toBeInTheDocument();
});