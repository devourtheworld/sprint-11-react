const ignoreAddIfOddMiddleware = storeAPI => next => action => {
    if (action.type === "ADD_5"){
        if (storeAPI.getState().counter & 1){
            return {"type": "ADD_5"}
        } else {}
    }
    return next(action);
}

export default ignoreAddIfOddMiddleware;
