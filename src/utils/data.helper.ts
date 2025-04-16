export class DataHelper {

    static getRandomReleaseId(): number {
        return Math.floor(Math.random() * 10000) + 1;
    }

}

