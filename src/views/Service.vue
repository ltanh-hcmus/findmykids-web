<template>
    <ValidationObserver ref="observer">
        <div style="min-height: 800px;">
            <b-row class="mt-4"></b-row>
            <b-row>
                <b-col lg="6" class="my-1">
                    <b-form-group
                        label="Tên đăng nhập"
                        label-cols-sm="3"
                        label-align-sm="right"
                        label-for="filterInput"
                        class="mb-0"
                    >
                        <b-form-input
                            v-model.trim="UserName"
                            maxlength="250"
                            type="search"
                            id="userName"
                        />
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col lg="6" class="my-1">
                    <b-form-group
                        label="Họ tên"
                        label-cols-sm="3"
                        label-align-sm="right"
                        label-for="filterInput"
                        class="mb-0"
                    >
                        <b-form-input
                            v-model.trim="FullName"
                            maxlength="250"
                            type="search"
                            id="filterInput"
                        />
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col lg="6" class="my-1">
                    <b-form-group
                        label="Email"
                        label-cols-sm="3"
                        label-align-sm="right"
                        label-for="filterInput"
                        class="mb-0"
                        :outlined="false"
                        :borderless="true"
                        head-variant="dark"
                        responsive="sm"
                    >
                        <b-form-input
                            v-model.trim="Email"
                            maxlength="250"
                            type="search"
                            id="filterInput"
                        />
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col lg="6" class="my-1">
                    <b-form-group label-cols-sm="3">
                        <b-input-group>
                            <b-button-group>
                                <b-button variant="success" @click="submitForm">Tìm kiếm</b-button>
                                <b-button variant="light" @click="resetForm">
                                    <b-icon icon="arrow-counterclockwise"></b-icon>
                                </b-button>
                            </b-button-group>
                        </b-input-group>
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row align-h="center">
                <b-col lg="11" class="my-1">
                    <b-table
                        striped
                        hover
                        :fields="fields"
                        :items="items"
                        :selected-variant="selectedvariant"
                        :outlined="false"
                        :borderless="true"
                        head-variant="dark"
                        :sort-by.sync="sortBy"
                        :sort-desc.sync="sortDesc"
                        :filterIncludedFields="filterOn"
                        :select-mode="selectMode"
                        class="mb-10"
                    >
                        <template v-slot:cell(activation_state)="data">
                            <b-link
                                :href="`#${data.value.replace(/[^a-z]+/i, '-').toLowerCase()}`"
                            >{{ data.value }}</b-link>
                        </template>
                        <template v-slot:cell(service_extension)="data">
                            <b-link
                                :href="`#${data.value.replace(/[^a-z]+/i, '-').toLowerCase()}`"
                            >{{ data.value }}</b-link>
                        </template>
                    </b-table>
                </b-col>
            </b-row>
            <b-row align-h="center">
                <b-col lg="11" class="my-1">
                    <b-pagination
                        v-show="hasData"
                        v-model="currentPage"
                        :total-rows="totalRows"
                        :per-page="perPage"
                    ></b-pagination>
                </b-col>
            </b-row>
        </div>
    </ValidationObserver>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { msg_YN } from "@/utils/messagebox.js";
import { ValidationObserver } from "vee-validate";
export default {
    components: {
        ValidationObserver,
        //ValidationProvider
    },
    data() {
        return {
            filter: null
        };
    },
    computed: {
        // ...mapState("service", {
        // fields: state => state.fields,
        // items: state => state.items,
        // hasData: state => state.hasData,
        // totalRows: state => state.totalRows,
        // })

        ...mapState("service", {
            sortBy: state => state.sortBy,
            sortDesc: state => state.sortDesc,
            fields: state => state.fields,
            items: state => state.items,
            hasData: state => state.hasData,
            filterOn: state => state.filterOn,
            totalRows: state => state.totalRows,
            perPage: state => state.perPage,
            currentPageTemp: state => state.currentPage,
            selectMode: state => state.selectMode,
            selected: state => state.selected,
            selectedvariant: state => state.selectedvariant
        }),
        UserName: {
            get() {
                return this.$store.state.service.service.UserName;
            },
            set(value) {
                this.updateService(["UserName", value]);
            }
        },

        FullName: {
            get() {
                return this.$store.state.service.service.FullName;
            },
            set(value) {
                this.updateService(["FullName", value]);
            }
        },

        Email: {
            get() {
                return this.$store.state.service.service.Email;
            },
            set(value) {
                this.updateService(["Email", value]);
            }
        },

        currentPage: {
            get() {
                return this.currentPageTemp;
            },
            set(value) {
                this.updateCurrentPage(value);
            }
        }
    },
    methods: {
        ...mapMutations("service", ["updateService","updateCurrentPage"]),
        ...mapActions("service", ["getListServiceRegister"]),
        async resetForm() {
            if (await msg_YN(this.$bvModal, "làm mới")) {
                this.newForm();
            }
        },
        newForm() {
            this.updateService(["UserName", null]);
            this.updateService(["FullName", null]);
            this.updateService(["Email", null]);
            requestAnimationFrame(() => {
                this.$refs.observer.reset();
            });
        },
        async submitForm() {
            if (
                this.UserName == null &&
                this.FullName == null &&
                this.Email == null
            ) {
                await this.getListServiceRegister();
            }
        }
    },
    async mounted() {
        // this.newForm();
    }
};
</script>

<style lang="scss" scoped></style>
