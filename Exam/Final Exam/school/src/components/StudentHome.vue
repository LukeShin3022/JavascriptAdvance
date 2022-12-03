<template>
    <div>
        <h1>{{loggedUser.first_name}} {{loggedUser.last_name}}</h1>
        <table-compo :theaders="theaders" :stuTable="true" :loggedUser="loggedUser" :users="myTea"></table-compo>
        <table-compo :theaders="theaders2" :marTable="true" :myMark="myMark"></table-compo>
    </div>
</template>
<script>
import TableCompo from './TableCompo.vue';
import cryptoJs from 'crypto-js';
export default {
    name:'StudentHome',
    props:['srcData','loggedUser'],
    data(){
        return{
            theaders:['Student Name','Email','Phone','Gender','Teacher Name'],
            theaders2:['HTML','CSS','JS Basic','JS Advance','PHP','CMS'],
            myTea:'',
            myMark:'',
            drugList:'',
            drugs:new Map(),
            drug:{},

        }
    },
    components:{
        TableCompo,
    },
    mounted(){
        let deCypher = cryptoJs.AES.decrypt(sessionStorage.getItem('loggedUser'),navigator.userAgent);
        let loggedUser = JSON.parse(deCypher.toString(cryptoJs.enc.Utf8));
        this.$emit('logged',loggedUser,"stuFlag");
        this.myMark = this.srcData.marData.get(this.loggedUser.sid);
        this.myTea = this.srcData.teaData.get(this.loggedUser.tid);
        console.log(this.myMark);
    }
}
</script>