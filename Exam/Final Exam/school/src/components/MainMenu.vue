<template>
        <nav class="navbar navbar-expand-sm navbar-dark" style="background-color: black">
        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"></button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                <li class="nav-item" v-if="loginFlag === ''">
                    <router-link active-class="active" class="nav-link" to="/" aria-current="page" >Login</router-link>
                </li>
                <li class="nav-item" v-if="loginFlag === 'teaFlag'">
                    <router-link active-class="active" class="nav-link" to="/tea" aria-current="page">Teachers Dashboard</router-link>
                </li>
                <li class="nav-item" v-if="loginFlag === 'stuFlag'">
                    <router-link active-class="active" class="nav-link" to="/stu" aria-current="page">Students Dashboard</router-link>
                </li>
                <li class="nav-item" v-if="loginFlag !== ''">
                    <router-link active-class="active" class="nav-link" @click="logout" to="/login" aria-current="page">Logout</router-link>
                </li>
                
            </ul>
        </div>
    </nav>
</template>
<script>

export default {
    name:'MainMenu',
    props:['logFlag'],
    data(){
        return{
            loginFlag:this.logFlag,
        }
    },
    methods:{
        logout(){
            sessionStorage.removeItem('loggedUser');
            this.loginFlag = '';
        }
    }
}
</script>