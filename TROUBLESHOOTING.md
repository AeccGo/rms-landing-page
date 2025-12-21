# Troubleshooting

## Lỗi: ReferenceError: module is not defined

Nếu bạn gặp lỗi này khi chạy `npm run dev`, hãy thử các bước sau:

### Bước 1: Xóa cache và node_modules
```bash
cd rms-landing-page
rm -rf node_modules .astro dist package-lock.json
```

Trên Windows:
```cmd
cd rms-landing-page
rmdir /s /q node_modules
rmdir /s /q .astro
rmdir /s /q dist
del package-lock.json
```

### Bước 2: Cài đặt lại dependencies
```bash
npm install
```

### Bước 3: Chạy lại
```bash
npm run dev
```

### Nếu vẫn lỗi, thử với pnpm:
```bash
npm install -g pnpm
pnpm install
pnpm dev
```

### Hoặc với yarn:
```bash
npm install -g yarn
yarn install
yarn dev
```

## Lỗi khác

Nếu gặp lỗi khác, hãy:
1. Kiểm tra version Node.js (cần >= 18.0.0)
2. Xóa `.astro` folder và thử lại
3. Kiểm tra file `package.json` có đúng dependencies không

