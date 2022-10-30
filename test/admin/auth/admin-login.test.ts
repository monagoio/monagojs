import "../../config/global-config"
import { admin } from "../../config/admin"

test('admin login', async () => {
    const resultLogin = await admin.login({
        email: "ibidathoillah96@gmail.com",
        password: "lala"
    })

    expect(resultLogin.status).toBe(200);
});