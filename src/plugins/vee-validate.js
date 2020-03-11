// import { required, confirmed, length, email } from "vee-validate/dist/rules";
import { required } from "vee-validate/dist/rules";
// import { extend } from "vee-validate";
import { extend } from 'vee-validate';

extend("required", {
    ...required,
    message: "{_field_} bắt buộc nhập!"
});

extend('password',{
params: ['target'],
validate(value, {target}) {
    return value === target;
},
message: 'Mật khẩu không trùng'
});
// extend("email", {
//     ...email,
//     message: "This field must be a valid email"
// });

// extend("confirmed", {
//     ...confirmed,
//     message: "This field confirmation does not match"
// });

// extend("length", {
//     ...length,
//     message: "This field must have 2 options"
// });

// extend('xxx', value => {
//     if (value.length >= 4) {
//         return true;
//     }

//     return 'Nhập 4 ký tự!';
// });