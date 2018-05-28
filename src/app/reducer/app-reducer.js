const initState = {
    inputValue:0
};

const actionDefault = (state) =>state;

const testAdd = (state, action) => {
    const { payload } = action;
    return Object.assign({},state,{
        inputValue:payload
    })
};


const reducerFn = (state = initState, action) => {
    switch (action.type) {
        case "TEST:add":
            return testAdd(state, action);
        default:
            return actionDefault(state, action)
    }
};
export default reducerFn;