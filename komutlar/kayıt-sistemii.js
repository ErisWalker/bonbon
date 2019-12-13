const Discord = require('discord.js');


exports.run = function(client, message) {
//Komutun Kodları
  const embed = new Discord.RichEmbed()
  .setDescription('Merhaba sana kayıt sistemini ayarlamanda yardımcı olucam. Aşşağıdaki adımları izlersen kayıt sistemini başarılı bir şekilde açabilirsin.')
  .setTitle('Kayıt Sistemi Nasıl Ayarlanır?')
  .addField('Kayıt Sistemini Açmak İçin;','**+kayıt-sistemi aç**', false)
  .addField('Kayıt Kanalını Ayarlamak İçin;','**+kayıt-kanal #kayıt**', false)
  .addField('Kayıt Olanlara Verilecek Rolü Ayarlamak İçin;','**+kayıt-rol-ayarla @Üye**', false)
  message.channel.send(embed)
};

exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: ['k'],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'kayıt-sistemi',//Komutun adı (Komutu girerken lazım olucak)
  description: '',//Komutun Açıklaması
  usage: '' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}
//Coding by -Rhing#5860