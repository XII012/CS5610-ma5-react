const defaultState = [
    ['w', 'w'],
    ['w', 'w'],
];

export default function gameReducer (state, action) {
        
    if (state === undefined) {
        return defaultState;
    }

    if (action.type === "boardClick") {
        const value = state[action.x][action.y];
        if (value === 'w') {
            state[action.x][action.y] = 'b';
        } else{
            state[action.x][action.y] = 'w';
        }
    }

    return [...state];
}
