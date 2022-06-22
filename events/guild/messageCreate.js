require("dotenv").config();
const prefix = process.env.PREFIX;

const userModel = require("../../models/userSchema");

    module.exports = async(client, discord, message) =>{
    if(message.author.bot) return;

    let userData;    
    try{
        userData = await userModel.findOne({userID: message.author.id});
        if (!userData) {
            let user = await userModel.create({
                userID: message.author.id,
                userName: message.author.username,
                serverID: message.guild.id,
            })
        user.save();
        }else{
            console.log("Usuario ya registrado")
        }
      }catch(error){
        console.log(error);
      }


    if (!message.content.startsWith(prefix))
     return message.reply("Esto no es un comando man");

     const args = message.content.slice(prefix.length).split(/ +/);
     const cmd = args.shift().toLowerCase();

     const command = client.commands.get(cmd) || 
     client.commands.find((a) => a.aliases && a.aliases.includes(cmd));

     if(command) command.execute(client, message, args, discord);
     if(!command) return message.channel.send("Este no es un comando man");
};