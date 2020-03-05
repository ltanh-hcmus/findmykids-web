<template>
    <b-container>
        <b-navbar toggleable="lg" type="light" variant="light" sticky v-show="isLogin">
            <b-navbar-brand>Find My Kids</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <!-- <b-nav-item right>Xin chào, Lê Tuấn Anh</b-nav-item> -->

                    <b-nav-item right @click="clientLogout">
                        <!-- <b-icon icon="power"></b-icon> -->
                        Đăng nhập
                    </b-nav-item>
                    <b-nav-item right @click="clientLogout">
                        <!-- <b-icon icon="power"></b-icon> -->
                        Đăng ký
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>

        <b-card
            overlay
            :img-src="require('@/assets/images/bg.png')"
            class="bgcard"
            style="border: 0px; border-radius: 0px;"
            v-show="isLogin"
        />

        <b-breadcrumb
            v-show="breadcrumb_items.length != 0 && isLogin"
            :items="breadcrumb_items"
            style="border-radius: 0px"
        ></b-breadcrumb>

        <router-view />

        <b-jumbotron style="padding: 2rem 1rem; border-radius: 0px" class="mb-0" v-show="isLogin">
            <h5 style="text-align:center;">Find My Kids</h5>
            <h5 style="text-align:center;">&copy; Lê Anh - Huỳnh Hậu - 18HCB</h5>
        </b-jumbotron>
        <loading />
    </b-container>
</template>

<script>
import Loading from "@/components/common/Loading";
import { mapState, mapActions } from "vuex";

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
            isLogin: state => state.isLogin
        })
    },
    components: {
        Loading
    },
    methods: {
        ...mapActions("auth", ["logout"]),
        clientLogout() {
            this.logout();
            this.$router.push("/login");
        }
    }
};
</script>

<style src="@/assets/css/custom.css"></style>