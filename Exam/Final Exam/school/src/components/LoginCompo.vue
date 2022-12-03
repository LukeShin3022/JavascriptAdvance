<template>
    <div>
        <h1>Login Page</h1>
        <login-form @login="login"></login-form>
        <div v-if="err" class="alert alert-primary alert-dismissible fade show" role="alert">
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            <strong>Login Error</strong> {{msg}}
        </div>
    </div>
</template>
<script>
import LoginForm from './LoginForm.vue';
export default {
    name:'LoginCompo',
    props:['srcData'],
    data(){
        return{
            err:false,
            msg:'',
        }
    },
    components:{
        LoginForm,
    },  
    methods:{
        login(logUser,logtype){
            // console.log(logUser, logtype);
            let thisObj = this;
            switch(logtype){
                case "tea":
                    this.srcData.teaData.forEach((teacher)=>{
                        if(teacher.email == logUser.email && teacher.password == logUser.pass){
                            thisObj.$emit('logged',teacher,'teaFlag');
                            thisObj.$router.push(
                                {
                                    name:'teacher-compo'
                                }
                            )
                            
                            return false;
                        }else{
                            this.msg = "Please check again your Email or Password";
                            this.err = true;
                        }
                    })
                    break;
                case "stu":
                    this.srcData.stuData.forEach((student)=>{
                    if(student.email == logUser.email && student.password == logUser.pass){
                        thisObj.$emit('logged',student,'stuFlag');
                        thisObj.$router.push(
                                {
                                    name:'student-compo'
                                }
                            )
                        return false;
                    }else{
                            this.msg = "Please check again your Email or Password";
                            this.err = true;
                        }
                })
                    break;
            }
        }
    }
}
</script>