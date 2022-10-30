import "../../config/global-config"
import { client } from "../../config/client"
import { expenses } from "../../mocks/expenses"

test('get expenses', async () => {
    const insertData = expenses;

    const resultCreate = await client.post({
        url: "/expenses",
        data: insertData,
    })

    const resultGet = await client.get({
        url: "/expenses/" + resultCreate.data.data._id
    })

    expect(resultGet.data.data).toEqual(expect.objectContaining(insertData));
});