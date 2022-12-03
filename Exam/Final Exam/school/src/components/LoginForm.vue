<template>
    <form @submit.prevent="login">
        <div class="mb-3">
            <select class="form-select form-select-lg" v-model="logType">
                <option value="" selected>Select one</option>
                <option value="tea">Teacher</option>
                <option value="stu">Student</option>
            </select>
        </div>
        <div class="mb-3">
            <label class="form-lable">Email</label>
            <input v-model="logedUser.email" type="email" class="form-control" aria-describedby="helpId">
        </div>
        <div class="mb-3">
            <label class="form-lable">Password</label>
            <input v-model="logedUser.pass" @keyup.enter="login" type="password" class="form-control" aria-describedby="helpId">
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
        <div v-if="err" class="alert alert-primary alert-dismissible fade show" role="alert">
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            <strong>Login Error</strong> {{msg}}
        </div>
    </form>
</template>
<script>
export default {
    name:'LoginForm',
    data(){
        return{
            logedUser:{
                email:'',
                pass:'',
            },
            logType:'',
            msg:'',
            err:false,

        }
    },
    methods:{
        login(){
            if(this.logType != ''){
                this.$emit('login',this.logedUser,this.logType)
            }else{
                this.msg = "please selecte the login type.";
                this.err = true;
            }
        }
    }
}
</script>