<template>
    <div class="col">
        <button type="button" class="btn btn-primary" @click="presSubmit">Submit</button>
        <h1>{{loggedUser.first_name}} {{loggedUser.last_name}}</h1>
        <h3>Prescription for : {{loggedUser.first_name}} {{loggedUser.last_name}}</h3>
        <table-compo @drugSl="drugSl" :theaders="thearders" :drugTb="true" :drugs="drugs" :addBt="true"></table-compo>
    </div>
</template>
<script>
import TableCompo from './TableCompo.vue';
export default {
    name:'PresCompo',
    props:['loggedUser','srcData','selectedPat'],
    components:{
        TableCompo,
    },
    data(){
        return{
            theaders:['Drug Name','Drug Brand','Price'],
            drugs:null,
            presList:{},
        }   
    },
    methods:{
        drugSl(did){
            this.presList.drugsCode.push(did);
            console.log(this.presList);
        },
        presSubmit(){
            localStorage.setItem(this.selectedPat.pid,JSON.stringify(this.presList));
            this.$router.push({
                name:'doctor-compo'
            })
        }
    },
    mounted(){
        this.drugs = this.srcData.drugData;
        this.presList = {
            docid:this.loggedUser.doc_id,
            drugsCode:[]
        }
    }
}
</script>