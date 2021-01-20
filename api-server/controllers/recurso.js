// Controlador para o modelo Recurso

var Recurso = require('../models/recurso')

// Devolve a lista de recursos
module.exports.listar = () => {
    return Recurso
        .find()
        .exec()
}

module.exports.consultar = id => {
    return Recurso
        .findOne({_id: id})
        .exec()
}

module.exports.inserir = t => {
    var novo = new Recurso(t)
    return novo.save()
}

module.exports.remover = function(id){
    return Recurso.deleteOne({_id: id})
}

module.exports.alterar = function(t){
    return Recurso.findByIdAndUpdate({_id: t._id}, t, {new: true})
}
