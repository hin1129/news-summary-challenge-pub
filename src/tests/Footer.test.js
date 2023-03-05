import { render, screen } from "@testing-library/react";
import Footer from "../Components/Footer";

describe("Footer component", () => {
    test('test matches snapshot', () => {
        // arrange
        const testFooterComponent = render(<Footer />);

        // act
        // assert
        expect(testFooterComponent).toMatchSnapshot();
    })

    test('test to see if the value of props received is rendered', () => {
        // arrange
        const testFooterValue = "test footer"
        render(< Footer myFooter={testFooterValue} />);

        // act
        const result = screen.getByText(testFooterValue);

        // assert
        expect(result).toBeInTheDocument();
    })
})