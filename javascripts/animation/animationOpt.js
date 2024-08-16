export function animationContextMenu(
  event,
  fromOptionButton = false,
  contextMenu
) {
  let mouseX, mouseY;

  if (fromOptionButton) {
    // Lấy vị trí của nút option
    const buttonRect = event.currentTarget.getBoundingClientRect();
    mouseX = buttonRect.left + buttonRect.width / 2;
    mouseY = buttonRect.top + buttonRect.height / 2;
  } else {
    // Lấy vị trí của con trỏ chuột
    mouseX = event.clientX;
    mouseY = event.clientY;
  }

  // Tính toán vị trí của context menu so với cửa sổ
  const rect = contextMenu.getBoundingClientRect();

  let transformOrigin = "";

  // Xác định vị trí của nút option hoặc con trỏ chuột so với menu ngữ cảnh
  if (mouseX < rect.left + rect.width / 2) {
    if (mouseY < rect.top + rect.height / 2) {
      transformOrigin = "top left";
    } else {
      transformOrigin = "bottom left";
    }
  } else {
    if (mouseY < rect.top + rect.height / 2) {
      transformOrigin = "top right";
    } else {
      transformOrigin = "bottom right";
    }
  }

  // Đặt thuộc tính transformOrigin cho menu
  contextMenu.style.transformOrigin = transformOrigin;

  // Hiệu ứng animation khi menu xuất hiện
  if (contextMenu.classList.contains("show")) {
    contextMenu.classList.remove("show");
    setTimeout(() => {
      contextMenu.classList.add("show");
    }, 100);
  } else {
    contextMenu.classList.add("show");
  }
}
