import { ReleaseResponse } from "../models/api.models/release.response";
import { faker } from '@faker-js/faker';


export class DataHelper {
    static async getRandomRelease(releases: ReleaseResponse[]): Promise<ReleaseResponse> {
        const randomRelease = Math.floor(Math.random() * releases.length)
        return releases[randomRelease]
    }


    static getInvalidReleaseID(): (unknown)[] {
        return [
            faker.number.int({min: -100, max: -1}),
            faker.number.float({min: 1.1, max: 100.9, fractionDigits: 1}),
            0,
            null,
            undefined,
            faker.string.alpha({length: 5}),
            faker.string.alphanumeric({length: 10}),
            faker.string.symbol({min: 1, max: 5}),
        ];
    };
}

