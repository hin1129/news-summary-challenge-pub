import { render, screen } from '@testing-library/react'
import Header from '../Components/Header';

describe('header component', () => {
    test('test matches snapshot', () => {
        // arrange
        const testHeaderComponent = render(< Header />);

        // act
        // assert
        expect(testHeaderComponent).toMatchSnapshot();
    })

    // no impact on result
    test('test to see if the value of props received is rendered', () => {
        // arrange
        const testTitleValue = "test title"
        render(< Header myTitle={testTitleValue} />);

        // act
        const result = screen.getByText(testTitleValue);

        // assert
        expect(result).toBeInTheDocument();
    })

    // no impact on result
    test('test to see if the value of props received is rendered', () => {
        // arrange
        const testHeaderValue = "test status"
        render(< Header myStatus={testHeaderValue} />);

        // act
        const result = screen.getByText(testHeaderValue);

        // assert
        expect(result).toBeInTheDocument();
    })
})


//  SE-2301-A Developing with ReactJS - Testing 22022023 29:39 / 1:57:07