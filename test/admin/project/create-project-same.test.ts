import "../../config/global-config"
import { admin } from "../../config/admin"

test('create project with same name', async () => {
    await admin.project.create({
        name: "test",
        description: "lala"
    })

    const sameProjectName = await admin.project.create({
        name: "test",
        description: "lala"
    })

    expect(sameProjectName.status).toBe(409);
});