const connectDatabase = require('../database/db')
const User = require('../models/user')

module.exports.handler = async (event,context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    try{
        await connectDatabase();
        //To get the body params like name, email, password
        //we need to get it from event.body 
        const {name,email,password} = JSON.parse(event.body)
        let userObj = {
            name,
            email,
            password
        }
        userObj = await User.create(userObj);
        return {
            statusCode: 201,
            body: JSON.stringify(userObj),
        };
        
    } catch(error){
        console.log(error);
        return{
            statusCode: error.statusCode || 500,
            body: JSON.stringify({error: error.message}),
        }
    }
};