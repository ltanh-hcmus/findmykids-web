import axios from 'axios';
// import { userAPI } from "@/store/modules/api";

const state = {
    fields: [
        { key: "stt" , label: "STT" },
        { key: "user_name", label: "Tên đăng nhập" },
        { key: "full_name", label: "Họ tên"},
        { key: "email", label: "Email" },
        { key: "status_service", label: "Trạng thái dịch vụ" },
        { key: "expiration_date", label: "Ngày hết hạn" },
        { key: "activation_state", label: "Trạng thái kích hoạt" },
        { key: "service_extension", label: "Gia hạn dịch vụ" }
    ],
    
    selectedvariant: "warning",
    hasData: true,
    totalRows: 1,
    perPage:10,
    service: {
        UserName:"",
        FullName:"",
        Email:""
    },
}

// const getters = {
//     getABV(state)
// }

const actions = {
    async getListServiceRegister(context){
        const results = await axios.get('https://api.myjson.com/bins/nwnp6');
        console.log("getListServiceRegister -> results", results)
        context.commit("updateItems", results.data );
        // context.dispatch('Abo', kskdjaldskj);
        //return results.data;
    }
    
    //async Abo(context) {

}


const mutations = {
    updateService(state, field_value) {
        Object.assign(state.service, {
            [field_value[0]]: field_value[1]
        });
    },
    updateItems(state, field_value){
        Object.assign(state.items, {
            [field_value[0]]: field_value[1]
        });
    },
    updateCurrentPage(state, value) {
        state.currentPage = value;
    }
    
}

export default {
    namespaced: true,
    state,
    //getters,
    actions,
    mutations,
    
}