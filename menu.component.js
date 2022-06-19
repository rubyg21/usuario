const Menu = Vue.component('menu-component', {
    data: function (){
        return {
            apps: [

                {
                    name: "Usuarios",
                    app: 0
                }

            ]
        }
    },
    methods: {
        changeAppTrigger: function (appNumber){
            // app: hace referencia a la app de Vue
            app.changeApp(appNumber)
        }
    },
    template: `
        <ul id="menu-component">
            <li v-for="item in apps">
                <a href="#" @click="changeAppTrigger(item.app)">{{item.name}}</a>
            </li>
        </ul>
    `
})