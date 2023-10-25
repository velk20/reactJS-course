import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/games'

export const getOne = async (gameId) => {
    return await request.get(`${baseUrl}/${gameId}`)
};
export const getAll = async () => {
    const result = await request.get(baseUrl);
    return Object.values(result)
};

export const create = async (data) => {
    return await request.post(baseUrl, data);
}

export const addComment = async (gameId, data) => {
    const result = await request.post(`${baseUrl}/${gameId}/comments`, data);

    return result

}
