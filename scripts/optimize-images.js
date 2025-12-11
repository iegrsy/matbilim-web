const path = require('path');
const fs = require('fs').promises;
const { glob } = require('glob');
const { execFile } = require('child_process');
const { promisify } = require('util');

const execFileAsync = promisify(execFile);

// Komut satırından klasör argümanı al
const folderPath = process.argv[2];

if (!folderPath) {
  console.error('❌ Lütfen bir klasör yolu belirtin!');
  console.error('Kullanım: node optimize-images.js <klasör-yolu>');
  process.exit(1);
}

async function optimizeImages() {
  console.log('🖼️  Görüntü dönüştürme başlatılıyor...\n');
  console.log(`📁 Klasör: ${folderPath}\n`);

  try {
    // JPEG/JPG dosyalarını bul (alt klasörler dahil)
    // Windows path'lerini normalize et ve forward slash kullan
    const normalizedPath = folderPath.replace(/\\/g, '/');
    const imagePattern = `${normalizedPath}/**/*.{jpg,jpeg}`;
    const jpegImages = await glob(imagePattern, { 
      recursive: true,
      absolute: true 
    });

    if (jpegImages.length === 0) {
      console.log('⚠️  Belirtilen klasörde JPEG dosyası bulunamadı.');
      return;
    }

    console.log(`📸 ${jpegImages.length} JPEG/JPG dosyası dönüştürülüyor (1080px yükseklik)...\n`);

    let totalOptimized = 0;
    let totalSkipped = 0;
    let totalErrors = 0;

    // JPEG/JPG dosyalarını ffmpeg ile 1080px yüksekliğe ölçekle
    for (const imagePath of jpegImages) {
      try {
        // Dosyanın varlığını kontrol et
        try {
          await fs.access(imagePath);
        } catch {
          totalSkipped++;
          console.log(`⚠️  ${path.basename(imagePath)} bulunamadı`);
          continue;
        }

        const fileName = path.basename(imagePath);
        const normalizedImagePath = path.resolve(imagePath);
        const dirName = path.dirname(normalizedImagePath);
        const tempOutputPath = path.join(dirName, `_temp_${fileName}`);
        
        // ffmpeg komutunu çalıştır: yüksekliği 1080px'e ölçekle
        // -y flag'i ile output dosyasını otomatik üzerine yaz
        await execFileAsync('ffmpeg', [
          '-i', normalizedImagePath,
          '-vf', 'scale=-1:1080',
          '-y', // Output dosyasını otomatik üzerine yaz
          tempOutputPath
        ], {
          stdio: 'pipe' // ffmpeg'in verbose çıktısını gizle
        });

        // Geçici dosyayı orijinal dosyanın üzerine yaz
        await fs.rename(tempOutputPath, normalizedImagePath);
        totalOptimized++;
        console.log(`✅ ${fileName} dönüştürüldü (1080px yükseklik)`);
      } catch (error) {
        totalErrors++;
        // Geçici dosya varsa sil
        const tempPath = path.join(path.dirname(imagePath), `_temp_${path.basename(imagePath)}`);
        try {
          await fs.unlink(tempPath);
        } catch {}
        console.error(`❌ ${path.basename(imagePath)} dönüştürülemedi:`, error.message);
      }
    }

    console.log(`\n✨ Dönüştürme tamamlandı!`);
    console.log(`📊 Toplam: ${totalOptimized}/${jpegImages.length} dosya dönüştürüldü`);
    if (totalSkipped > 0) {
      console.log(`⚠️  ${totalSkipped} dosya atlandı`);
    }
    if (totalErrors > 0) {
      console.log(`❌ ${totalErrors} dosyada hata oluştu`);
    }

  } catch (error) {
    console.error('❌ Dönüştürme hatası:', error);
    console.error('💡 ffmpeg kurulu mu? Sistem PATH\'inde olmalı.');
    process.exit(1);
  }
}

// Script çalıştır
optimizeImages();
