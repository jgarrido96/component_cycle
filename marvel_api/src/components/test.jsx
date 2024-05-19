import axios from 'axios';
import md5 from 'md5';

const PUBLIC_KEY = 'your_public_key';
const PRIVATE_KEY = 'your_private_key';
const BASE_URL = 'https://gateway.marvel.com/v1/public';

const getHash = (timestamp) => {
    return md5(`${timestamp}${PRIVATE_KEY}${PUBLIC_KEY}`);
};

export const fetchCharacter = async (characterName) => {
    const timestamp = new Date().getTime();
    const hash = getHash(timestamp);

    try {
        const response = await axios.get(`${BASE_URL}/characters`, {
            params: {
                name: characterName,
                apikey: PUBLIC_KEY,
                ts: timestamp,
                hash: hash,
            },
        });
        return response.data.data.results[0];
    } catch (error) {
        console.error("Error fetching character data:", error);
        return null;
    }
};