import OAuth from 'oauth-1.0a';
import { Environment } from '../env';
import * as crypto from 'crypto';

export async function generateOAuthHeader(method: string, url: string) {
    const oauth = new OAuth({
        consumer: {
            key: `${Environment.CONSUMER_KEY}`,
            secret: `${Environment.CONSUMER_SECRET}`
        },

        signature_method: 'HMAC-SHA1',
        hash_function(baseString, key) {
            return crypto.createHmac('sha1', key).update(baseString).digest('base64');
        },
    });

    const requestData = {
        url,
        method,
    };

    const token = {
        key: `${Environment.OAUTH_TOKEN}`,
        secret: `${Environment.OAUTH_TOKEN_SECRET}`,
    }

    const authHeader = oauth.toHeader(oauth.authorize(requestData, token))
    return authHeader['Authorization'];
}