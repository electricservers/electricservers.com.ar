import { queryGameServerInfo } from 'steam-server-query'
import type { ServerInfo } from '../types/serverInfo'

import { serverList } from '../servers/serversList'
import type { LayoutServerLoad } from './$types'

export const load = (async () => {
  let infoList: (ServerInfo | undefined)[] = []
  for await (const server of serverList) {
    try {
      const svInfo = await queryGameServerInfo(`${server.ip}:${server.port}`)
      infoList.push({
        connect: `${server.ip}:${server.port}`,
        name: svInfo.name,
        map: svInfo.map,
        maxplayers: svInfo.maxPlayers,
        players: svInfo.players,
        success: true,
      })
    } catch {
      infoList.push(undefined)
    }
  }
  return {
    serverList: infoList,
  }
}) satisfies LayoutServerLoad
