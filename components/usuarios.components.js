

const UsuariosComp = Vue.component('usuarios-component',{
    data:function(){
        return{
            usuarios: [],
            form: {
                _id: null, 
                nombre: null,
                apellido: null,
                clave: null,
                genero: null,
                edad: null,
                altura: null,
                activo: null,
                fecha: null
            },
            // fecha: null

        }
            
    },
    methods: {
        initForm: function (){
            this.form = {
                _id: null, 
                nombre: null,
                apellido: null,
                clave: null,
                genero: null,
                edad: null,
                altura: null,
                activo: null,
                fecha: this.fecha
        
            }
        },
        obtenerTodos: function (){
            Usuarios.todos( res => {
                this.usuarios = res
                this.initForm()
                this.obtenerFecha()
                
            })
        },
        guardar: function (){
            // Crear producto
            if(this.form._id === null){
                const form = {...this.form}
                delete form._id
                Usuarios.crear(form, res => {
                    console.log(res)
                    this.obtenerFecha()
                     this.obtenerTodos()
                })
            } else {
                const form = {...this.form}
                delete form._id
                Usuarios.editar(this.form._id, form, res => {
                    console.log(res)
                    this.obtenerTodos()
                })
            }
        },
        eliminar: function (id){
            Usuarios.eliminar(id, res => {
                console.log(res)
                this.obtenerTodos()
                
            })
        },
        editar: function (usuario){
            this.form = {...usuario}
        },
        obtenerFecha: function(){
            const date = new Date()
            return this.fecha = date.toLocaleString()//.toLocaleDateString() 
        }
    },
    mounted: function (){
        this.obtenerFecha()
        this.obtenerTodos()
    },
    template:`
  
    <div id="usuarios--component">
    <div id="usuarios--listado">
    
        <table>
            <thead>
            
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th>Clave</th>
                    <th>Genero</th>
                    <th>Edad</th>
                    <th>Altura </th>
                    <th>Activo</th>
                    <th>Fecha de creado</th>
                    <th> </th>
                   
                </tr>
                
            </thead>
            
            <tbody>
            
                <tr v-for="(usuario, i) in usuarios" :key="i">
                    <td>{{usuario._id}}</td>
                    <td>{{usuario.nombre}}</td>
                    <td>{{usuario.apellido}}</td>
                    <td>{{usuario.email}}</td>
                    <td>{{usuario.clave}}</td>
                    <td>{{usuario.genero}}</td>
                    <td>{{usuario.edad}} años</td>
                    <td>{{usuario.altura}} cm</td>
                    <td>{{usuario.activo}}</td>
                    <td>{{usuario.fecha}}</td>
                    <td>
                        <button class="btn-editar" @click="editar(usuario)">Editar</button>
                        <button class="btn-eliminar" @click="eliminar(usuario._id)">Eliminar</button>
                       
                    </td>
                   
                </tr>
               
                               
            </tbody>
            
        </table>
        <hr>
        
    </div>
    
    <div id="usuarios--form">
        <form action="">
        Ingrese sus datos:
        <br>
        <br>
        
            <input type="text" placeholder="Nombre" v-model="form.nombre" >
            <br>
            <input type="text"  placeholder="Apellido" v-model="form.apellido" >
            <br>
            <input type="password"  placeholder="Clave" v-model="form.clave" >
            <br>
            <input type="email" placeholder="usario@example.com" v-model="form.email" pattern=".+@globex\.com" size="15" required>
            <br>
            Genero:<select name="" v-model="form.genero" placeholder="selecione" >
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="otro">Otro</option>

            </select>
            <br>
            <input type="number" placeholder="Edad" v-model="form.edad" > años
            <br>
            <input type="number" placeholder="altura" v-model="form.altura" > cm
            <br> Activo:
            <select name="" v-model="form.activo" placeholder="" >
                <option value="SI">SI</option>
                <option value="NO">NO</option>
                <hr>
            </select>
                      
            <br>
            <br>
           
            <button  class="btn-guardar" type="button" @click="guardar()">Guardar</button>
        </form>
        </div>

</div>
    `
})

// obtenerFecha: function(){
//     return this.fecha = new Date().toLocaleDateString() 
//  }