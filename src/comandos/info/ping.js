module.exports = {
    DESCRIPTION: "Sirve para ver el ping del bot",
    
    async execute(client, message, args, prefix){
        return message.reply(`\`${client.ws.ping}ms\``)
    }
}