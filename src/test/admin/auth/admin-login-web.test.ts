import "../../config/global-config"
import { admin } from "../../config/admin"

test('admin login web', async () => {
    const resultLogin = await admin.login()

    expect(resultLogin.status).toBe(200);
});