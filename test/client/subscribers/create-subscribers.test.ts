import "../../config/global-config"
import { client } from "../../config/client"
import { subscribers } from "../../mocks/subscribers"

test('create subscribers', async () => {
    const resultCreate = await client.post({
        url: "/subscriber",
        data: subscribers
    }).catch(console.log).then(data => data)
    
    expect(resultCreate?.status).toBe(200);
});