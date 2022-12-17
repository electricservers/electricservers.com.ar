import ServerSection from "../components/ServerSection";
import Section from '../components/Section';
import Header from "../components/Header";
import Footer from '../components/Footer'

export default function body() {
  const serverList = [
    {
      ip: "45.235.99.105",
      port: 27034,
    },
    {
      ip: "45.235.99.105",
      port: 27038,
    },
    {
      ip: "45.235.99.105",
      port: 27039,
    },
    {
      ip: "45.235.99.105",
      port: 27040,
    },
    {
      ip: "177.54.148.107",
      port: 30050,
    },
  ];

  return (
    <>
      <div className="select-none bg-[url('../public/background/bg_main.jpg')]">
        <Header />

        {/* Body */}
        <div className="mx-auto">
          <ServerSection serverList={serverList} logo="/logo/tf2.svg" bgImage="/background/bg_servers.png" text="Servidores" />
          <Section link="https://electricservers.com.ar/discord" bgImage="/background/bg_suijin.jpg" logo="/logo/discord.svg" text="Discord" />
          <Section link="https://bans.electricservers.com.ar" bgImage="/background/bg_upward.jpg" logo="/logo/sourcebans.png" text="Sourcebans" />
          <Section link="https://electricservers.com.ar/grupo" bgImage="/background/bg_hightower.jpg" logo="/logo/steam.svg" text="Grupo de Steam" />
        </div>

        <Footer />
      </div>
    </>
  );
}
