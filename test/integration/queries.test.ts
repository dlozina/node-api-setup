import { request } from "../helpers"

describe('Get All', () => {
    it('should return driver object', async () => {
        const {body: data} = await request.get('/').expect(200)
        expect(data).toEqual({
            "name":"Charles Leclerc",
            "team":"Ferrari",
            "number":16,
            "wins":5,
            "podiums":18}
        )
    })
})