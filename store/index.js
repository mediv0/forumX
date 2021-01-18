export const state = () => ({
    userData: {},
    isAuthorized: false,
});

export const mutations = {
    SET_USERDATA(state, data) {
        state.userData = data;
    },
    SET_AUTH_STATUS(state, status) {
        state.isAuthorized = status;
    },
};

export const getters = {
    GET_USERDATA(state) {
        return state.userData;
    },
    GET_AUTH_STATUS(state) {
        return state.isAuthorized;
    },
};
