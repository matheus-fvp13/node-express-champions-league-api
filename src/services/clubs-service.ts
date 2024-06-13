import { findAllClubs } from '../repositories/clubs-repository';
import * as HttpResponse from '../utils/http-helper'

export const getClubsService = async () => {
    return await HttpResponse.ok(await findAllClubs());
};