var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var personaSchema = new Schema({
	nombre      : String,      
	cargo       : String  
});

personaSchema.static("buscarAlumnos", function(cb){
   this.find({cargo:"Alumno"}, function(err, r){
        cb(r);    
   });    
});

module.exports = mongoose.model('Personas', personaSchema);
