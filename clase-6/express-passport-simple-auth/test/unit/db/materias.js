var assert = require("assert")
    , utils = require('../../../utils')
    , fixtures = require('mongoose-fixtures')
    , Materias, materiaId;

/**
* Database Connection
*/
var dbConex = exports.dbConex = utils.dbConnection("localhost","demo-test","","");


/**
 * Test entities creation
 */
describe('Model Test Materias', function(){
    before(function(){
        //Before all tests
        Materias = require("../../../models/materias.js");
    });


    describe('Operaciones con Materias', function(){
        it('Crear una nueva materia en la BD', function(done){
            var m = new Materias({titulo: "Fisica"});
            m.save(function(err, m){
                materiaId = m._id; 
                if(!err){
                    done();
                } else {
                   throw new Error('No se pudo crear una materia');
                        
                } 
            });
        });

        it('Buscar materia Reg Exp', function(done){
            Materias.buscarMateriasRegExp('isi', function(mat){
                if(mat[0].titulo == 'Fisica'){
                    done();
                }else{
                    throw new Error('Falló busqueda Reg Exp');
                }
            });
        });

    });
    
});

