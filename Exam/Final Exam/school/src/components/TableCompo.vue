<template>
    <div class="table-responsive">
        <table class="table table-striped
        table-hover	
        table-borderless
        table-primary
        align-middle">
            <thead class="table-light">
                <tr>
                    <th v-for="(headers,idx) in theaders" :key="idx">
                        {{headers}}
                    </th>
                </tr>
            </thead>
            <tbody v-if="stuTable">
                <tr>
                    <td>{{loggedUser.first_name}} {{loggedUser.last_name}}</td>
                    <td>{{loggedUser.email}}</td>
                    <td>{{loggedUser.phone}}</td>
                    <td>{{loggedUser.gender}}</td>
                    <td>{{users.first_name}} {{users.last_name}}</td>
                </tr>
            </tbody>
            <tbody v-if="marTable">
                <tr>
                    <td>{{myMark.HTML}}</td>
                    <td>{{myMark.CSS}}</td>
                    <td>{{myMark['JS-Basic']}}</td>
                    <td>{{myMark['JS-Advance']}}</td>
                    <td>{{myMark.PHP}}</td>
                    <td>{{myMark.CMS}}</td>
                </tr>
                <tr>
                    <td colspan="3">

                    </td>
                    <td colspan="3"></td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr v-for="(user, idx) in users" :key="idx">
                    <td>{{user.sid}}</td>
                    <td>{{user.first_name}} {{user.last_name}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.phone}}</td>
                    <td>Marks</td>
                    <td>Overall</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name:'TableCompo',
    props:['theaders','users','stuTable','loggedUser','marTable','myMark'],
    data(){
        return{

        }
    },
    methods:{
        patSelect(pid){
            this.$emit('pres',pid);
        },

    },
    // mounted(){
    //     this.myMark.forEach((mark)=>{

    //     })
    // }
}
</script>