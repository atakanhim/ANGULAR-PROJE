# *PROJE NASIL ÇALIŞTIRILIR*

# BİLGİSİYARINIZDA NODE.JS YUKLU OLMASI LAZIM GİDİN YÜKLEYİN VE GELİN

###  CMD Açın ve alttakileri yazın
   `npm i -g json-server` ve
   `npm install -g @angular/cli` 
   
 Daha sonra proje olusturmak istediginiz klasöre gidin cd kullanarak ama ben cahilim diyosan oldugun yerde kal ben seni yönlendircem
`cd desktop` yaz.
>Masaüstündesin şuan masasın yani

  Daha sonra
`ng new my-app`  yaz.
>my-app adında bir angular projesi olusturdun tebrikler kardşeim bu sana 2 tane soru soracak bunların önemi aslında var ama oluşan dosyaları silecegin için yok yes yes de geç.

 >İndirdiğin zip dosyasındaki dosyaları kopyala/kes masaüstündeki dosyayanın içine yapıştır.
 
 >Şuan proje hazır peki nasıl başlatıcan
 
 >Önce json serveri başlatıp verileri bir çek kanka o yüzden

  >visual code ile proje dosyasını bir aç , terminala gel 
	terminal powershell ile açılabilir ama bende cmd ile çalışıyor bilmiyorum orda hata alıyom
	o yüzden cmd açın sonra bunları yazın :
  
 ` npm install alertifyjs --save ` Projeye ekstra olarak yükledigim Alertify Kütüphanesini ekliyoruz
 
 `cd db` ile database klasörün içine giriyoruz ve
 `json-server shop.json` json-server aktifediyoruz 3000. portta
- yeni bir terminal aç öbürünü kapatma açık kalsın 
- açtığın terminalin yolu en son dosya adı olsun zaten öyledir büyük ihtimal dc klasörünün içinde olma

`ng serve --open` server açılacak bekleyin ve bitti bu kaaa


