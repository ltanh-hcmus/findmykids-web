import axios from 'axios';
// const jwt = require('jwt-decode');
import { authAPI } from "@/store/modules/api";

// OFFLINE "6LfrwNEUAAAAAJHcipukpxMxlsSKrlotSv37V_I1"
// ONLINE "6Lco3dQUAAAAAKaK0-lubZia99rc2AEgE_3_a6As"
const state = {
    obj: {
        ID: "",
        UserName: "",
        PassWord: "",
        recaptchaToken: ""
    },
    captchaChecked: false,
    siteKey: "6LfrwNEUAAAAAJHcipukpxMxlsSKrlotSv37V_I1"
}

const getters = {
    isCaptcha(state) {
        return state.captchaChecked;
    }
}

const actions = {
    async login(context) {
        const auth = await axios.post(`${authAPI}/login`, { ...context.state.obj });
        if (auth.data.authenticated) {
            axios.defaults.headers['x-access-token'] = auth.data.accessToken;
            localStorage.setItem('user-token', JSON.stringify(auth.data));
            context.commit("updateIsLogin", true);
        }

        return auth.data.authenticated;
    },
    // async logout(context) {
    //     localStorage.removeItem('user-token');
    //     context.commit("updateIsLogin", false);
    //     // await axios.post(`${authAPI}/logout`, { ...user id })
    // },
    // async reNewToken({ state }) {
    //     if (state.isLogin) {
    //         const userToken = JSON.parse(localStorage.getItem('user-token').refreshToken);

    //         if (jwt(userToken.accessToken).exp - 240 <= (Date.now() / 1000).toFixed(0)) {
    //             const response = await axios.post(`${authAPI}/renew-token`, { ...userToken.refreshToken });
    //             userToken.accessToken = response.data.accessToken;
    //             localStorage.setItem("user-token", JSON.stringify(userToken));
    //             axios.defaults.headers['x-access-token'] = userToken.accessToken;
    //         }
    //     }
    // }
}

const mutations = {
    // updateUser: (state, user) => {
    //     state.user = user;
    // },
    // updateReCaptchaToken: (state, captcha) => {
    //     state.recaptchaToken = captcha;
    // },
    // updateCaptchaChecked: (state, checked) => {
    //     state.captchaChecked = checked;
    // },
    // updateIsLogin: (state, logged) => {
    //     state.isLogin = logged;
    // }
    updateObj(state, field_value) {
        Object.assign(state.obj, {
            [field_value[0]]: field_value[1]
        });
    },
    updateReCaptchaToken: (state, captcha) => {
        state.obj.recaptchaToken = captcha;
    },
    updateCaptchaChecked: (state, checked) => {
        state.captchaChecked = checked;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}