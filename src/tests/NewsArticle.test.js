import { render, screen } from '@testing-library/react'
import NewsArticle from '../components/NewsArticle'

xdescribe('news article component', () => {
    test('render the correct headline', () => {
        // arrange
        const testHeadline = 'test';
        render(<NewsArticle myHeadline={testHeadline} />)
        // act
        const result = screen.getByTestId('testMyHeadline')
        // assert
        expect(result).toHaveTextContent(testHeadline)
    })

    // test('render the correct thumbnail', () => {
    //     const mockData = {
    //         data: {
    //             response: { results: [{ id: "1" }] }
    //         }
    //     };

    //     render(<NewsArticle />)
    //     const myresult = screen.getByText('testMyHeadline')
    //     expect(myresult).toHaveTextContent(mockData)
    // })
})