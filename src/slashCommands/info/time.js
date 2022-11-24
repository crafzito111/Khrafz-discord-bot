const Discord = require('discord.js')
const {SlashCommandBuilder} = require("discord.js")


module.exports = {
    CMD: new SlashCommandBuilder()
 .setDescription("Sirve para ver el tiempo encendido del bot"),
 async execute(client, interaction, prefix){

    let dias = Math.floor(client.uptime / 86400000)
    let horas = Math.floor(client.uptime / 3600000) % 24
    let minutos = Math.floor(client.uptime / 60000) % 60
    let segundos = Math.floor(client.uptime / 1000) % 60

    const uptime = new Discord.EmbedBuilder()
    .setDescription(`Llevo prendid@: \`${dias}\` dias \`${horas}\` horas \`${minutos}\` minutos y \`${segundos}\` segundos`)
    .setTimestamp()
    
   return interaction.reply({ embeds: [uptime]})
 }

}