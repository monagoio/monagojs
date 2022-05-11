import { config } from "..";
import { Project } from "../admin/project/project";

const projectTest = new Project({
    hostUri: config.MONAGO_URI,
    authorization: "Bearer",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImliaWRhdGhvaWxsYWhAZ21haWwuY29tIiwiZXhwaXJlZCI6IjIwMjItMDUtMTFUMDk6MzI6NTQuNTg3MDUyMjI5KzAxOjAwIiwib3JnYW5pemF0aW9uX2lkIjowLCJ1c2VyX2lkIjoyM30.0ER1KT_wCAluxKMixzAKY8n7Wth20udVHcsdaIbMvVU"
});

test('create project', async () => {
    const resultCreate = await projectTest.createProject({
        name: "test",
        description: "lala"
    })

    await projectTest.deleteProject({
        id: resultCreate.data.data.id
    })

    expect(resultCreate.status).toBe(200);
});

test('create project with same name', async () => {
    await projectTest.createProject({
        name: "test",
        description: "lala"
    })

    const sameProjectName = await projectTest.createProject({
        name: "test",
        description: "lala"
    })

    expect(sameProjectName.status).toBe(409);
});
