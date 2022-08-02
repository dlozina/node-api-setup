"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
describe('Get All', () => {
    it('should return driver object', async () => {
        const { body: data } = await helpers_1.request.get('/').expect(200);
        expect(data).toEqual({
            "name": "Charles Leclerc",
            "team": "Ferrari",
            "number": 16,
            "wins": 5,
            "podiums": 18
        });
    });
});
