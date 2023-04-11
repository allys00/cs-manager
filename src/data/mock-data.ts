import WillPhoto from "../assets/players/will-player.png";
import CristianPhoto from "../assets/players/cristian-player.png";
import FelipePhoto from "../assets/players/felipe-player.png";
import SergioPhoto from "../assets/players/sergio-player.png";
import JuhPhoto from "../assets/players/juh-player.png";

import BrazilFlag from "../assets/flags/brazil.svg";

export const NATIONALITIES = {
  brazil: {
    name: "Brasil",
    flagImage: BrazilFlag,
  },
};

export const PLAYERS = [
  {
    id: 4,
    name: "Qué ôTa",
    photo: JuhPhoto,
    nationality: NATIONALITIES.brazil,
    favoriteGun: "M4A1",
    attributes: [
      {
        name: "Anubis",
        shortName: "ANU",
        value: 99,
      },
      {
        name: "Ancient",
        shortName: "ANC",
        value: 99,
      },
      {
        name: "Inferno",
        value: 99,
        shortName: "INF",
      },
      {
        name: "Mirage",
        value: 99,
        shortName: "MIR",
      },
      {
        name: "Nuke",
        value: 99,
        shortName: "NUK",
      },
      {
        name: "Overpass",
        value: 99,
        shortName: "OVE",
      },
      {
        name: "Vertigo",
        shortName: "VER",
        value: 99,
      },
    ],
  },
  {
    id: 1,
    name: "W1llz1m",
    photo: WillPhoto,
    nationality: NATIONALITIES.brazil,
    favoriteGun: "MAC 10",
    attributes: [
      {
        name: "Anubis",
        shortName: "ANU",
        value: 97,
      },
      {
        name: "Ancient",
        shortName: "ANC",
        value: 93,
      },
      {
        name: "Inferno",
        value: 94,
        shortName: "INF",
      },
      {
        name: "Mirage",
        value: 96,
        shortName: "MIR",
      },
      {
        name: "Nuke",
        value: 91,
        shortName: "NUK",
      },
      {
        name: "Overpass",
        value: 97,
        shortName: "OVE",
      },
      {
        name: "Vertigo",
        shortName: "VER",
        value: 97,
      },
    ],
  },
  {
    id: 5,
    name: "Cortela",
    photo: CristianPhoto,
    nationality: NATIONALITIES.brazil,
    favoriteGun: "UMP",
    attributes: [
      {
        name: "Anubis",
        shortName: "ANU",
        value: 97,
      },
      {
        name: "Ancient",
        shortName: "ANC",
        value: 93,
      },
      {
        name: "Inferno",
        value: 94,
        shortName: "INF",
      },
      {
        name: "Mirage",
        value: 96,
        shortName: "MIR",
      },
      {
        name: "Nuke",
        value: 91,
        shortName: "NUK",
      },
      {
        name: "Overpass",
        value: 97,
        shortName: "OVE",
      },
      {
        name: "Vertigo",
        shortName: "VER",
        value: 97,
      },
    ],
  },
  {
    id: 2,
    name: "Felipe",
    photo: FelipePhoto,
    nationality: NATIONALITIES.brazil,
    favoriteGun: "AK 47",
    attributes: [
      {
        name: "Anubis",
        shortName: "ANU",
        value: 97,
      },
      {
        name: "Ancient",
        shortName: "ANC",
        value: 93,
      },
      {
        name: "Inferno",
        value: 94,
        shortName: "INF",
      },
      {
        name: "Mirage",
        value: 96,
        shortName: "MIR",
      },
      {
        name: "Nuke",
        value: 91,
        shortName: "NUK",
      },
      {
        name: "Overpass",
        value: 97,
        shortName: "OVE",
      },
      {
        name: "Vertigo",
        shortName: "VER",
        value: 97,
      },
    ],
  },
  {
    id: 3,
    name: "Deputado",
    photo: SergioPhoto,
    nationality: NATIONALITIES.brazil,
    favoriteGun: "MP7",
    attributes: [
      {
        name: "Anubis",
        shortName: "ANU",
        value: 97,
      },
      {
        name: "Ancient",
        shortName: "ANC",
        value: 93,
      },
      {
        name: "Inferno",
        value: 94,
        shortName: "INF",
      },
      {
        name: "Mirage",
        value: 96,
        shortName: "MIR",
      },
      {
        name: "Nuke",
        value: 91,
        shortName: "NUK",
      },
      {
        name: "Overpass",
        value: 97,
        shortName: "OVE",
      },
      {
        name: "Vertigo",
        shortName: "VER",
        value: 97,
      },
    ],
  },
];

export type Player = typeof PLAYERS[0];
