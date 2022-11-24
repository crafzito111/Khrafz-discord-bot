module.exports = async (client, interaction) => {
    if(!interaction.guild || !interaction.channel) return;

    const COMANDO = client.slashCommands.get(interaction?.commandName)

    if(COMANDO){
        if(COMANDO.OWNER){
            const DUEÑOS = process.env.OWNER_IDS.split(" ");
            if(!DUEÑOS.includes(interaction.user.id)) return interaction.reply({content:`❌ **Solo los dueños de este bot pueden ejecutar este comando**\nDueños del Bot: ${DUEÑOS.map(DUEÑO => `<@${DUEÑO}>`).join(", ")}`})
        }

        if(COMANDO.BOT_PERMISSIONS){
            if(!interaction.guild.members.me.permissions.has(COMANDO.BOT_PERMISSIONS)) return interaction.reply({content:`❌ **Necesito los siguientes permisos para ejecutar este comando**\nPermisos: ${COMANDO.BOT_PERMISSIONS.map(permiso => ` "\"${permiso}`).join(", ")}`})
        }

        if(COMANDO.PERMISSIONS){
            if(!interaction.members.permissions.has(COMANDO.PERMISSIONS)) return interaction.reply({content:`❌ **Necesitas los siguientes permisos para ejecutar este comando**\nPermisos: ${COMANDO.PERMISSIONS.map(permiso => ` "\"${permiso}`).join(", ")}`})
        }

        try {
            COMANDO.execute(client, interaction, "/")
        } catch(e){
            interaction.reply({content: "**Ha ocurrido un error a la hora del ejecutar el comando"})
            console.log(e)
        }
    }

    

    
}