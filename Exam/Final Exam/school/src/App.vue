<template>
  <div>
    <main-menu :logFlag="logFlag"></main-menu>
    <router-view @logged="logged" @pres="pres" :loggedUser="loggedUser" :srcData="loadedObj" class="container"></router-view>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu.vue';
import getJson from './services/getJson.js';
import cryptojs from 'crypto-js';
export default {
  name: 'App',
  props:[''],
  components: {
    MainMenu,
  },
  data(){
    return{
      teachers: new Map(),
      students: new Map(),
      marks: new Map(),
      loadedObj:{},
      logFlag:'',
      loggedUser:null,
    }
  },
  methods:{
    pres(selectedPat){
      this.selectedPat = selectedPat;
    },
    loadTeacher(){
      getJson.load('teacher_data')
      .then((res)=>{
        let thisObj = this;
        res.data.forEach((teacher)=>{
          thisObj.teachers.set(teacher.tid,teacher);
        })
      })
      .catch((e)=>{console.log(e)})
    },
    loadStudent(){
      getJson.load('student_data')
      .then((res)=>{
        let thisObj = this;
        res.data.forEach((student)=>{
          thisObj.students.set(student.sid,student);
        })
      })
      .catch((e)=>{console.log(e)})
    },
    loadMark(){
      getJson.load('marks_data')
      .then((res)=>{
        let thisObj = this;
        res.data.forEach((mark)=>{
          thisObj.marks.set(mark.sid,mark);
        });
        this.loadedObj = {
          teaData:thisObj.teachers,
          stuData:thisObj.students,
          marData:thisObj.marks
        }
      })
      .catch((e)=>{console.log(e)})
    },
    logged(loggedUser, logFlag){
      // console.log(loggedUser, logFlag);
      this.logFlag = logFlag;
      this.loggedUser = loggedUser;
      let cypherText = cryptojs.AES.encrypt(JSON.stringify(this.loggedUser),navigator.userAgent).toString();
      sessionStorage.setItem('loggedUser',cypherText);
    },
  },
  mounted(){
    this.loadTeacher();
    this.loadStudent();
    this.loadMark();
  }
}
</script>

<style>

</style>
