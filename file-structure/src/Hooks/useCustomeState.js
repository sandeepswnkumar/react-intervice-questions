function useCustomeState(initalValue){
    let state = initalValue;
    function setState(newValue){
        console.log("newValue",newValue)
        state = newValue
        console.log("state",state)
    }
    console.log("state",state)
    return [state, setState]
}

export default useCustomeState;