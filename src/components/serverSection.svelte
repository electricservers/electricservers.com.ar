<script lang="ts">
  import type { ServerInfo } from 'src/types/serverInfo'
  import Server from './server.svelte'

  export let bgImage: string
  export let logo: string
  export let text: string
  export let serverList: ServerInfo[]
</script>

<div class="overflow-hidden h-max skew-y-2 my-5">
  <img src={bgImage} class="absolute min-h-full max-h-[200%] max-w-none min-w-full left-[50%] top-[50%] translate-x-[-50%] translate-y-[-30%]" alt="" />
  <div class="flex flex-col w-full h-full my-5">
    <div class="-skew-y-2 flex gap-4 place-items-center m-auto w-max py-8">
      <img src={logo} width="100" alt="logo" />
      <h1 class="font-bold text-2xl sm:text-3xl md:text-5xl text-white text-shadow">{text}</h1>
    </div>
    <div class="-skew-y-2 pb-24">
      {#each serverList as server}
        <div class="my-2 max-w-[80vw] rounded-2xl m-auto bg-yellow-500/90">
          <Server serverInfo={server} loading={false} />
        </div>
      {/each}
    </div>
  </div>
</div>
