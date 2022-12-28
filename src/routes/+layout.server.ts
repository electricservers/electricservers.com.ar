import Gamedig from 'gamedig'
import type { ServerInfo } from 'src/types/serverInfo'

import { serverList } from '../servers/serversList'
import type { LayoutServerLoad } from './$types'

export const load = (async () => {
  let infoList: ServerInfo[] = []
  for await (const server of serverList) {
    await Gamedig.query({
      type: 'tf2',
      host: server.ip,
      port: server.port,
    }).then(state => {
      infoList.push({
        connect: state.connect,
        name: state.name,
        players: state.players.length,
        maxplayers: state.maxplayers,
        map: state.map,
      })
    })
  }
  return {
    list: infoList,
  }
}) satisfies LayoutServerLoad
