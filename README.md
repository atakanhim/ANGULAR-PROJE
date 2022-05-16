# *1-PROJE EKRAN GORUNTULERİ*
### There are 2 AUTHORIZATIONS in this project
<i>Admin custom screens</i>
> Main Screen
![adminMainScrean](https://user-images.githubusercontent.com/52455771/168697049-217d8c51-2921-4d65-b4a7-d0345ffdcdb9.png)
Product Add
![newProduct](https://user-images.githubusercontent.com/52455771/168697060-9c352f8e-7c69-4ed0-8bdf-5241cc64de1c.png)
Product Update&Delete
![admin urun guncelle ekranı](https://user-images.githubusercontent.com/52455771/168697047-53294934-7c46-4cd2-aead-2aac532fa825.png)

<i>User Screens</i>
> Main Screen
![userMainScrean](https://user-images.githubusercontent.com/52455771/168697065-aecf9246-0519-4bc6-b9bd-f308df098529.png)
Login Screen
![loginS](https://user-images.githubusercontent.com/52455771/168697058-3cffd438-4a3c-448a-82ba-716edc86ee34.png)
Register Screen
![RegisterScreen](https://user-images.githubusercontent.com/52455771/168697064-751fec7a-9440-46d4-bf09-6785e36721c5.png)
Cart Screen
![cardScren](https://user-images.githubusercontent.com/52455771/168697054-f3b1152b-1754-482e-a040-1eafa2b14450.png)
Empyt Cart Screen
![EmpytyCard](https://user-images.githubusercontent.com/52455771/168697055-1fb64139-6c23-42a0-b9bc-29e48acf6bf7.png)
Cart Details
![c1](https://user-images.githubusercontent.com/52455771/168697052-19c74c98-c5a9-4113-9fd7-860eee4491e4.png)
![c2](https://user-images.githubusercontent.com/52455771/168697053-807bcd20-c609-44ff-ab9a-05fb8dcf0726.png)

# *2-PROJE NASIL ÇALIŞTIRILIR*

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



