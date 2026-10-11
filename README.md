# PDF Filigran Temizleme — FiligranTemizleyici V2

**Yayıncı: DEMİRHAN ÖZDEMİR** · **Ana dil: Türkçe** · **Platform: Windows x64 · Portable**

![Türkçe](https://img.shields.io/badge/Dil-Türkçe-blue) ![PDF](https://img.shields.io/badge/İşlem-PDF%20Filigran-informational) ![Önizleme](https://img.shields.io/badge/Yayın-Önizleme-orange)

PDF belgelerinde bulunan filigranları inceleyip kaldırma işlemi uygulamak amacıyla hazırlanmış bağımsız masaüstü yazılımı. Belgenin orijinal içeriğinin korunması öncelikli hedeftir; ancak **her filigranın hasarsız kaldırılması garanti edilemez**.

**[⬇ Filigran Temizleme — Portable Sürümü İndir](https://github.com/rusebound/PDF-Watermark-Remover/releases/tag/initial-binary)**

## Ne sağlar?

| Kullanıcı ihtiyacı | Hedeflenen fayda |
|---|---|
| PDF üzerindeki tekrar eden filigranları incelemek | Belgedeki filigran adaylarını belirlemek |
| Dikkat dağıtan arka plan yazıları | Uygun filigranların kaldırılmasını denemek |
| Çok sayfalı belgeleri düzenlemek | Belgenin okunabilirliğini artırmaya çalışmak |
| Belgede asıl içeriği korumak | Filigran kaldırma sonucunu gözle değerlendirmek |

## Temel özellikler

- **Belge seçme:** İncelenecek PDF dosyasını uygulamaya ekleme.
- **Filigran incelemesi:** İşlenebilecek öğeleri tespit etmeyi hedefleyen çalışma.
- **Kaldırma adımı:** Uygun filigranları kaldırmaya yönelik işlev.
- **Taşınabilir dağıtım:** Windows uygulaması ZIP olarak sunulur; tüm destek dosyaları birlikte çıkarılır.
- **Sonuç denetimi:** Çıktıyı kaynak belgeyle karşılaştırarak kontrol etme önerilir.

> **Teknik uyarı:** PDF filigranı ayrı bir nesne, vektörel çizim, metin veya taranmış görüntünün parçası olabilir. İşlem sonucu filigranın türüne ve yerleşimine bağlıdır. Bu sürüm için bütün PDF'lerde çalışan kusursuz otomatik tespit veya kayıpsız temizleme iddiası yoktur.

## Nasıl kullanılır?

1. [Sürüm indirme sayfasından](https://github.com/rusebound/PDF-Watermark-Remover/releases/tag/initial-binary) `FILIGRAN.TEMIZLEME.zip` dosyasını indirin.
2. ZIP'i tamamen çıkarın; `_internal` klasörünü programla birlikte koruyun.
3. `FiligranTemizleyiciV2/FiligranTemizleyiciV2.exe` dosyasını çalıştırın.
4. PDF belgesini seçin ve uygulamanın sunduğu tarama/inceleme adımlarını uygulayın.
5. Kaldırma işlemi sonrasında yeni PDF'yi açarak **metin, resim, tablo, imza ve sayfa düzenini** orijinaliyle karşılaştırın.

## Önemli güvenlik ve kullanım kuralları

- **Yalnızca düzenleme yetkiniz bulunan PDF belgelerinde kullanın.**
- Önemli belgelerin önce yedeğini alın.
- İmza, QR kod, tarih, resmi işaret veya belgeyi doğrulayan öğeleri silmek belgenin geçerliliğini etkileyebilir.
- Taranmış görüntü üzerindeki filigran kaldırılırken alttaki bilgi de zarar görebilir.
- Bu yayım için farklı gerçek belgelerde bağımsız kaldırma başarısı ve içerik bütünlüğü doğrulanmadı.

## Sık sorulan sorular

**Tüm filigranlar %100 silinir mi?** Hayır. Filigranın belge içindeki yapısına göre sonuç değişir.

**Çıktı birebir aynı kalır mı?** Görsel ve yapısal bütünlük garanti değildir; kontrol etmek gerekir.

**Kurulum gerekli mi?** Paket portable'dır; ZIP'in tamamı çıkarılıp Windows `.exe` çalıştırılır. Kurum bilgisayarlarında güvenlik politikası çalıştırmayı engelleyebilir.

## Teknik paket ve lisans

`FiligranTemizleyiciV2.exe` ile çalışma zamanı ve üçüncü taraf bağımlılıkları dağıtılır. **GitHub deposu binary dağıtım ve tanıtım amaçlıdır; özgün kaynak kodun eksiksiz yayımlandığı iddia edilmez.** Lisans ve güvenlik uyumluluğu ayrı inceleme gerektirir.

## SHA-256 doğrulaması

`FILIGRAN.TEMIZLEME.zip`:

`C2E018809B5DCD573F62CF3CE393614E1ED10E5629FF65ED598DFA0323E144A2`

PowerShell: `Get-FileHash '.\FILIGRAN.TEMIZLEME.zip' -Algorithm SHA256`

**Yayın durumu:** Önizleme. GitHub yükleme ve dosya bütünlüğü doğrulandı; bağımsız uçtan uca gerçek PDF testi ve kod imzası doğrulanmadı.

**Destek:** [GitHub Issues](https://github.com/rusebound/PDF-Watermark-Remover/issues) — gerçek/hassas PDF belgelerini herkese açık bildirimlere yüklemeyin.

---

**Yayıncı: DEMİRHAN ÖZDEMİR** · [GitHub profili](https://github.com/rusebound)

**English (short summary):** Portable Windows PDF watermark inspection and removal utility. Use only on documents you are authorized to modify; perfect cleanup and content preservation are not guaranteed.
