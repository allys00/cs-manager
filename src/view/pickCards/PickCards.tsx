import { useEffect, useState } from "react";
import { CollapsedCards } from "../../components/collapsedCards/CollapsedCards";
import { PlayerCard } from "../../components/playerCard/PlayerCard";
import { PLAYERS, Player } from "../../data/mock-data";

function PickCards() {
  const [allPlayers, setAllPlayers] = useState<Player[]>(
    [...PLAYERS, ...PLAYERS, ...PLAYERS].map((item, index) => ({
      ...item,
      id: index,
    }))
  );
  const [optionsPlayers, setOptionsPlayers] = useState<Player[]>([]);
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);

  useEffect(() => {
    nextOptions();
  }, []);

  const nextOptions = () => {
    const next = allPlayers.splice(0, 3);
    console.log(next);
    setAllPlayers(allPlayers);
    setOptionsPlayers(next);
  };

  const selectPlayer = (player: Player) => {
    setSelectedPlayers((prev) => [...prev, player]);
    nextOptions();
  };

  return (
    <section className="h-full">
      <h1 className="text-5xl text-center py-8">Escolha seu Jogador -</h1>
      <ul className="flex flex-row justify-around ">
        {optionsPlayers.map((player) => (
          <li
            onClick={() => selectPlayer(player)}
            key={player.id}
            className="flex hover:scale-110 cursor-pointer ease-in duration-200"
          >
            <PlayerCard player={player} />
          </li>
        ))}
      </ul>
      <h1 className="text-5xl py-8">Seu time -</h1>
      <CollapsedCards
        cards={selectedPlayers.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      />
    </section>
  );
}

export default PickCards;
