'use strict'
const user = use('App/Models/User')
class UserController {
    async index({response}){
        const alluser = await user
        .query()
        .with('stuff')
        .fetch()

        response.json({
            greeting : "Here's the users",
            data : alluser
        })
    }
    async show({response,params}){
        var user1 = await user
        .query()
        .with('stuff')
        .where('id',params.id)
        .fetch() 

        var add_message = ""
        if(!user1.stuff){
            add_message = "this user has no stuff"
            var user1 = await user.find(params.id)
        }
        
        response.json({
            greeting : "Here's the "+user1.username+" user",
            data : user1,
            message : add_message
        })
    }
    async store({request,response}){
        const body = request.post()
       
       const new_user = new user()
        new_user.username = body.username
        new_user.email = body.email
        new_user.password = body.password
        
        await new_user.save()
        
        response.json({
            message : 'finish adding the '+new_user.username+' user',
            data : new_user
        })
    }
    async update({response,request,params}){
        const user1 = await user.find(params.id)

        const new_user = request.post()
        if(new_user.username!=null){
            user1.username = new_user.username
        }
        if(new_user.email!=null){
            user1.email = new_user.email
        }
        if(new_user.password!=null){
            user1.password = new_user.password
        }
        await user1.save()

        response.json({
            message : 'finish editing the '+user1.username+' user',
            data : user1
        })
    }
    async delete({params,response}){
        const deleted_user = await user.find(params.id)
        await deleted_user.delete()
        response.json({
            message: 'finish killing the '+deleted_user.username+' user',
            data : deleted_user
        })
    }
}

module.exports = UserController
