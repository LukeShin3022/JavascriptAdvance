<template>
    <div>
        <h1>{{loggedUser.first_name}} {{loggedUser.last_name}}</h1>
        <table-compo @pres="pres" :theaders="theaders" :users="teaStu"></table-compo>
    </div>
    
</template>
<script>
import cryptoJs from 'crypto-js';
import TableCompo from './TableCompo.vue';
export default {
    name:'TeacherHome',
    // props:['loggedUser','srcData'],
    props:['srcData'],
    components:{
        TableCompo,
    },
    data(){
        return{
            teaStu:[],
            theaders:['Student#','Full name','Email','Phone','Courses Marks', 'Overall grade'],
            loggedUser:'',
        }
    },
    methods:{
        loadStudent(){
            let tid = this.loggedUser.tid;
            let students = this.srcData.stuData;
            let thisObj = this;
            students.forEach((student)=>{
                if(student.tid == tid){
                    thisObj.teaStu.push(student);
                }
            })
        },
        pres(pid){
            let selectedPat = this.srcData.patData.get(pid);
            this.$emit('pres',selectedPat);
            this.$router.push({
                name:'pres-compo'
            })
            // selectedPat
        }
    },
    mounted(){
        let deCypher = cryptoJs.AES.decrypt(sessionStorage.getItem('loggedUser'),navigator.userAgent);
        this.loggedUser = JSON.parse(deCypher.toString(cryptoJs.enc.Utf8));
        this.loadStudent();
        this.$emit('logged',this.loggedUser,"teaFlag");
        // this.loggedUser;
        // console.log(this.srcData);
    }
}
</script>