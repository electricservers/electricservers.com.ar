<script lang="ts">
  import ServerSection from '../components/serverSection.svelte'
  import Section from '../components/section.svelte'
  import Header from '../components/header.svelte'
  import Footer from '../components/footer.svelte'
  import type { PageData } from './$types'

  export let data: PageData
</script>

<div class="select-none bg-[url('background/bg_main.jpg')]">
  <Header />

  <!-- Body -->
  <div class="mx-auto">
    <ServerSection serverList={data.serverList} logo="logo/tf2.svg" bgImage="background/bg_servers.png" text="Servidores" />
    <Section link="https://discord.gg/NYJDjWqp9U" bgImage="background/bg_suijin.jpg" logo="logo/discord.svg" text="Discord" />
    <Section link="http://168.181.184.179/" bgImage="background/bg_upward.jpg" logo="logo/sourcebans.png" text="Sourcebans" />
    <Section link="https://steamcommunity.com/groups/electricservers" bgImage="background/bg_hightower.jpg" logo="logo/steam.svg" text="Grupo de Steam" />
  </div>

  <Footer />
</div>
