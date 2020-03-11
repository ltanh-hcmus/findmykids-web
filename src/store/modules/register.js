import axios from 'axios';
import { userAPI } from "@/store/modules/api";

const state = {
    obj: {
        SiteKey: "6LfEGOAUAAAAAFQNok4HWw5XFWR0W7Yc4rN5HQLR",
        ID: "6bc678de-5c10-11ea-bc55-0242ac130003",
        UserName: "",
        PassWord: "",
        RePassWord: "",
        Email: "",
        Name: ""
    }
}

const getters = {}

const actions = {
    async add(context) {
        return await axios.post(userAPI, { ...context.state.obj });
    }
}

const mutations = {
    updateObj(state, field_value) {
        Object.assign(state.obj, {
            [field_value[0]]: field_value[1]
        });
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
    
}