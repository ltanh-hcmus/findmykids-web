<template>
    <ValidationObserver ref="observer">
        <b-form>
            <b-container class="mt-5" style="min-height: 800px">
                <b-row>
                    <b-col lg="6" class="mt-5"/>
                    <b-col>
                        <h2>Payment</h2>
                    </b-col>                 
                </b-row>
                <b-row>
                    <b-col lg="5"/>
                    <b-col lg="3">
                        <label>A license for 1 device</label>
                    </b-col>
                    <b-col>
                        <label>25.99 $</label>
                    </b-col>
                </b-row>     
                <b-row>
                    <b-col lg="6" class="mx-auto">
                        <b-form-group
                            label="Email"
                            label-cols-sm="4"
                            label-align-sm="right"
                            description="Bắt buộc nhập!"
                        >
                            <ValidationProvider
                                rules="required"
                                name="Email"
                                v-slot="{ valid, errors }"
                            >
                                <b-form-input
                                    v-model.trim="Email"
                                    :state="errors[0] ? false : (valid ? true : null)"
                                    maxlength="250"
                                ></b-form-input>
                                <b-form-invalid-feedback
                                    :state="errors[0] ? false : (valid ? true : null)"
                                >{{ errors[0] }}</b-form-invalid-feedback>
                            </ValidationProvider>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row align-h="center">
                    <b-col lg="2"/>
                    <b-col lg="4" class="mx-auto">
                        <b-button block variant="primary" size="lg">Pay</b-button>
                    </b-col>
                    
                </b-row>
            </b-container>
        </b-form>
    </ValidationObserver>
</template>

<script>
//import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import { ValidationObserver, ValidationProvider } from "vee-validate";
//import { msg_YN } from "@/utils/messagebox.js";
export default {
    components: {
        ValidationObserver,
        ValidationProvider
    }
};
</script>

<style lang="scss" scoped>
</style>