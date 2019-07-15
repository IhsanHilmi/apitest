'use strict'

const stuff = use('App/Models/Stuff')

class StuffController {
    async index({response}){
        const allstuff = await stuff
        .query()
        .with('user')
        .fetch()

        response.json({
            greeting : "Here's the stuff",
            data : allstuff
        })
    }
    async store({request,response,params}){
       const body = request.post()
       
       const new_stuff = new stuff()
        new_stuff.name = body.name
        new_stuff.description = body.description
        new_stuff.id_belonging = empty(body.id_belonging)? params.id:body.id_belonging
        
        await new_stuff.save()
        
        response.json({
            message : 'finish adding stuff',
            data : new_stuff
        })
    }
    async delete(){
        
    }
    async update(){
        
    }
    async show({params,response}){
       const stuff = stuff()
       .query()
       .with('user')
       .where('id',params.id)
       .fetch()
        
        response.json({
            greeting : "Here's the stuff",
            data : stuff
        })
    }
}

module.exports = StuffController
