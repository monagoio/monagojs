import "../../config/global-config"
import { client } from "../../config/client"

test('client register', async () => {
    const resultCreate = await client.register({ name: "monago", email: "ibidathoillah@gmail.com" , password: "pass" })
    expect(resultCreate.status).toBe(409);
});

test('client register random account', async () => {
    const resultCreate = await client.register({ name: "monago", email: Math.floor(Math.random()*(Math.pow(10,10)))+"@gmail.com" , password: "pass" })
    expect(resultCreate.status).toBe(200);
});