import "../../config/global-config"
import { client } from "../../config/client"
import { expenses } from "../../mocks/expenses"

test('delete expenses', async () => {
    const resultCreate = await client.post({
        url: "/expenses",
        data: expenses
    })

    const resultDelete = await client.delete({
        url: "/expenses/" + resultCreate.data.data._id
    })

    expect(resultDelete.status).toBe(200);
});

