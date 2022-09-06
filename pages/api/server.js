import { Server } from '@fabricio-191/valve-server-query';

export default async function handler(req, res) {
  switch (req.method) {
    case "GET": {
      const { ip, port } = req.query;

      try {
        const server = await Server({
          ip,
          port: parseInt(port, 10),
          timeout: 3000,
        })

        const info = await server.getInfo();

        const { address, name, map, players } = info;

        res.statusCode = 200;
        res.send({ address, name, map, players });
      } catch (e) {
        console.error('Server fetch error: ', e);
        res.statusCode = 500;
        res.send({ error: e.message });
      }
    }
  }
}
