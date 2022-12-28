export type ServerInfo = {
  /**
   * Server name
   */
  name: string

  /**
   * Players currently online
   */
  players: number

  /**
   * Maximum player capacity of the server
   */
  maxplayers: number

  /**
   * IP Address of the server to connect to
   */
  connect: string

  /**
   * Current server map
   */
  map: string
}
