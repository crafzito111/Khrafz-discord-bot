const Discord = require('discord.js')
const {SlashCommandBuilder} = require("discord.js")



module.exports = {
    CMD: new SlashCommandBuilder()
    
.setDescription("Links mundial Qatar 2022"),
 
    async execute(client, interaction, prefix){
        const forniteGame = new Discord.EmbedBuilder()
        .setTitle("Links para ver el mundial 2022")
        .setDescription("**Resultados:**\nhttps://resultados.as.com/resultados/futbol/mundial/jornada/ \n **Ver partidos ONLINE:** \n http://librefutbol.com/")
        .setImage("https://media.tenor.com/F15BXzaYCR0AAAAM/qatar2022-omg.gif")
        .setColor("#ff5456")
        .setTimestamp()
        interaction.reply({ embeds: [forniteGame]})
    }
}