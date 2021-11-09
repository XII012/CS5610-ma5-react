const defaultCount = 0;

export default function clickReducer (
    count, action
) {
    if (count === undefined) {
        return defaultCount;
    }

    if (action.type === 'boardClick') {
        if (action.symbol === 'w')  {
            count += 1;
        } else if (action.symbol === 'b') {
            count -=1;
        }
        return count;
    }

    return count;
}