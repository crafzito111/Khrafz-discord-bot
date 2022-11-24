const Converter = require('timestamp-conv');


module.exports = {

ALIASES: ["fecha"],

    async execute (client, message, args){

            let time = Date.now();
            let date =  new Converter.timestamp(time)
           
            message.reply(`${date.formatDay}`)

            // returns 18.11.2022

    }
}