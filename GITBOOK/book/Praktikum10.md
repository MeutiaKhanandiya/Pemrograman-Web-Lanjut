**PRAKTIKUM 10**
**Praktikum – Bagian 1: Configure the routes**

* Buat project baru yang berisi komponen posts (praktikum http service), form-member (soal uts), navbar, not-found, home
* Jika node_modules belum tersida, install menggunakan npm install
* Buka file app.module.ts. Pastikan komponen pada langkah 1 sudah terdaftar seperti gambar dibawah ini

![](image/Praktikum10/1.png)

* Tambahkan module router pada halaman app.module.ts seperti gambar dibawah ini:

![](image/Praktikum10/2.png)

* Buka halaman navbar.component.html dan tambahkan kode dibawah ini:

![](image/Praktikum10/3.png)

* Buka halaman app.component.html. tambahkan kode dibawah ini:

![](image/Praktikum10/4.png)

* Jalankan dan catat hasilnya (soal no. 1)

![](image/Praktikum10/5.png)

**Praktikum - Bagian 2 : Router Outlet**

* Buka halaman app.component.html dan rubah menjadi seperti dibawah ini:
 
![](image/Praktikum10/6.png)


* Jalankan dan inspect elemen seperti pada gambar dibawah ini

![](image/Praktikum10/7.png)

* Apa yang bisa anda simpulkan? (Soal No 2)
* Jalankan link dibawah ini localhost:4200/form seperti gambar dibawah ini: 
* catat hasilnya (Soaln No. 3)
![](image/Praktikum10/8.png)

* Jalankan link dibawah ini localhost:4200/post seperti gambar dibawah ini:
* catat hasilnya (Soaln No. 4)

![](image/Praktikum10/9.png)

* Jalankan link dibawah ini localhost:4200/coba seperti gambar dibawah ini:
* catat hasilnya (Soaln No. 5)

![](image/Praktikum10/10.png)

* Simpulkan langkah 3, 4 dan 5 (Soal No. 6)
* Jawab : Langkah ini berhasil di jalankan sesuai perintah, namun hasilnya sama.



**Praktikum - Bagian 3 : Add Link**

* Buka halaman navbar.component.html. tambahkan link pada href tiap menu seperti gambar dibawah ini:
 ![](image/Praktikum10/11.png)

* Jalankan, catat dan berikan penjelasan (Soal No. 7)
 ![](image/Praktikum10/12.png)

* Modifikasi href menjadi routerLink pada halaman navbar.component.html seperti gambar dibawah ini:
 
 ![](image/Praktikum10/13.png)

* Jalankan, inspect element, coba link dan cek pada tab network. Catat dan beri penjelasan (Soal No. 8) 

![](image/Praktikum10/14.png)

* Modifikasi class li pada halaman navbar.component.html menjadi seperti pada gambar dibawah ini:

![](image/Praktikum10/15.png)

* Jalankan, catat dan beri penjelasan (Soal No. 9)
 
![](image/Praktikum10/16.png)


**Praktikum - Bagian 4 : Accesing Route Parameter**

* Buat komponen baru dengan nama profile dengan perintah ng g c profile
 ![](image/Praktikum10/17.png)

* Buka app.module.ts dan tambahkan route untuk profile seperti gambar dibawah ini:
 
![](image/Praktikum10/18.png)

* Modifikasi halaman home.component.html menjadi seperti gambar dibawah ini:
 
![](image/Praktikum10/19.png)


* Modifikasi file profile.component.ts menjadi seperti pada gambar dibawah ini:
 
 ![](image/Praktikum10/20.png)

* Jalankan, klik tombol home kemudian kliklink Meutia Khanandiya kemudia inspect element seperti dibawah ini:
 
![](image/Praktikum10/21.png)

![](image/Praktikum10/22.png)

![](image/Praktikum10/23.png)

* Modifikasi file profile.component.ts menjadi seperti pada gambar dibawah ini:
 
![](image/Praktikum10/24.png)


* Jalankan, klik tombol home kemudian klik link Meutia Khanandiya kemudia inspect element. Catat dan berikan penjelasan (Soaln No. 11)
 
![](image/Praktikum10/25.png)


