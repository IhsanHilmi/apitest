'use strict'

const stuff = use('App/Models/Stuff')

class StuffController {
    async index({response,params}){
        if(!params.id){
        const allstuff = await stuff
        .query()
        .with('user')
        .fetch()
        }
        else{
        const allstuff = await stuff
        .query()
        .with('user')
        .where('id_belonging',params.id)
        .fetch()
        }
        response.json({
            greeting : "Here's the stuff",
            data : allstuff,
        })
    }
    async store({request,response,params}){
       const body = request.post()
       
       const new_stuff = new stuff()
        new_stuff.name = body.name
        new_stuff.description = body.description
        new_stuff.id_belonging = body.id_belonging!=null? body.id_belonging:params.id
        
        await new_stuff.save()
        
        response.json({
            message : 'finish adding '+new_stuff.name+' stuff',
            data : new_stuff
        })
    }
    async delete({response,params}){
        const bad_stuff = await stuff.find(params.sid)
        await bad_stuff.delete()

        response.json({
            message : 'finish sending '+bad_stuff.name+' stuff to heaven'
        })

    }
    async update({params,response,request}){
        const stuff1 = await stuff.find(params.sid)

        const new_stuff = request.post()
        if(new_stuff.name!=null){
            stuff1.name = new_stuff.name
        }
        if(new_stuff.description!=null){
            stuff1.description = new_stuff.description
        }
        if(new_stuff.id_belonging!=null){
            stuff1.id_belonging = new_stuff.id_belonging
        }
        await stuff1.save()

        response.json({
            message : 'finish editing '+stuff1.name+' stuff',
            data : stuff1
        })
    }
    async show({params,response}){
       
        if(!params.id){
            const allstuff = await stuff
            .query()
            .with('user')
            .where('id',params.sid)
            .fetch()
        }
        else{
            const allstuff = await stuff
            .query()
            .with('user')
            .where('id',params.sid)
            .where('id_belonging',params.id)
            .fetch()
        }

        response.json({
            greeting : "Here's the "+stuff1.name+" stuff data",
            data : stuff1
        })
    }
}

module.exports = StuffController
