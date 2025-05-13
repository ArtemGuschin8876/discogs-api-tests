import { faker } from '@faker-js/faker';


export class UIDataHelper {

    static generateUnknownCredentials(): {username: string, password: string} {
        return {
            username: faker.internet.username(),
            password: faker.internet.password({length: 9})
        }
    };

    
}