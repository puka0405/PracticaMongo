const mongoose =require('mongoose')
const url_db='mongodb://localhost:27017/utma'

mongoose.connect(url_db)
.then(() => {
    console.log('conexión exitosa')

})
.catch((err) => {
    console.log('no jaló ptm')
})

const alumnos_esquema = new mongoose.Schema(
    {
        name:{
            type:String
        },
        apepat: {
            type:String
        },
        numerotel:{
            type:Number
        }
    }
)
const alumnos = new mongoose.model('Tabla de registro de alumnos', alumnos_esquema)
alumnos.create(
    {
        name:'Jesus',
        apepat:'Salazar',
        numerotel:4498056955
    }
)