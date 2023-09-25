import { Elysia, t} from "elysia";
import { cookie } from "@elysiajs/cookie";

import { PrismaClient } from "@prisma/client";

const app = new Elysia()
    .use(cookie())
    .group("/posts",
        inner =>{
            inner.get("/", ({query}) => `get post with id: ${query.q} or get all user posts`);
            inner.guard({ params: t.Object({ message: t.String(),  title: t.String(), categories: t.Array(t.String())  }) },
                post => post.post("/", (params)=>{ return "create post" } ) );
            return inner;
    })
    .group("/user", app =>{
        app.get("/", ({params}) => `user details`);
        app.get("/:id", ({params}) => `user detail with id: ${params.id}`);
        app.guard({ params: t.Object({ name: t.String(), surname: t.String(), email: t.String() }) },
            post => post.post("/", (params)=>{ return "create user" } ) );
        return app;
    }).get("/",  ()=>{
        return "get all posts"
    })
    .listen(3000, (server)=> {
      console.log(`🦊 Elysia is running at ${server.hostname}:${server.port}`);
});
