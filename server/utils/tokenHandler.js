let tokens = {};


export const saveTokens = (userId, tokenData) => {
    tokens[userId] = tokenData;
};

export const getTokens = (userId) => {
    return tokens[userId];
};