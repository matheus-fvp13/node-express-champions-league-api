import { ClubModel } from "../models/club-model";
import fs from "fs/promises"

const database: ClubModel[] = [
    { id: 1, name: 'Club A' },
    { id: 2, name: 'Club B' },
    { id: 3, name: 'Club C' }
];

export const findAllClubs = async (): Promise<ClubModel[]> => {
    const data = await fs.readFile("./src/data/clubs.json", "utf-8");
    const clubs: ClubModel[] = JSON.parse(data);
    return clubs;
};