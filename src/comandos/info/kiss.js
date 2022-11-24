const Discord = require("discord.js");
const { EmbedBuilder } = require("discord.js");

module.exports = {
   async execute(client, message, args){
const array = ["https://cdn.discordapp.com/attachments/1021531208540229642/1021950072398807091/bunny-girl.gif",  "https://cdn.discordapp.com/attachments/1021531208540229642/1021950128887705610/engage-kiss-anime-kiss.gif", "https://cdn.discordapp.com/attachments/1021531208540229642/1021950142074601472/kiss-cuddles.gif",]
    const user = await message.mentions.users.first()

    if(!user) return message.channel.send("Debes nombrar a quien besar.")

    if (user.id == message.author.id) return message.channel.send("No puedes hacer eso")

    const embed = new Discord.EmbedBuilder()
        .setTitle(`**${message.author.username} le acaba de dar un beso a ${user.username} 💋**`)
        .setImage(`${array[(Math.floor(Math.random() * array.length))]}`)
        .setTimestamp()
      
        message.reply({ embeds: [embed] })
      

    }
}