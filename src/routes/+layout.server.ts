import { Server } from '@fabricio-191/valve-server-query'
import { serverList } from '../servers/serversList'
import type { LayoutServerLoad } from './$types'

export const load = (async () => {
  let infoList: Server.Info[] = []
  for await (const server of serverList) {
    const sv = await Server({ ip: server.ip, port: server.port, timeout: 3000 })
    const svInfo = await sv.getInfo()
    infoList.push(svInfo)
  }
  return {
    list: infoList,
  }
}) satisfies LayoutServerLoad

// Hack to handle bigint deserialization
;(BigInt.prototype as any).toJSON = function () {
  return this.toString()
}
