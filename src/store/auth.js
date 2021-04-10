export default {
    namespaced: true,
    state: {
        token: null
    },
    mutation:{
        setToken(state, token){
            state.token = token;
        }
    },
    action:{
        
    }
}