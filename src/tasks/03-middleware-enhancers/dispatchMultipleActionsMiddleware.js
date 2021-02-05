const dispatchMultipleActionsMiddleware = storeAPI => next => action => {
    if (Array.isArray(action)){
      action.forEach(action => storeAPI.dispatch(action));
      return action.length;
    } else {
      return next(action);
    }
}

export default dispatchMultipleActionsMiddleware;
