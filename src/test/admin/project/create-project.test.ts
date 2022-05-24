import "../../config/global-config"
import { admin } from "../../config/admin"

test('create project', async () => {
    const resultCreate = await admin.project.create({
        name: "test",
        description: "lala"
    })

    await admin.project.delete({
        id: resultCreate.data.data.id
    })

    expect(resultCreate.status).toBe(200);
});