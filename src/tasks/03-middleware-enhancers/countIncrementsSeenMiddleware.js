const countIncrementsSeenMiddleware = storeAPI => {
    let countIncrem = 0;
    return next => action => {
        if (action.type === "INCREMENT"){
            countIncrem++;
            next({type: "INCREMENTS_SEEN", count: countIncrem});
            return next(action);
        }
        return next(action);
    }
}

export default countIncrementsSeenMiddleware;
