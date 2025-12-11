const path = require('path');
const fs = require('fs').promises;
const { glob } = require('glob');

// Optimize edilecek klasörler
const imagePaths = [
  'src/assets/**/*.{jpg,jpeg,png}',
  'src/staff/**/*.{jpg,jpeg,png}',
  'src/gallery/**/*.{jpg,jpeg,png}'
];

async function optimizeImages() {
  console.log('🖼️  Resim optimizasyonu başlatılıyor...\n');

  try {
    // ESM modüllerini dynamic import ile yükle
    const imagemin = (await import('imagemin')).default;
    const imageminMozjpeg = (await import('imagemin-mozjpeg')).default;
    const imageminPngquant = (await import('imagemin-pngquant')).default;
    const imageminWebp = (await import('imagemin-webp')).default;

    // Tüm resim dosyalarını bul
    const allImages = [];
    for (const pattern of imagePaths) {
      const files = await glob(pattern);
      allImages.push(...files);
    }

    let totalOptimized = 0;
    let totalWebp = 0;

    // JPEG/JPG dosyalarını optimize et
    const jpegImages = allImages.filter(file => /\.(jpg|jpeg)$/i.test(file));
    
    if (jpegImages.length > 0) {
      console.log(`📸 ${jpegImages.length} JPEG/JPG dosyası optimize ediliyor...`);
      
      for (const imagePath of jpegImages) {
        const files = await imagemin([imagePath], {
          plugins: [
            imageminMozjpeg({
              quality: 85,
              progressive: true
            })
          ]
        });

        if (files.length > 0 && files[0].data) {
          await fs.writeFile(imagePath, files[0].data);
          totalOptimized++;
        }
      }
      console.log(`✅ ${jpegImages.length} JPEG/JPG dosyası optimize edildi`);
    }

    // PNG dosyalarını optimize et
    const pngImages = allImages.filter(file => /\.png$/i.test(file));
    
    if (pngImages.length > 0) {
      console.log(`\n🖼️  ${pngImages.length} PNG dosyası optimize ediliyor...`);
      
      for (const imagePath of pngImages) {
        const files = await imagemin([imagePath], {
          plugins: [
            imageminPngquant({
              quality: [0.6, 0.8]
            })
          ]
        });

        if (files.length > 0 && files[0].data) {
          await fs.writeFile(imagePath, files[0].data);
          totalOptimized++;
        }
      }
      console.log(`✅ ${pngImages.length} PNG dosyası optimize edildi`);
    }

    // WebP formatına dönüştürme
    console.log('\n🌐 WebP formatına dönüştürülüyor...');
    const allImageFiles = [...jpegImages, ...pngImages];
    
    for (const imagePath of allImageFiles) {
      const files = await imagemin([imagePath], {
        plugins: [
          imageminWebp({
            quality: 85
          })
        ]
      });

      if (files.length > 0 && files[0].data) {
        const webpPath = imagePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        await fs.writeFile(webpPath, files[0].data);
        totalWebp++;
      }
    }

    console.log(`✅ ${totalWebp} WebP dosyası oluşturuldu`);

    console.log('\n✨ Resim optimizasyonu tamamlandı!');
    console.log(`📊 Toplam: ${totalOptimized} optimize edilmiş dosya`);
    console.log(`🌐 Toplam: ${totalWebp} WebP dosyası`);

  } catch (error) {
    console.error('❌ Optimizasyon hatası:', error);
    process.exit(1);
  }
}

// Script çalıştır
optimizeImages();
