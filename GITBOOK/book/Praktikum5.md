**JOBSHEET 5**

**--Directive--**

**6.1 ngIf**

* Directive ngIf digunakan untuk sebuah kondisi percabangan. Berikut contoh penggunaan ngIf.

* Buka File

![](image/Praktikum5/1.jpg)

* Buka File

![](image/Praktikum5/2.jpg)

* Jalankan localhost maka hasilnya seperti berikut

![](image/Praktikum5/3.jpg)

* Jika array pada app.component.ts (courses=[];) dikosongkan maka hasilnya seperti berikut

![](image/Praktikum5/4.jpg)

* Contoh kedua  menggunakan else: 
* Buka file app.component.html modifikasi kodenya menjadi berikut

![](image/Praktikum5/5.jpg)

* Jalankan localhost dengan kondisi array pada app.component  
o dengan array kosong

![](image/Praktikum5/6.jpg)

* Hasilnya :

![](image/Praktikum5/7.jpg)

* Cara Ketiga : 
* Buka file app.component.html modifikasi kodenya menjadi berikut

![](image/Praktikum5/8.jpg)

* Jalankan localhost dengan kondisi array pada app.component  
o dengan array kosong

![](image/Praktikum5/9.jpg)

* Hasilnya :

![](image/Praktikum5/10.jpg)

* O dengan array ada isi

![](image/Praktikum5/11.jpg)

**6.1 Hidden Property**

* Buka app.component.html

![](image/Praktikum5/12.jpg)

* Jalankan localhost maka hasilnya seperti berikut

![](image/Praktikum5/13.jpg)

* Selain contoh diatas kita juga dapat memberikan property seperti berikut

![](image/Praktikum5/14.jpg)

* Dengan catatan pada app.component.ts pada courses terdapat array courses dengan nilai 1 dan 2

![](image/Praktikum5/15.jpg)

* Jalankan localhost (berbeda hasil jika pada array courses tidak terdapat isinya)

![](image/Praktikum5/16.jpg)

* Jika kita inspect element maka akan terlihat property hidden tidak terdapat kondisi true ataupun false.

![](image/Praktikum5/17.jpg)

* Berbeda jika kita menggunakan ngIF terdapat bindings dengan nilai false

![](image/Praktikum5/18.jpg)

**6.1 ngSwitchCase**
* Buka file app.component.html modifikasi codenya menjadi seperti berikut

![](image/Praktikum5/19.jpg)

* Buka file app.component.ts tambahkan property viewMode (line 12)

![](image/Praktikum5/20.jpg)

* Menambahkan source pada angular.json

![](image/Praktikum5/21.jpg)

* Run localhost maka hasilnya seperti berikut saat diklik list view maka akan muncul list view content dan jika kita pilih ListView maka akan tampil tulisan List View Content

![](image/Praktikum5/22.jpg)

**6.1 ngFor**

* Buka app.component.ts property CoursesFor yang berisikan array (line 12)

![](image/Praktikum5/23.jpg)

* Buka file app.component.html tambahkan directive ngFor pada element li  

![](image/Praktikum5/24.jpg)

* Jika dijalankan maka hasilnya seperti berikut

![](image/Praktikum5/25.jpg)

* Kita juga dapat memberi tanda tertentu pada index yang bernilai ganjil dengan menggunakan isEven https://angular.io/api/common/NgForOf  

![](image/Praktikum5/26.jpg)

* Hasilnya

![](image/Praktikum5/27.jpg)

**6.1 ngFor dan change Detection**

* Pada percobaan ini kita akan menambahkan sebuah data array pada coursesFor 
* Tambahkan button pada app.component.html (line 64) 

![](image/Praktikum5/28.jpg)

* Tambahkan method onAdd()

![](image/Praktikum5/29.jpg)

* Sehingga hasilnya seperti berikut (jika kita tekan button add maka akan ditambahkan sebuah data courses 6)

![](image/Praktikum5/30.jpg) ![](image/Praktikum5/31.jpg)

* Setelah kita berhasil menambahkan sebuah data array pada courseFor maka untuk selanjutnya kita akan mencoba untuk melakukan penghapusan data.
* Tambahkan sebuah method onRemove pada app.component.ts

![](image/Praktikum5/32.jpg)

* Buka app.component.html dan tambahkan sebuah button untuk menghapus (line69)

![](image/Praktikum5/33.jpg)

* Hasilnya seperti berikut (pada saat button remove diclick maka salah satu data akan hilang sementara)

