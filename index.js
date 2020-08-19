const discord = require('discord.js')

const client = new discord.Client()

const PREFIX = '!'

client.login('TOKEN DO SEU BOT')

/*
 ____     __  __      __  __      ____       _____       ____       ____       
/\  _`\  /\ \/\ \    /\ \/\ \    /\  _`\    /\  __`\    /\  _`\    /\  _`\     
\ \ \L\_\\ \ \ \ \   \ \ `\\ \   \ \ \/\_\  \ \ \/\ \   \ \ \L\_\  \ \,\L\_\   
 \ \  _\/ \ \ \ \ \   \ \ , ` \   \ \ \/_/_  \ \ \ \ \   \ \  _\L   \/_\__ \   
  \ \ \/   \ \ \_\ \   \ \ \`\ \   \ \ \L\ \  \ \ \_\ \   \ \ \L\ \   /\ \L\ \ 
   \ \_\    \ \_____\   \ \_\ \_\   \ \____/   \ \_____\   \ \____/   \ `\____\
    \/_/     \/_____/    \/_/\/_/    \/___/     \/_____/    \/___/     \/_____/
                                                                               
*/

function mensagemBemVindo(){
    client.on('guildMemberAdd', member =>{
      let Avatar = member.user.displayAvatarURL()
      if(member.guild.id == 'ID DO SEU SERVIDOR'){
        member.roles.add('CARGO AO ENTRAR')
        let msgrbemvindo = new MessageEmbed()
        .setTitle('__BEM VINDO__')
        .setDescription('Seja bem vindo à SEU SERVIDOR AQUI, MENSAGEM MENSAGEM MENSAGEM    => EMOJI<a:bob:736468612591910953> <= EMOJI . \n \n Temos preços e coisas muito acessíveis, até mesmo BOT grátis => EMOJI<a:cu:736468640874102804> <= EMOJI \n \n Tudo sobre as funcionalidade estão no PATCHES => EMOJI<a:carregando:734979085763084318> <=EMOJI. \n \n  __PARA VALORES, CHAME O </Anjinho>#0009 NO PRIVADO  => EMOJI<a:dindin:736469491604652073> <= EMOJI.__')
        .setThumbnail('https://i.imgur.com/NtR8Jz3.gif')
        .setFooter('by: </Anjinho>#0009')
        .setColor('#FF00FF')
        member.send(msgrbemvindo) //MENSAGEM NO PRIVADO AO ENTRAR NO SERRIVODR
      }
    let canalentrada = new MessageEmbed()
     
        .setTitle('***ENTRADA*** <a:bob:736468612591910953> ')
        .setDescription(`Seja bem vindo ${member} . \n \n __Todas as funcionalidades__ estão em <#725715900208119868> \n \n  Para ***qualquer*** ajuda mais especifica, __abra um TICKET__ <a:carregando:734979085763084318> \n \n __Leia sobre valores__ em <#725180392541519872> <a:dindin:736469491604652073>`)
        .setImage('https://i.imgur.com/NtR8Jz3.gif')
        .setFooter('by: </Anjinho>#0009')
        .setColor('#FF00FF')
      member.guild.channels.cache.get('ID DO SEU CANAL DE ENTRADA').send(canalentrada) //
      
    })
  }
function trocarNomeBot(){
    client.on('message', message =>{
      if(message.content.startsWith(PREFIX+'suamensagemaqui')){ //
        client.user.setUsername('Anjinho')
      }
    })
  }
