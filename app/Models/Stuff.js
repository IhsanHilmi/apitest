'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Stuff extends Model {
    user (){
        return this.belongsTo('App/Models/User','id_belonging','id')
    }
}

module.exports = Stuff
