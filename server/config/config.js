const config ={
    production:{
        SECRET:process.env.SECRET,
        DATABASE:process.env.MONGODB_URL
    },
    default:{
        SECRET:'Fhama10@',
        DATABASE:'mongodb://localhost:27017/asadu' 
    }
}

exports.get = function get(env){
    return config[env] || config.default
}