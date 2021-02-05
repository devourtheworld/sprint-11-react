export default function counterEvenOddEnhancer(originalCreateStore) {
    return function newCreateStore(rootReducer, preloadedState, enhancer) {
        const store = originalCreateStore(rootReducer, preloadedState, enhancer);
        function newGetState(){
            const {counter} = store.getState();
            let value = counter % 2 === 0 ? "even" : "odd";
            return{
                ...store.getState(),
                counterEvenOdd: value
            };
        }
        return {...store, getState: newGetState};
    }
}
