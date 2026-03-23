# Duyên Paint - Danh mục Sơn Kiến trúc Cao cấp

Duyên Paint là một ứng dụng web chuyên nghiệp giới thiệu danh mục sơn kiến trúc cao cấp và cung cấp dịch vụ tư vấn chuyên sâu. Ứng dụng tập trung vào việc giới thiệu các dòng sản phẩm từ các thương hiệu hàng đầu thế giới như Dulux, Jotun, Nippon Paint, Kova và TOA.

## 🚀 Tính năng chính

- **Trang chủ chuyên nghiệp:** Giới thiệu các đối tác chiến lược với Logo thương hiệu sắc nét và hiệu ứng tương tác hiện đại.
- **Danh mục sản phẩm:** Hệ thống danh mục sơn đa dạng, giúp người dùng dễ dàng tìm kiếm và lựa chọn.
- **Tư vấn màu sắc:** Công cụ hỗ trợ tư vấn màu sắc chuyên sâu cho các công trình kiến trúc.
- **Thiết kế Responsive:** Giao diện tối ưu hóa cho mọi thiết bị từ điện thoại, máy tính bảng đến máy tính để bàn.
- **Full-Stack Routing:** Sử dụng Express + Vite để hỗ trợ điều hướng SPA mượt mà, không bị lỗi 404 khi truy cập trực tiếp các đường dẫn.

## 🛠️ Công nghệ sử dụng

- **Frontend:** React 19, Vite 6, Tailwind CSS 4.
- **Backend:** Express 4 (Xử lý điều hướng và API).
- **Animation:** Framer Motion (Hiệu ứng chuyển động mượt mà).
- **Icons:** Lucide React.
- **Deployment:** Hỗ trợ cấu hình sẵn cho Vercel và Cloud Run.

## 📦 Cài đặt và Chạy dự án

### 1. Cài đặt dependencies
```bash
npm install
```

### 2. Chạy môi trường phát triển (Development)
```bash
npm run dev
```
Ứng dụng sẽ chạy tại: `http://localhost:3000`

### 3. Build dự án (Production)
```bash
npm run build
```

### 4. Chạy server production
```bash
npm start
```

## 🌐 Triển khai (Deployment)

### Vercel
Dự án đã bao gồm file `vercel.json` để cấu hình **Rewrites**, đảm bảo các đường dẫn như `/catalog`, `/colors` hoạt động chính xác khi truy cập trực tiếp hoặc nhấn F5.

### Cloud Run / Docker
Sử dụng `server.ts` làm entry point để phục vụ các file tĩnh và xử lý routing thông qua Express.

---
© 2026 Duyên Paint. All rights reserved.
