<script lang="ts">
  export let link: string
  export let bgImage: string
  export let logo: string
  export let text: string
</script>

<a href={link} rel="noreferrer" target="_blank">
  <div class="overflow-hidden group h-[200px] skew-y-2 my-5">
    <img src={bgImage} class="absolute transition w-screen scale-105 group-hover:scale-100" alt="" />
    <div class="flex w-full h-full place-items-center group-hover:backdrop-brightness-50 transition">
      <div class="relative -skew-y-2 flex gap-4 m-auto w-max group-hover:scale-110 transition place-items-center">
        <img src={logo} width="100" alt="logo" />
        <h1 class="font-bold text-2xl sm:text-3xl md:text-5xl text-white text-shadow">
          {text}
        </h1>
      </div>
    </div>
  </div>
</a>
