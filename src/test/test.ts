import { config } from "..";
import { Project } from "../admin/project/project";

const monago = new Project({
    hostUri: config.MONAGO_URI,
    authorization: "Bearer",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImliaWRhdGhvaWxsYWhAZ21haWwuY29tIiwiZXhwaXJlZCI6IjIwMjItMDUtMTFUMDk6MzI6NTQuNTg3MDUyMjI5KzAxOjAwIiwib3JnYW5pemF0aW9uX2lkIjowLCJ1c2VyX2lkIjoyM30.0ER1KT_wCAluxKMixzAKY8n7Wth20udVHcsdaIbMvVU"
});


(async()=>{
    monago.createProject({
        name: "test",
        description: "lala"
    }).catch(e=> {
        console.log(e)
    }).then(value => {
        console.log(value)
    })
})()