![](image/Praktikum5/34.jpg)![](image/Praktikum5/35.jpg)

* Selain itu kita juga dapat melakukan perubahan status menggunakan event click  
* Buka file app.component.html tambahkan button (line 70)

![](image/Praktikum5/36.jpg)

* Buka file app.component.ts buatlah sebuah method onChange dengan parameter item dan didalam method tersebut adanya perubahan string menjadi updated

![](image/Praktikum5/37.jpg)

* Hasilnya

![](image/Praktikum5/38.jpg) ![](image/Praktikum5/39.jpg)

**6.1 ngFor dan trackby**

* Buka file app.component.ts buatlah sebuah method dengan nama loadCourses (line 38) tapi sebelumnya buat sebuah property dengan nama coursesForOne (line 37)

![](image/Praktikum5/40.jpg)

* Buka file app.component.html dan tambahkan code seperti pada gambar

![](image/Praktikum5/41.jpg)

* Hasilnya saat button diclick

![](image/Praktikum5/42.jpg) ![](image/Praktikum5/43.jpg)

* Sekarang kita lakukan analisa buka inspect element, saat button belum diclick seperti pada gambar berikut

![](image/Praktikum5/44.jpg)

* Dan saat button diklik maka element ul akan muncul seperti pada gambar berikut

![](image/Praktikum5/45.jpg)

* Oleh karena itu kita membutuhkan TrackBy yang nanti digunakan untuk mengecek jika data sudah ada maka button tidak perlu melakukan actionnya kembali
* Untuk menambahkan TrackBy dengan cara menambahkan pada app.component.html pada directive ngFor

![](image/Praktikum5/46.jpg)

* Selain itu tambahkan juga sebuah method trackCourse dengan parameter index dan itemone pada app.component.ts

![](image/Praktikum5/47.jpg)

**6.1 The leading Asterik**

* Leading asterik adalah tanda asterisk yang ada pada directive seperti *ngFor dsb. adapun maksud leading asterisk pada sebuah directive adalah bahwa kita memberi tahu angular untuk menulis ulang markup tertentu, seperti code berikut  

![](image/Praktikum5/48.jpg)

* Pada gambar diatas terdapat sebuah directive *ngIF dimana fungsi dari asterisk pada ngIf adalah memberi tahu angular untuk menulis ulang markup dari div tersebut menggunakan ng template dengan menggunakan property binding  seperti  pada gambar berikut

![](image/Praktikum5/49.jpg)

**6.1 ngClass**

* Jika pada percobaan sebelumnya kita membuat component favorite menggunakan 2 class binding yaitu class binding fa-star dan fa-star-o seperti pada gambar berikut

![](image/Praktikum5/50.jpg)

* Selain menggunakan class binding seperti diatas kita juga dapat menggunakan attribute directive class seperti berikut

![](image/Praktikum5/51.jpg)

**6.1 Custom Directive**

* Pertama kita harus membuat directive dengan nama input-format terlebih dahulu dengan perintah seperti berikut

![](image/Praktikum5/52.jpg)

* Jika directive berhasil digenerate maka kita pastikan di app.module.ts pada @NgModule terdapat nama directive yang kita buat tadi

![](image/Praktikum5/53.jpg)

* Buka input-format.directive.ts dan tambahkan decorator HostListener seperti pada gambar berikut

![](image/Praktikum5/54.jpg)

* Buka file app.component.html dan tambahakn code berikut

![](image/Praktikum5/55.jpg)

* Buka file input-format.directive.ts dan modifikasi codenya menjadi berikut

![](image/Praktikum5/56.jpg)

* Buka file app.component.html dan tambahkan property binding dengan nama format

![](image/Praktikum5/57.jpg)

* Buka file input-format.directive.ts tambahkan decorator input dan modifikasi codenya seperti pada gambar berikut

![](image/Praktikum5/58.jpg)

* Cat:format disini adalah kondisi di app.component.html

![](image/Praktikum5/59.jpg)

* Buka app.component.hml modifikasi codenya menjadi berikut

![](image/Praktikum5/60.jpg)

* Buka input-format.directive.ts dan tambahkan decorator input dengan parameter appInputFormat

![](image/Praktikum5/61.jpg)

* Jika dijalankan sebagai contoh kita memasukkan kalimat dengan huruf kecil dan pada saat kita tab maka akan berubah menjadi huruf besar semua seperti berikut

![](image/Praktikum5/62.jpg)
![](image/Praktikum5/63.jpg)