function transar(){
  client.on('message', message =>{
    
    //Comando que vai ser utilizado
    if(message.content.startsWith(PREFIX+'transar')){
      //Sua foto
      let fototransariano = message.author.displayAvatarURL({format:'png'});
      //Aonde marca o membro que você vai "transar"
      transar = message.mentions.members.first()
      //Se não tiver, ele manda essa mensagem
    if(!transar) return message.reply('Não da pra transar com nada!')
  
  
    //Mensagem que vai enviar após o !transar
  const embedtransar = new Discord.MessageEmbed()
      .setTitle('Transando')
    .setColor('#FF007F')
      .setDescription(`${message.author} ta metendo gostoso com ${transar}`)
    .setImage('https://i.imgur.com/e93P5VV.gif')
      .setTimestamp()
    .setFooter('Só não goza rápido! By: Anjinho#0009')
      .setAuthor(message.author.tag, fototransariano)
  
          //Canal que envia a mensagem, você pode definir um canal só para isso. Me mande mensagem no privado para isso
          message.channel.send(embedtransar)
    }
    //Deixa os créditos pra mim.
    //Código bem basicozão
  })
}
function apagarconvite(){
  client.on("message", async message => {
    //NAO FUI EU QUE CRIEI ESSE CODIGO       NAO FUI EU QUE CRIEI ESSE CODIGO       NAO FUI EU QUE CRIEI ESSE CODIGO       NAO FUI EU QUE CRIEI ESSE CODIGO  
    if (message.channel.type === "dm") return;
    if(message.author.bot) return
    if(message.client.channels.cache.get('')) return
    const regex = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li|club)|discordapp\.com\/invite|discord\.com\/invite)\/.+[a-z]/gi;
  //RegEx com as expressões que normalmente tem na maioria dos links de convites e suas variantes.
    if (regex.exec(message.content)) {
      await message.delete({timeout: 1000});
  //Se o conteúdo da mensagem for um convite, o bot apagará a mensagem após um segundo.
        await message.channel.send(
          `${message.author} **ANJINHO TA PUTO CONTIGO MERMAO, QUER DIVULGAR AQUI?**`
        );
  //Envia um aviso que ele não pode postar convites naquele chat.
    }
    //NAO FUI EU QUE CRIEI ESSE CODIGO       NAO FUI EU QUE CRIEI ESSE CODIGO       NAO FUI EU QUE CRIEI ESSE CODIGO       NAO FUI EU QUE CRIEI ESSE CODIGO       
  });  
}
function bloqueardm(){
  client.once('message', message =>{
    if (message.channel.type == "dm") return message.reply('Fui programado para não responder mensagens no PRIVADO, caso queira que eu seja seu, entre no meu Discord e procure meu dono, Anjinho#0009 discord.gg/fEbwdVD  \n \n ``A partir de hoje, não irei mais te responder seu bobo, afim de economizar dados, e proporcionar uma ótima estabilidade aos meu clientes``');
    })
    //BLOQUEIA DM DO BOT!
}
function marcarbot(){
  client.on('message', message =>{
    //PROTEÇÃO PARA MARCAR O BOT(PODE GERAR UM ERRO CRITICO, CASO MARQUEM, EM ALGUMAS SITUATIONS!)
    if(message.mentions.members.forEach(Anjinho =>{
      if(Anjinho == client.user.id){
        if(Anjinho == false){
          return
        }
        message.channel.send(`MEU PREFIXO É ${PREFIX}, ME MARQUE APENAS PARA ISSO <@${message.author.id}>`)
      } else {
        return
      }
    })){
      
    }
  })
    
}
function perfilpessoa(){
  client.on('message', message =>{
      //MOSTRA PERFIL DA PESSOA!
    if(message.content.startsWith(PREFIX+'perfil')){
      message.delete()
      
      
      let usuario = message.mentions.users.first()
      if(!usuario){
        return message.reply(' mencione alguém')
      } 

        const membro = message.guild.member(usuario)
        const embedperfil = new MessageEmbed()
           .setColor('#FF00FF')     
           .setThumbnail(usuario.displayAvatarURL())         
           .addFields(
              {name: "💻 ID DO USUÁRIO", value:`${usuario.id}`, inline:true},
              {name: "🌎 Status do usuário", value: `${usuario.presence.status}`, inline: true},
              {name: "🎈 Entrou no servidor", value: `${new Intl.DateTimeFormat("pt-br").format(membro.joinedAt)}`, inline: true},
              {name: "🧬 Conta criada na data de:", value:`${new Intl.DateTimeFormat("pt-br").format(usuario.createdAt)}`, inline: true},
              {name: "✏️  Nome do servidor", value: `${message.guild.name}`, inline: true},
              {name: "🔮 Usuário está em jogo?", value: `${usuario.presence.game ? usuario.presence.game.name: 'Nenhum'}`})

             
              message.channel.send(embedperfil)  
    }
  })


}



  /*
  ______      ______    ______      __  __     ______      ____                   ____     __  __      __  __      ____      
/\  _  \    /\__  _\  /\__  _\    /\ \/\ \   /\  _  \    /\  _`\                /\  _`\  /\ \/\ \    /\ \/\ \    /\  _`\    
\ \ \L\ \   \/_/\ \/  \/_/\ \/    \ \ \ \ \  \ \ \L\ \   \ \ \L\ \              \ \ \L\_\\ \ \ \ \   \ \ `\\ \   \ \ \/\_\  
 \ \  __ \     \ \ \     \ \ \     \ \ \ \ \  \ \  __ \   \ \ ,  /               \ \  _\/ \ \ \ \ \   \ \ , ` \   \ \ \/_/_ 
  \ \ \/\ \     \ \ \     \_\ \__   \ \ \_/ \  \ \ \/\ \   \ \ \\ \               \ \ \/   \ \ \_\ \   \ \ \`\ \   \ \ \L\ \
   \ \_\ \_\     \ \_\    /\_____\   \ `\___/   \ \_\ \_\   \ \_\ \_\              \ \_\    \ \_____\   \ \_\ \_\   \ \____/
    \/_/\/_/      \/_/    \/_____/    `\/__/     \/_/\/_/    \/_/\/ /               \/_/     \/_____/    \/_/\/_/    \/___/ 
                                                                                                                            
                                                                                                                            
  */
 mensagemBemVindo()
 trocarNomeBot()
 transar()
 apagarconvite()
 bloqueardm()
 //divulgar()
 marcarbot()
 perfilpessoa()