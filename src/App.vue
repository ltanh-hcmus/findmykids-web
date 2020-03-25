<template>
    <b-container fluid class="p-0">
        <b-navbar class="pcenter shadow-sm bg-white rounded" toggleable="lg" sticky>
            <b-navbar-brand>
                <b-link to="/">
                    <img
                        src="@/assets/images/icon-logo-new.svg"
                        width="43"
                        height="43"
                        alt="Find my kids"
                    />
                    <img
                        src="@/assets/images/icon-logo-new-2-en.svg"
                        width="128"
                        height="18"
                        alt="Find my kids"
                    />
                </b-link>
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto" v-show="!isLogin">
                    <b-nav-item right @click="clientLogin">Đăng nhập</b-nav-item>
                    <b-nav-item right @click="clientRegister">Đăng ký</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto" v-show="isLogin">
                    <b-nav-item right>Xin chào, {{ this.getName() }}</b-nav-item>
                    <b-nav-item right @click="clientLogout">
                        <b-icon icon="power"></b-icon>Đăng xuất
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>

        <router-view />

        <b-jumbotron style="padding: 2rem 2rem; border-radius: 0px; shadow-sm" class="mt-5 mb-0">
            <h5 style="text-align:center;">Find My Kids</h5>
            <h5 style="text-align:center;">&copy; Lê Anh - Huỳnh Hậu - 18HCB</h5>
        </b-jumbotron>
        <loading />

        <div>
            <div id="paypal-button-container"></div>
        </div>
    </b-container>
</template>

<script src="https://www.paypal.com/sdk/js?client-id=AZougqOyKucRxBRb-R6xthxmwf6EyV9PjUUsSgA7BpvLHQ8MQ9JOcygThdXyIjRhXFnOU7uHJzi8INex&vault=true" data-sdk-integration-source="button-factory"></script>
<script>
</script>


<script>
import Loading from "@/components/common/Loading";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
    data() {
        return {
            breadcrumb_items: [
                {
                    text: "Trang chủ",
                    href: "#"
                }
            ]
        };
    },
    computed: {
        ...mapState("auth", {
            isLogin: state => state.isLogin,
            name: state => state.Name
        })
    },
    components: {
        Loading
    },
    methods: {
        ...mapActions("auth", ["logout"]),
        ...mapGetters("auth", ["getName"]),
        clientLogout() {
            this.logout();
            this.$router.push("/").catch(error => {
                if (error.name != "NavigationDuplicated") {
                    throw error;
                }
            });
        },
        clientRegister() {
            this.$router.push("/register").catch(error => {
                if (error.name != "NavigationDuplicated") {
                    throw error;
                }
            });
        },
        clientLogin() {
            this.$router.push("/login").catch(error => {
                if (error.name != "NavigationDuplicated") {
                    throw error;
                }
            });
        }
    },
    mounted() {
        paypal
            .Buttons({
                style: {
                    shape: "rect",
                    color: "gold",
                    layout: "vertical",
                    label: "paypal"
                },
                createSubscription: function(data, actions) {
                    return actions.subscription.create({
                        plan_id: "P-73694924XN7582258LZ4HXNQ"
                    });
                },
                onApprove: function(data, actions) {
                    alert(data.subscriptionID, status);
                }
            })
            .render("#paypal-button-container");
    }
};
</script>

<style src="@/assets/css/custom.css"></style>

<style scoped>
.pcenter {
    padding-left: 15%;
    padding-right: 15%;
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 0;
}
</style>