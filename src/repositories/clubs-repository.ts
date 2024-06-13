import { ClubModel } from "../models/club-model";

const database: ClubModel[] = [
    { id: 1, name: 'Club A' },
    { id: 2, name: 'Club B' },
    { id: 3, name: 'Club C' }
];

export const findAllClubs = async (): Promise<ClubModel[]> => {
    return database;
};