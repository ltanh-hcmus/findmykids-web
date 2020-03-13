<template>
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
                <b-form-input  type="search" id="filterInput"/>
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
                <b-form-input  type="search" id="filterInput"/>
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
                <b-form-input  type="search" id="filterInput"/>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row >
            <b-col lg="6" class="my-1">
                <b-form-group 
                    label-cols-sm="3"
                >
                    <b-input-group>
                        <b-button-group>
                            <b-button variant="success" >Tìm kiếm</b-button>
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
                    class="mb-10"
                >
                <template>
                    
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
</template>

<script>
import { mapState } from "vuex";
    export default {
        data(){
            return{
                filter: null
            };
        },
        computed: {
            // ...mapState("service", {
                //fields: state => state.fields,
                // items: state => state.items,
                // hasData: state => state.hasData,
                // totalRows: state => state.totalRows,
            // })

            ...mapState("service", {
            // sortBy: state => state.sortBy,
            // sortDesc: state => state.sortDesc,
            fields: state => state.fields,
            items: state => state.items,
            hasData: state => state.hasData,
            // filterOn: state => state.filterOn,
            totalRows: state => state.totalRows,
            perPage: state => state.perPage,
            currentPageTemp: state => state.currentPage,
            // selectMode: state => state.selectMode,
            // selected: state => state.selected,
            // selectedvariant: state => state.selectedvariant
        }),
        currentPage: {
            get() {
                return this.currentPageTemp;
            },
            set(value) {
                this.updateCurrentPage(value);
            }
        }

        }
    }
    
</script>

<style lang="scss" scoped>

</style>