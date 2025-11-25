# Email Confirmation Kapatma - Adım Adım

## 🎯 Hızlı Çözüm

### Adım 1: Supabase Dashboard'a Git
1. Tarayıcıda şu adresi aç: https://supabase.com/dashboard/project/soewlqmskqmpycaevhoc
2. Giriş yap (eğer yapmadıysan)

### Adım 2: Authentication Settings'e Git
1. Sol menüden **"Authentication"** ikonuna tıkla (kilit simgesi)
2. Üstteki sekmelerden **"Settings"** sekmesine tıkla

### Adım 3: Email Confirmation'ı Kapat
1. Sayfayı aşağı kaydır
2. **"Email Auth"** bölümünü bul
3. **"Enable email confirmations"** yazısının yanındaki toggle'ı **KAPAT** (gri olmalı)
4. Sayfanın altındaki **"Save"** butonuna tıkla

### Adım 4: Eski Kullanıcıyı Sil (Eğer Varsa)
1. Sol menüden **"Authentication"** → **"Users"** sekmesine git
2. `victoriatules2@gmail.com` kullanıcısını bul
3. Sağ taraftaki **"..."** menüsüne tıkla
4. **"Delete user"** seçeneğine tıkla
5. Onayla

### Adım 5: Test Et
1. Uygulamaya dön (`localhost:5173`)
2. Yeni bir hesap oluştur
3. Artık direkt login olabilmelisin! 🎉

## ⚠️ Eğer "Enable email confirmations" Seçeneğini Bulamazsan

Bazen bu ayar farklı yerde olabilir:
- **Authentication** → **Providers** → **Email** → Orada da kontrol et
- Veya **Project Settings** → **Auth** bölümünde olabilir

## 🔧 Alternatif: SQL ile Kapat

Eğer UI'dan bulamazsan, SQL Editor'dan şunu çalıştır:

```sql
-- Email confirmation'ı kapat
UPDATE auth.config 
SET enable_signup = true, 
    enable_email_confirmations = false;
```

Ama bu genelde çalışmaz, en iyisi UI'dan kapatmak.

