import "../../config/global-config"
import { admin } from "../../config/admin"

test('admin register', async () => {
    const resultLogin = await admin.register({
        full_name: "ibid athoillah",
        username: "i.bidzer",
        email: "i.bidzer@gmail.com",
        password: "lala"
    })

    expect(resultLogin.status).toBe(200);
});