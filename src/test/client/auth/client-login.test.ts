import "../../config/global-config"
import { client } from "../../config/client"
import { expenses } from "../../mocks/expenses";

/**
 * @jest-environment jsdom
 */

test('it should success when normal client login', async () => {
    const resultLogin = await client.login({ email: "ibidathoillah@gmail.com", password: "pass" })
    expect(resultLogin.status).toBe(200);
});

test('it should success when client login and create expenses', async () => {
    await client.login({ email: "ibidathoillah@gmail.com", password: "pass" })
    const resultCreate = await client.post({
        url: "/expenses",
        data: expenses
    })
    expect(resultCreate.status).toBe(200);
});

test('it should unauthorized when create expenses without login', async () => {
    const resultCreate = await client.post({
        url: "/expenses",
        data: expenses
    })
    expect(resultCreate.status).toBe(401);
});
