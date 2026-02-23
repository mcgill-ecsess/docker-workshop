# Activity 1: Dockerize a VueJS app

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

The local server should be running at "localhost:5173"

## Docker workshop hints:
- The app uses nodejs version 24 or later
- You should use a different directory than root (hint: WORKDIR)
- Vite must listen on `0.0.0.0` to be reachable from the host (hint: `--host`)
- Build & run:
```sh
# To build the image:
docker build -t docker-ws:vue-a1 .

# To run the container (port mapping + --host 0.0.0.0 in Dockerfile):
docker run -p 5173:5173 docker-ws:vue-a1
```