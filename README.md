## 🎯 Quiz React App (ndyudev)

<div align="center">

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-9.x-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-black?style=for-the-badge)

**Ứng dụng Quiz học React – gọn nhẹ, nhanh, UI rõ ràng.**

</div>

Ứng dụng Quiz nhỏ xây bằng React + Vite trong quá trình học React. Người dùng trả lời câu hỏi trắc nghiệm, xem kết quả, xem lại và làm lại bài.

---

### Mục lục
- [Demo](#demo)
- [Tính năng](#-tính-năng-chính)
- [Công nghệ](#-công-nghệ-sử-dụng)
- [Cài đặt & chạy](#-cách-chạy-dự-án)
- [Cấu trúc](#-cấu-trúc-thư-mục)
- [Roadmap](#-roadmap--lưu-ý-cải-thiện)
- [Giấy phép](#-giấy-phép)

---

### Demo
- Dev: chạy `npm run dev` rồi truy cập địa chỉ cục bộ hiển thị trên terminal.
- Có thể deploy dễ dàng lên Netlify/Vercel (build: `vite build`).

### 🧩 Tính năng chính
- **Hiển thị câu hỏi theo từng bước**: điều hướng Quay lại / Kế tiếp / Hoàn thành.
- **Chọn đáp án**: trạng thái lựa chọn rõ ràng, hiện thông báo đúng/sai.
- **Tính điểm**: tổng số câu đúng trên tổng số câu.
- **Xem lại / Làm lại**: sau khi hoàn thành quiz có thể xem lại hoặc reset để làm lại.

### 🛠️ Công nghệ sử dụng
- **React 18** với **Vite** (cấu hình module type ESM).
- **ESLint** với plugin React/React Hooks để kiểm tra code.
- **CSS thuần** trong `src/index.css` cho giao diện gọn nhẹ.

### 📁 Cấu trúc thư mục
```
quiz-react-js-app-ndyduev/
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/
│  │  ├─ Quiz.jsx
│  │  └─ Resutl.jsx
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ package.json
├─ vite.config.js
└─ README.md
```

### 🚀 Cách chạy dự án
Yêu cầu: Node.js 18+ và pnpm/npm/yarn.

1) Cài dependencies:
```bash
npm install
```

2) Chạy môi trường phát triển (HMR):
```bash
npm run dev
```

3) Build sản phẩm:
```bash
npm run build
```

4) Xem bản build:
```bash
npm run preview
```

### 📦 Scripts
- `dev`: chạy Vite dev server.
- `build`: build production với Vite.
- `preview`: serve bản build để kiểm tra.
- `lint`: chạy ESLint.

### 🧭 Roadmap / Lưu ý cải thiện
- Đổi tên component `Resutl.jsx` thành `Result.jsx` để tránh typo và dễ đọc hơn.
- Tối ưu tính điểm: nên tính khi hoàn thành (dựa trên `userAnswers`) để tránh cộng điểm nhiều lần khi người dùng quay lại câu trước.
- Tách dữ liệu câu hỏi (`quizData`) sang file riêng `src/data/quizData.js` để dễ mở rộng/quản lý.
- Thêm trạng thái “Xem lại” hiển thị đáp án đúng/sai cho từng câu.
- (Tùy chọn) Lưu tiến độ vào `localStorage`, thêm đồng hồ đếm ngược, thanh tiến trình.

### ⚠️ Lưu ý về logic chấm điểm hiện tại
- Ứng dụng đang cộng điểm khi thay đổi lựa chọn. Để chính xác hơn, nên tính tổng điểm một lần khi hoàn thành Quiz (hoặc mỗi lần điều hướng dựa theo `userAnswers`).
- Khi xem lại câu cũ, cần tránh tự động cộng lại điểm nếu chỉ khôi phục lựa chọn.

### 🤝 Đóng góp
- Fork dự án, tạo nhánh mới, gửi Pull Request với mô tả ngắn gọn thay đổi.
- Lưu ý format code nhất quán và chạy `npm run lint` trước khi gửi.

### 📄 Giấy phép
Mục đích học tập. Bạn có thể fork/sửa để thực hành.
