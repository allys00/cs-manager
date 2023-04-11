import { Player } from "../../data/mock-data";
import "./PlayerCard.scss";

export const PlayerCard = ({ player }: { player: Player }) => {
  const getOverAll = () => {
    return (
      player.attributes.reduce((prev, curr) => prev + curr.value, 0) /
      player.attributes.length
    );
  };

  return (
    <div className="wrapper">
      <div className="fut-player-card">
        <div className="player-card-top">
          <div className="player-master-info">
            <div className="player-rating">
              <span>{getOverAll()}</span>
            </div>
            <div className="player-position">
              <span>{player.favoriteGun}</span>
            </div>
            <div className="player-nation">
              <img
                src={player.nationality.flagImage}
                alt={player.nationality.name}
                draggable="false"
              />
            </div>
          </div>
          <div className="player-picture">
            <img src={player.photo} alt={player.name} draggable="false" />
          </div>
        </div>
        <div className="player-card-bottom">
          <div className="player-info">
            <div className="player-name">
              <span>- {player.name}</span>
            </div>
            <div className="player-features">
              {player.attributes.map((attribute) => (
                <span key={attribute.name}>
                  <span className="player-feature-value">
                    {attribute.value}
                  </span>
                  <span className="player-feature-title uppercase">
                    {attribute.shortName}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
