const Discord = require('discord.js');

module.exports = {


     async execute(client, message, args){
        
        let rpts = ["Probablemente", "No", "Si", "Tal vez", "No", "¡Claro!", "Si", "No"];//Respuestas aleatorias
        let random = rpts[Math.floor(Math.random() * rpts.length)];

//No define la pregunta.
        let pregunta = args.join(' ');
        if(!pregunta) return message.reply(`Primero debes de escribir tu pregunta!`)

//Respuesta del bot.
const ballrandom = new Discord.EmbedBuilder()
        .setTitle("La 8ball dice que 👇")
        .setDescription(`**${random}**`)
        .setImage("https://media.tenor.com/b2XMjBnhBd8AAAAC/skeleton-eightball.gif")
        return message.reply({ embeds: [ballrandom]})
    }
}