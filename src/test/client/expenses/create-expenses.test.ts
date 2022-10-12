import "../../config/global-config"
import { client } from "../../config/client"
import { expenses } from "../../mocks/expenses"

/**
 * @jest-environment jsdom
 */
test('create expenses', async () => {
    const resultCreate = await client.post({
        url: "/expenses",
        data: expenses
    })
    
    expect(resultCreate.status).toBe(200);
});