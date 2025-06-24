# Hepsiİş

Hepsiİş, kullanıcıların tek bir platformda CV'lerini yükleyip farklı iş ilanı sitelerinden toplanan ilanları arayabileceği modern bir iş bulma asistanıdır.
Bu depo, temel servislerin ve ön yüz uygulamasının iskeletini içerir. Kullanıcılar CV yükleme, ilan arama, ilan detayı görüntüleme ve favori ilanlarını saklama gibi özellikleri kullanabilir.

## Monorepo Yapısı

```
frontend/            Next.js + React + Tailwind
backend/
  api-gateway/       NestJS GraphQL federation
  user-service/      NestJS + PostgreSQL (Prisma)
  cv-service/        FastAPI + spaCy
  job-service/       Node.js + Puppeteer
  notification-service/ Node.js + SendGrid
infra/
  terraform/         AWS kaynakları
  k8s/               Helm chart örnekleri
  pipeline/          GitHub Actions
```

## Kurulum

Her servis kendi bağımlılıklarını içerir. Örneğin frontend'i başlatmak için:

```bash
cd frontend
npm install
npm run dev
```

Benzer şekilde diğer servislerde `npm install` veya `pip install -r requirements.txt` kullanılır.

### Önemli Diziler

- `frontend/src/pages/upload-cv` – CV yükleme ekranı
- `frontend/src/pages/search` – filtreli ilan arama
- `frontend/src/pages/job/[id]` – ilan detayları
- `frontend/src/pages/favorites` – favori ilanlar
- `frontend/src/pages/profile` – kullanıcı ayarları

## Deployment

Proje Docker ve Kubernetes ile dağıtılabilir. `infra/k8s` altında örnek manifestler, `infra/terraform` altında AWS kaynak tanımları bulunur. `infra/pipeline/ci.yml` dosyası temel CI sürecini tanımlar.

### Örnek API Kullanımı

- `GET /jobs` – Job service üzerinden iş listesi
- `GET /jobs/:id` – Seçili iş ilanı

## Testler

Her serviste uygun test komutları tanımlanmalıdır (ör. `npm test`). Örnek projede test bulunmamaktadır.

## UI Tasarımı

Renk paleti ve tipografi Tailwind üzerinden tanımlıdır. Figma üzerinde hazırlanan tasarım mock-up'larına [link](https://www.figma.com/file/placeholder) üzerinden erişilebilir.
