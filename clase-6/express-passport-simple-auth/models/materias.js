var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var materiaSchema = new Schema({
	titulo      : String
});

materiaSchema.static("buscarMaterias", function(cb){
   this.find( function(err, r){
        cb(r);    
   });    
});

materiaSchema.static("buscarMateriasRegExp", function(regExp, cb){
   this.find({ titulo: { $regex: regExp, $options: 'i' } } , function(err, r){
        cb(r);    
   });    
});


module.exports = mongoose.model('Materias', materiaSchema);
