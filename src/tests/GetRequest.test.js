import axiosMock from 'axios';
jest.mock(`axios`);
import { getRequest } from '../utils/getRequest'

describe('getRequest component', () => {
    test('getRequest function same as getNewsArticle function', async () => {
        // arrange
        const mockData = {
            response: [{ results: [{ id: `test` }] }]
        };

        // act
        axiosMock.get.mockResolvedValueOnce(mockData);
        await getRequest();

        // assert
        expect(axiosMock.get).toHaveBeenCalledWith(REACT_APP_NewsArticleURL)
    })
})
