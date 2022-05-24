import "../../config/global-config"
import { client } from "../../config/client"

test('client register', async () => {
    const resultCreate = await client.register({ username: "monago", email: "ibidathoillah@gmail.com" , password: "pass" })
    expect(resultCreate.data).toBe(200);
});