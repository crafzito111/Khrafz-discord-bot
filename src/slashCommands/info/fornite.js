const Discord = require('discord.js')
const {SlashCommandBuilder} = require("discord.js")



module.exports = {
    CMD: new SlashCommandBuilder()
    
.setDescription("Llamar a los mancos para jugar fornite"),
 
    async execute(client, interaction, prefix){
        const forniteGame = new Discord.EmbedBuilder()
        .setTitle("Quien pa jugar fornite?")
        .setDescription("<@&993916264374345820>")
        .setImage("https://media.tenor.com/RrlJJgLPdxYAAAAd/fortnite-time-crow-system.gif")
        .setColor("#ff0000")
        .setTimestamp()
        interaction.reply({ embeds: [forniteGame]})
    }
}