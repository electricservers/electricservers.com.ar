import type { ServerInfo } from 'src/types/serverInfo'
import pkg from '@fabricio-191/valve-server-query'
const { Server } = pkg;

import { serverList } from '../servers/serversList'
import type { LayoutServerLoad } from './$types'

export const load = (async () => {
  let infoList: ServerInfo[] = []
  for (const server of serverList) {
    const query = await Server({
      ip: server.ip,
      port: server.port,
    })
    const svInfo = await query.getInfo()
    infoList.push({
      connect: svInfo.address + ':' + svInfo.port,
      name: svInfo.name,
      map: svInfo.map,
      maxplayers: svInfo.players.max,
      players: svInfo.players.online,
    })
  }
  return {
    serverList: infoList,
  }
}) satisfies LayoutServerLoad
