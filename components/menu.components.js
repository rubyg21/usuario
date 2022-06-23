const Menu = Vue.component('menu-component', {
    data: function (){
        return {
            items: [
                {
                    path: '/',
                    name: 'Usuarios'
                },
                // {
                //     path: '/usuarios',
                //     name: 'Usuarios'
                // },

            ]
        }
    }, 
    template: `
        <div id="menu--component">
            <router-link v-for="(item,i) in items" :key="i" v-bind:to="item.path">{{item.name}}</router-link>
        </div>
    `
})