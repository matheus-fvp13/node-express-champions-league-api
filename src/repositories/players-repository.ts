import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

const database: PlayerModel[] = [
    {
        "id": 1,
        "name": "David Beckham",
        "club": "Retired",
        "nationality": "England",
        "position": "MidFielder",
        "statistics": {
            "Overall": 85,
            "Pace": 76,
            "Shooting": 82,
            "Passing": 90,
            "Dribbling": 84,
            "Defending": 70,
            "Physical": 72
        }
    },
    {
        "id": 2,
        "name": "Lionel Messi",
        "club": "Paris Saint-Germain",
        "nationality": "Argentina",
        "position": "Forward",
        "statistics": {
            "Overall": 93,
            "Pace": 85,
            "Shooting": 92,
            "Passing": 91,
            "Dribbling": 95,
            "Defending": 38,
            "Physical": 65
        }
    },
    {
        "id": 3,
        "name": "Cristiano Ronaldo",
        "club": "Al Nassr",
        "nationality": "Portugal",
        "position": "Forward",
        "statistics": {
            "Overall": 91,
            "Pace": 89,
            "Shooting": 93,
            "Passing": 81,
            "Dribbling": 88,
            "Defending": 35,
            "Physical": 77
        }
    },
    {
        "id": 4,
        "name": "Neymar Jr",
        "club": "Paris Saint-Germain",
        "nationality": "Brazil",
        "position": "Forward",
        "statistics": {
            "Overall": 91,
            "Pace": 91,
            "Shooting": 84,
            "Passing": 86,
            "Dribbling": 94,
            "Defending": 32,
            "Physical": 58
        }
    },
    {
        "id": 5,
        "name": "Kevin De Bruyne",
        "club": "Manchester City",
        "nationality": "Belgium",
        "position": "MidFielder",
        "statistics": {
            "Overall": 91,
            "Pace": 76,
            "Shooting": 86,
            "Passing": 93,
            "Dribbling": 88,
            "Defending": 64,
            "Physical": 78
        }
    },
    {
        "id": 6,
        "name": "Kylian Mbappé",
        "club": "Paris Saint-Germain",
        "nationality": "France",
        "position": "Forward",
        "statistics": {
            "Overall": 91,
            "Pace": 97,
            "Shooting": 86,
            "Passing": 80,
            "Dribbling": 92,
            "Defending": 39,
            "Physical": 77
        }
    },
    {
        "id": 7,
        "name": "Robert Lewandowski",
        "club": "FC Barcelona",
        "nationality": "Poland",
        "position": "Forward",
        "statistics": {
            "Overall": 92,
            "Pace": 78,
            "Shooting": 92,
            "Passing": 79,
            "Dribbling": 86,
            "Defending": 44,
            "Physical": 82
        }
    },
    {
        "id": 8,
        "name": "Mohamed Salah",
        "club": "Liverpool",
        "nationality": "Egypt",
        "position": "Forward",
        "statistics": {
            "Overall": 90,
            "Pace": 93,
            "Shooting": 87,
            "Passing": 81,
            "Dribbling": 90,
            "Defending": 45,
            "Physical": 75
        }
    },
    {
        "id": 9,
        "name": "Virgil van Dijk",
        "club": "Liverpool",
        "nationality": "Netherlands",
        "position": "Defender",
        "statistics": {
            "Overall": 90,
            "Pace": 76,
            "Shooting": 60,
            "Passing": 71,
            "Dribbling": 72,
            "Defending": 91,
            "Physical": 86
        }
    },
    {
        "id": 10,
        "name": "Sergio Ramos",
        "club": "Sevilla",
        "nationality": "Spain",
        "position": "Defender",
        "statistics": {
            "Overall": 88,
            "Pace": 70,
            "Shooting": 62,
            "Passing": 71,
            "Dribbling": 70,
            "Defending": 88,
            "Physical": 84
        }
    },
    {
        "id": 11,
        "name": "Luka Modric",
        "club": "Real Madrid",
        "nationality": "Croatia",
        "position": "MidFielder",
        "statistics": {
            "Overall": 89,
            "Pace": 75,
            "Shooting": 76,
            "Passing": 90,
            "Dribbling": 89,
            "Defending": 71,
            "Physical": 67
        }
    },
    {
        "id": 12,
        "name": "Toni Kroos",
        "club": "Real Madrid",
        "nationality": "Germany",
        "position": "MidFielder",
        "statistics": {
            "Overall": 88,
            "Pace": 53,
            "Shooting": 81,
            "Passing": 91,
            "Dribbling": 81,
            "Defending": 70,
            "Physical": 68
        }
    },
    {
        "id": 13,
        "name": "Karim Benzema",
        "club": "Al-Ittihad",
        "nationality": "France",
        "position": "Forward",
        "statistics": {
            "Overall": 91,
            "Pace": 80,
            "Shooting": 87,
            "Passing": 83,
            "Dribbling": 88,
            "Defending": 42,
            "Physical": 78
        }
    },
    {
        "id": 14,
        "name": "Harry Kane",
        "club": "Tottenham Hotspur",
        "nationality": "England",
        "position": "Forward",
        "statistics": {
            "Overall": 89,
            "Pace": 70,
            "Shooting": 91,
            "Passing": 83,
            "Dribbling": 82,
            "Defending": 47,
            "Physical": 83
        }
    },
    {
        "id": 15,
        "name": "Erling Haaland",
        "club": "Manchester City",
        "nationality": "Norway",
        "position": "Forward",
        "statistics": {
            "Overall": 88,
            "Pace": 89,
            "Shooting": 91,
            "Passing": 65,
            "Dribbling": 80,
            "Defending": 45,
            "Physical": 88
        }
    },
    {
        "id": 16,
        "name": "N'Golo Kanté",
        "club": "Al-Ittihad",
        "nationality": "France",
        "position": "MidFielder",
        "statistics": {
            "Overall": 89,
            "Pace": 78,
            "Shooting": 66,
            "Passing": 77,
            "Dribbling": 81,
            "Defending": 87,
            "Physical": 82
        }
    },
    {
        "id": 17,
        "name": "Joshua Kimmich",
        "club": "Bayern Munich",
        "nationality": "Germany",
        "position": "MidFielder",
        "statistics": {
            "Overall": 89,
            "Pace": 70,
            "Shooting": 72,
            "Passing": 86,
            "Dribbling": 84,
            "Defending": 83,
            "Physical": 76
        }
    },
    {
        "id": 18,
        "name": "Sadio Mane",
        "club": "Al-Nassr",
        "nationality": "Senegal",
        "position": "Forward",
        "statistics": {
            "Overall": 89,
            "Pace": 94,
            "Shooting": 83,
            "Passing": 80,
            "Dribbling": 88,
            "Defending": 44,
            "Physical": 76
        }
    },
    {
        "id": 19,
        "name": "Vinicius Junior",
        "club": "Real Madrid",
        "nationality": "Brazil",
        "position": "Forward",
        "statistics": {
            "Overall": 87,
            "Pace": 95,
            "Shooting": 79,
            "Passing": 78,
            "Dribbling": 90,
            "Defending": 30,
            "Physical": 70
        }
    },
    {
        "id": 20,
        "name": "Frenkie de Jong",
        "club": "FC Barcelona",
        "nationality": "Netherlands",
        "position": "MidFielder",
        "statistics": {
            "Overall": 87,
            "Pace": 81,
            "Shooting": 68,
            "Passing": 86,
            "Dribbling": 89,
            "Defending": 77,
            "Physical": 75
        }
    }
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find(player => player.id === id);
};

export const insertPlayer = async (player: PlayerModel) => {
    database.push(player);
};

export const deletePlayerById = async (id: number) => {
    const index = database.findIndex(player => player.id === id);
    if(index !== -1) {
        database.splice(index, 1);
    }
};

export const findAndModifyPlayer = async (
    id: number, 
    statistics: StatisticsModel
): Promise<PlayerModel> => {
    const playerIndex = database.findIndex(player => player.id === id);
    if(playerIndex !== -1) {
        database[playerIndex].statistics = statistics;
    }
    return database[playerIndex];
};