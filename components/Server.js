import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

const Server = ({ ip, port }) => {
  const [loading, setLoading] = useState(true);
  const [serverInfo, setServerInfo] = useState(null);

  useEffect(() => {
    async function getServerInfo() {
      setLoading(true);
      try {
        const { data: result } = await axios({
          method: "GET",
          url: "/api/server",
          params: {
            ip,
            port,
          },
        });

        setServerInfo(result);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setServerInfo(null);
      }
    }

    getServerInfo();
  }, []);

  const playerCountClass = `font-bold ${!!serverInfo ? (serverInfo.players.online - serverInfo.players.max === 0 ? 'text-red-800' : 'text-green-900') : 'text-gray-600'}`;
  const serverStatusColor = `${!!serverInfo ? "bg-green-600" : "bg-red-600"}`;
  const connectButtonColor = `${!!serverInfo ? "bg-green-600 hover:bg-green-700" : "bg-gray-500"} transition-colors`;
  const cursor = `${!!serverInfo ? "cursor-pointer" : "cursor-not-allowed"}`;

  return (
    <div className={`flex px-4 ${loading ? 'animate-pulse' : ''}`}>

      {/* Status Icon */}
      <div className="w-5 flex">
        <span className={`relative flex my-auto rounded-full h-3 w-3 ${serverStatusColor}`} />
      </div>

      <div className="items-center grid grid-cols-3 sm:grid-cols-5 w-full">

        {/* Hostname */}
        <div className="col-span-2 break-before-auto">
          <p className="text-black font-semibold">
            {!!serverInfo ? serverInfo.name : "Estado Desconocido"}
          </p>
        </div>

        {/* Player Count */}
        <div className="col-start-3 text-center w-max m-auto">
          <p className={playerCountClass}>
            {`${!!serverInfo ? serverInfo.players.online - serverInfo.players.bots : -1}/${!!serverInfo ? serverInfo.players.max : -1}`}
          </p>
        </div>

        {/* Map */}
        <div>
          <p className="text-slate-800 font-medium italic w-max">
            {!!serverInfo ? serverInfo.map : "Mapa desconocido"}
          </p>
        </div>

        {/* Connect Button */}
        <div className="text-center mx-8 self-end">
          <Link href={!!serverInfo ? `steam://connect/${ip}:${port}` : "#"}>
            <div className={`${connectButtonColor} ${cursor} rounded-xl p-1 m-2 invisible sm:visible min-w-min  font-medium`}>
              ¡Jugar!
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Server;
