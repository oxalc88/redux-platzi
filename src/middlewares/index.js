export const logger = (store) => (next) => (action) => {
    next(action);
};

export const featuring = (store) => (next) => (actionInfo) => {
    const updatedActionInfo = {
        ...actionInfo,
        action: { ...actionInfo.action, payload: featured },
    }
    next(updatedActionInfo);
}