require("dotenv").config();

const discord = require("discord.js");
const client = new discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"],
});

const mongoose = require("mongoose");
const mg = process.env.DB;

mongoose.connect(mg, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Conectado a MongoDB")
  console.log("----------------- LOGS DEL BOT -----------------")
}).catch((e) => {
  console.log(e);
})

client.commands = new discord.Collection();
client.events = new discord.Collection();

["commandHandler", "eventHandler"].forEach((file) => {
  require(`./handlers/${file}`)(client, discord);
});


client.login(process.env.DSTOKEN);



















































// let Scomand = [
//     {
//       name: "ping",
//       description: "Devuelve el ping del bot",
//       run: async(client, interaction, args) => {
//         await interaction.followUp({content: `Ping: ${client.ws.ping} ms` });
//       },
//     },
//     {
//         name: "weps",
//         description: "Devuelve un saludo",
//         run: async(client, interaction, args) => {
//           await interaction.followUp({content: "Que onda pa" });
//         },
//       },
// ]

// client.slash = new discord.Collection();

// client.once('ready', async ()=> {
//     console.log("***************************************")
//     console.log(`Bot: ${client.user.username}`);

//     client.user.setStatus('online');
//     client.user.setActivity('Libertadores', {type: "PLAYING"});

//     console.log(
//         "***************************************\n\n"
//     );
//     console.log(
//         "************************* CONSOLE LOGS *************************"
//     );

//     client.slash.set(Scomand[0].name, Scomand[0]);
//     client.slash.set(Scomand[1].name, Scomand[1]);

//     await client.application.commands.set(Scomand);

// });

// client.on("interactionCreate", async (interaction) => {

//     if(interaction.isCommand()){
//         await interaction.deferReply({ephemeral: false}).catch((obj) => {
//             console.log(obj);
//         })

//         console.log(client.slash.get(interaction.commandName));

//         const command = client.slash.get(interaction.commandName)

//         if(!command) return interaction.followUp({content: "Comando no registrado "});

//         const args = [];

//         try {
//             command.run(client,interaction, args);
//         }catch (error){
//             console.log(error);
//         }


//     }

// })
    


// //Mensaje Embed

// //Colores RGB/HEX/NOMBRE

// const me = new discord.MessageEmbed()
//     .setColor("GOLD")
//     .setTitle("Pong")
//     .setURL("https://www.google.com")
//     .setAuthor("PONG COMMAND"/*Autor*/,
//     "https://i.imgur.com/a58VMeF.png"/*Icono*/,
//     "https://www.discord.com"/* URL */
//    )
//    .setDescription("Este es el contenido principal")
//    .setThumbnail("https://i.imgur.com/a58VMeF.png")
//    .addFields({
//     name: "Contenido 1", 
//     value:"Este es el valor del contenido 1",
// },
// {
//     name: "Col1",
//     value:"Columna 1 descripcion",
//     inline: true,
// },
// {
//     name: "Col2",
//     value:"Columna 2 descripcion",
//     inline: true,
// }
// )
// .setImage("https://i.imgur.com/a58VMeF.png")
// .setTimestamp()
// .setFooter("Joaco", "https://i.imgur.com/a58VMeF.png");

// client.on("messageCreate",(msg)=>{
    
//     if(msg.author.bot) return;

//     if (!msg.content.startsWith(prefix))
//         return msg.reply("Esto no es un comando man");

//     if(msg.content.startsWith(prefix)) {
//         //borrar 99 pre/commando/argumentos
//         const argumentos = msg.content.slice(prefix.length).split(/ +/);
//         const comando = argumentos.shift().toLowerCase();

//         if(msg.channelId == "988883682184015972" || msg.channel.name == "fichajes"){
//             if(comando == "capitan"){
//                 msg.reply("El jugador ha sido registrado como capitan")
//             }
//         }

    
        // const me2 = new MessageEmbed()
//         //     .setColor("RED")
//         //     .setTitle(comando)
//         //     .setAuthor(msg.author.username, msg.author.displayAvatarURL())
//         //     .setDescription(`El comando elegido es ${comando}`); 
//         // msg.channel.send({embeds: [me2] })


//         if (comando == "ping") 
//             return msg.reply("PONG");
        
//         if(comando == "suma") {
//             return msg.reply(
//                 `El resultado es: ${
//                     parseFloat(argumentos[0]) + parseFloat(argumentos[1])
//                 }`
//             );
//         }
//     } 
// });


