let activeToasts = []; // Mảng lưu trữ tất cả các toast đang hiển thị

export function createToast(message, type = "info", duration = 3000) {
  // Ẩn tất cả các toast đang hiển thị ngay lập tức
  activeToasts.forEach((toast) => removeToast(toast, true));

  // Tạo phần tử toast mới
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  // Tạo nội dung cho toast
  const content = document.createElement("span");
  content.textContent = message;

  // Tạo nút đóng
  const closeButton = document.createElement("button");
  closeButton.textContent = "✖";
  closeButton.className = "close-toast";

  // Gắn sự kiện click để đóng toast khi người dùng nhấn vào nút đóng
  closeButton.addEventListener("click", () => {
    removeToast(toast);
  });

  // Thêm nội dung và nút đóng vào toast
  toast.appendChild(content);
  toast.appendChild(closeButton);

  // Thêm toast vào body
  document.body.appendChild(toast);

  // Thêm toast mới vào mảng activeToasts
  activeToasts.push(toast);

  // Hiển thị toast với hiệu ứng
  requestAnimationFrame(() => {
    toast.classList.add("show-toast");
  });

  // Tự động ẩn toast sau một khoảng thời gian
  setTimeout(() => {
    removeToast(toast);
  }, duration);
}

function removeToast(toast, instant = false) {
  // Nếu cần ẩn ngay lập tức, xóa phần tử mà không cần hiệu ứng
  if (instant) {
    if (toast.parentNode) {
      document.body.removeChild(toast);
    }
    activeToasts = activeToasts.filter((t) => t !== toast); // Loại bỏ toast khỏi mảng
  } else {
    // Hiển thị hiệu ứng ẩn toast
    toast.classList.remove("show-toast");
    setTimeout(() => {
      if (toast.parentNode) {
        document.body.removeChild(toast);
      }
      activeToasts = activeToasts.filter((t) => t !== toast); // Loại bỏ toast khỏi mảng
    }, 500); // Thời gian để hoàn tất hiệu ứng ẩn
  }
}

// Hàm tiện ích để hiển thị thông báo thành công
export function showSuccessToast(message) {
  createToast(message, "success");
}

// Hàm tiện ích để hiển thị thông báo lỗi
export function showErrorToast(message) {
  createToast(message, "error");
}

// Hàm tiện ích để hiển thị thông báo thông tin
export function showInfoToast(message) {
  createToast(message, "info");
}
