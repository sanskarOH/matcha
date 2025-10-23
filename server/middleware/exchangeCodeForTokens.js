import { oauth2Client } from '../loader/auth.loader.js';
import { saveTokens,getTokens} from '../utils/tokenHandler.js';

export const exchangeCodeForTokens = async (code, userId) => {
  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);
  saveTokens(userId, tokens);
  return tokens;
};
