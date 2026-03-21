# 📊 Analytics Setup Guide

## Langkah 1: Buat Google Analytics Account
1. Buka: https://analytics.google.com
2. Login dengan Gmail Anda
3. Klik "Start measuring"
4. Isi Account Name: "Batasku Cloud"
5. Isi Property Name: "Batasku Cloud ERP"
6. Pilih timezone: "Indonesia (Jakarta)"
7. Pilih currency: "Indonesian Rupiah (IDR)"
8. Klik "Next" dan "Create"

## Langkah 2: Dapatkan Measurement ID
1. Setelah create property, Anda akan dapat Measurement ID
2. Format: G-XXXXXXXXXX (contoh: G-ABC123DEF4)
3. Copy ID ini

## Langkah 3: Update Website Code
1. Buka file: `apps/web/index.html`
2. Cari: `G-FKZZQSJE5P`
3. Replace dengan ID baru:
   ```html
   <!-- Sebelum -->
   gtag('config', 'G-FKZZQSJE5P');
   
   <!-- Sesudah (updated) -->
   gtag('config', 'G-3J0X3CXCCJ');
   ```

## Langkah 4: Verifikasi Tracking
1. Deploy website Anda
2. Buka website Anda di browser
3. Buka Google Analytics → Real-time reports
4. Anda harus melihat 1 active user (Anda sendiri)

## 📈 Yang Bisa Anda Lihat di Dashboard

### Real-time Reports (Saat Ini)
- **Active Users**: Pengunjung yang sedang online
- **Page Views**: Halaman yang sedang dibuka
- **Locations**: Asal pengunjung
- **Traffic Sources**: Dari mana mereka datang

### Audience Reports (Demografi)
- **Total Users**: Total pengunjung
- **New vs Returning**: Pengunjung baru vs returning
- **Age & Gender**: Demografi usia & gender
- **Location**: Kota & negara pengunjung
- **Language**: Bahasa yang digunakan

### Acquisition Reports (Sumber Traffic)
- **Organic Search**: Dari Google search
- **Direct**: Ketik URL langsung
- **Social**: Dari social media
- **Referral**: Dari website lain

### Behavior Reports (Perilaku)
- **Page Views & Sessions**: Halaman paling populer
- **Average Session Duration**: Lama kunjungan
- **Bounce Rate**: Persentase yang langsung keluar
- **Events**: Button clicks, form submissions

### Conversions (Goal Tracking)
- **Demo Requests**: Klik "Request Demo"
- **Button Clicks**: CTA interactions
- **Blog Engagement**: Artikel yang dibaca

## 🎯 Cara Pakai Sehari-hari

### Cek Harian (5 menit)
1. Buka Google Analytics
2. Lihat Real-time → Active users
3. Lihat Audience → Overview (total visitors hari ini)
4. Lihat Acquisition → Traffic sources

### Cek Mingguan (15 menit)
1. Lihat Audience → Demographics (siapa audience Anda)
2. Lihat Behavior → Site content → halaman paling populer
3. Lihat Conversions → Events (apa yang paling banyak diklik)

### Cek Bulanan (30 menit)
1. Export reports untuk business review
2. Analisis trend pertumbuhan visitor
3. Identifikasi halaman dengan bounce rate tinggi
4. Planning content berdasarkan popular pages

## 📱 Mobile App
Google Analytics juga punya mobile app:
- **Android**: Google Analytics di Play Store
- **iOS**: Google Analytics di App Store

## ⚠️ Privacy Note
- Pengunjung website TIDAK bisa melihat data analytics
- Hanya Anda (admin) yang bisa akses dashboard
- Data bersifat pribadi dan anonim
- Compliance dengan GDPR & privacy laws

## 🆘 Troubleshooting
Jika data tidak muncul:
1. Pastikan Measurement ID sudah benar
2. Tunggu 24-48 jam untuk data pertama
3. Cek browser console untuk error
4. Pastikan tidak ada ad blocker yang aktif
