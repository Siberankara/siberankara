# SiberAnkara — statik web sitesi başlangıç paketi

Bu klasör; HTML, CSS ve JavaScript ile hazırlanmış, mobil uyumlu, koyu temalı bir kişisel/teknoloji portföyü başlangıç sitesidir.

## Dosyalar
- `index.html`: sayfa içeriği
- `styles.css`: tasarım ve mobil uyumluluk
- `script.js`: mobil menü ve otomatik yıl

## Yayına almadan önce düzenle
1. `index.html` dosyasındaki Hakkında metnini kendine göre güncelle.
2. E-posta adresi `merhaba@siberankara.com` olarak örnek bırakılmıştır; bu adres için ayrıca e-posta hizmeti kurmak gerekir. İstersen şimdilik kendi e-posta adresinle değiştir.
3. Siteyi GitHub deposuna yükleyip Vercel ile yayınlayabilirsin.
4. Vercel projesinde Settings → Domains bölümünden `siberankara.com` ve `www.siberankara.com` ekle. Vercel'in gösterdiği DNS kayıtlarını GoDaddy DNS yönetimine gir. Değerleri proje ekranında verilen güncel değerlere göre kullan; eski kayıtları silmeden önce neye hizmet ettiklerini kontrol et.

## Yerelde önizleme
`index.html` dosyasını tarayıcıda açman yeterlidir.

## V3 Haber sistemi
- `haberler.html`: Tüm haberlerin listelendiği sayfa.
- `haber-sablonu.html`: Yeni haber oluşturmak için kopyalanacak şablon.
- `haberler/`: Tekil haber dosyalarının tutulduğu klasör.

### Yeni haber ekleme
1. `haber-sablonu.html` dosyasını kopyalayın.
2. Kopyayı `haberler` klasörüne taşıyın ve SEO dostu bir ad verin: `ornek-haber-basligi.html`.
3. Yeni dosyada CSS bağlantısını `../styles.css`, ana sayfa bağlantısını `../index.html`, haberler bağlantısını `../haberler.html` yapın.
4. Başlık, kategori, tarih ve metin alanlarını değiştirin.
5. `haberler.html` içine yeni haber kartınızı ekleyip tekil haber dosyasına link verin.
6. Yerelde Live Server ile test edin; ardından GitHub'a commit/push edin.
