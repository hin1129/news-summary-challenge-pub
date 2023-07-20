import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Body from '../components/Body';
// import axiosMock from 'axios';
// jest.mock(`axios`);
jest.mock('../utils/getRequest.jsx');
import { getRequest } from '../utils/getRequest'

describe('body component', () => {

    // see if useEffect run getNewsArticle
    test('useEffect, getNewsArticle', async () => {
        // arrange
        const mockData = {
            data: {
                response: { results: [{ id: "us-news/2023/mar/05/larry-hogan-republican-will-not-enter-2024-race" }] }
            }
        };

        // act
        getRequest.mockResolvedValueOnce(mockData)
        render(<Body />)

        // assert
        await waitFor(() => {
            //
            // expect(getRequest).toHaveBeenCalled()
            expect(getRequest).toHaveBeenCalledTimes(1)
        })
    })
})