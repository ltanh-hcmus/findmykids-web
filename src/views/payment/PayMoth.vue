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
                        <label>2.99 $</label>
                    </b-col>
                </b-row>     
                
                <b-row align-h="center">
                    <b-col lg="2"/>
                    <b-col lg="4" class="mx-auto">
                        <b-button block variant="primary" size="lg" to="/payment/onemoth/paypal">Pay</b-button>
                    </b-col>
                    
                </b-row>
            </b-container>
        </b-form>
    </ValidationObserver>
</template>

<script>
//import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
export default {
    components: {
       
    }
};
</script>

<style lang="scss" scoped>
</style>