import { Elysia, t} from "elysia";

const app = new Elysia()
    .group("/search", { query: t.Object({ q: t.String() }) },
        inner =>{
            inner.get("/", ({query}) => `qwery: ${query.q}`);
            inner.get("/movie", ({query}) => `qwery: ${query.q}`);
            inner.get("/tv", ({query}) => `qwery: ${query.q}`);
            inner.get("/person", ({query}) => `qwery: ${query.q}`);
            inner.get("/company", ({query}) => `qwery: ${query.q}`);
            inner.get("/episode", ({query}) => `qwery: ${query.q}`);
            inner.get("/review", ({query}) => `qwery: ${query.q}`);
            inner.get("/award", ({query}) => ` qwery: ${query.q}`);
            return inner;
    })
    .group("/title/:id", { params: t.Object({ id: t.String() }) }, app =>{
        app.get("/", ({params}) => `id: ${params.id}`)
        app.get("/episodes", ({params}) => `id: ${params.id}`)
        app.get("/casts", ({params}) => `id: ${params.id}`)
        app.get("/awards", ({params}) => `id: ${params.id}`)
        return app;
    })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
