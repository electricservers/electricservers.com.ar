<script lang="ts">
  import type { Server } from '@fabricio-191/valve-server-query'

  export let loading: boolean
  export let serverInfo: Server.Info

  const playerCountClass: string = `font-bold ${!!serverInfo ? (serverInfo.players.online - serverInfo.players.max === 0 ? 'text-red-800' : 'text-green-900') : 'text-gray-600'}`
  const serverStatusColor: string = `${!!serverInfo ? 'bg-green-600' : 'bg-red-600'}`
  const connectButtonColor: string = `${!!serverInfo ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-500'} transition-colors`
  const cursor: string = `${!!serverInfo ? 'cursor-pointer' : 'cursor-not-allowed'}`
</script>

<div class={`flex px-4 ${loading ? 'animate-pulse' : ''}`}>
  <!-- Status Icon -->
  <div class="w-5 flex">
    <span class={`relative flex my-auto rounded-full h-3 w-3 ${serverStatusColor}`} />
  </div>

  <div class="items-center grid grid-cols-3 sm:grid-cols-5 w-full">
    <!-- Hostname -->
    <div class="col-span-2 break-before-auto">
      <p class="text-black font-semibold">
        {!!serverInfo ? serverInfo.name : 'Estado desconocido'}
      </p>
    </div>

    <!-- Player Count -->
    <div class="col-start-3 text-center w-max m-auto">
      <p class={playerCountClass}>
        {`${!!serverInfo ? serverInfo.players.online - serverInfo.players.bots : -1}/${!!serverInfo ? serverInfo.players.max : -1}`}
      </p>
    </div>

    <!-- Map -->
    <div>
      <p class="text-slate-800 font-medium italic w-max">
        {!!serverInfo ? serverInfo.map : 'Mapa desconocido'}
      </p>
    </div>

    <!-- Connect Button -->
    <div class="text-center mx-8 self-end">
      <a href={!!serverInfo ? `steam://connect/${serverInfo.address}` : '#'}>
        <div class={`${connectButtonColor} ${cursor} rounded-xl p-1 m-2 invisible sm:visible min-w-min  font-medium`}>¡Jugar!</div>
      </a>
    </div>
  </div>
</div>
