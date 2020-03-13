// import axios from 'axios';
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
    items:[
        {stt: "1", user_name: "leanh123", full_name: "Lê Tuấn Anh", email: "leanh@gmail.com", status_service: "Chưa đăng ký", expiration_date: "_",activation_state: "Bật" , service_extension: "Gia hạn" },
        {stt: "2", user_name: "huynhhau1234", full_name: "Huỳnh Văn Hậu", email: "huynhhau55@gmail.com", status_service: "Đã đăng ký", expiration_date: "30/04/2020", activation_state: "Bật", service_extension: "Gia hạn" }
    ],
    selectedvariant: "warning",
    hasData: true,
    totalRows: 1,
    perPage:10,
    service: {
        UserName:"",
        FullName:"",
        Email:""
    }
}

const getters = {}

 const actions = {
//     async getListServiceRegister(context) {
//         return await axios.get(userAPI, { });
//     }
 }

const mutations = {
    // updateObj(state, field_value) {
    //     Object.assign(state.obj, {
    //         [field_value[0]]: field_value[1]
    //     });
    // }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
    
}