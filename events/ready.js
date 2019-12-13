const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.tag} ismi ile giriş yapıldı!`);
  console.log(`${client.users.size} kullanıcı, ${client.guilds.size} sunucu!!`);
  const link = "https://discordapp.com/oauth2/authorize?client_id="+client.user.id+"&scope=bot&permissions=8";
  console.log(`Davet linkim : [${link}]!!`)
  client.user.setStatus("idle");
const kk = client.users.size;
    setInterval(function() {

        

        client.user.setGame("I'm watching you 👽");
        }, 2 * 9500);
}
//Coding by -Rhing#5860f