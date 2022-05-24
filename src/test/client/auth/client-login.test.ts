import "../../config/global-config"
import { client } from "../../config/client"

test('client login', async () => {
    const resultCreate = await client.login({ username: "monago", password: "pass" })
    expect(resultCreate.data).toBe(200);
});