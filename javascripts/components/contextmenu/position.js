export function positionContextMenu(event, contextMenu) {
  const menuWidth = contextMenu.offsetWidth;
  const menuHeight = contextMenu.offsetHeight;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;

  const margin = 20; // Khoảng cách 20px từ mép cửa sổ
  const offset = 15; // Khoảng cách tối thiểu 15px từ con trỏ chuột

  let left = event.clientX + scrollX + offset;
  let top = event.clientY + scrollY + offset;

  // Kiểm tra nếu menu vượt qua mép phải cửa sổ
  if (left + menuWidth > windowWidth + scrollX - margin) {
    left = event.clientX + scrollX - menuWidth - offset;
  }

  // Kiểm tra nếu menu vượt qua mép dưới cửa sổ
  if (top + menuHeight > windowHeight + scrollY - margin) {
    top = event.clientY + scrollY - menuHeight - offset;
  }

  // Điều chỉnh vị trí nếu menu bị vượt qua mép trái cửa sổ
  if (left < scrollX + margin) {
    left = scrollX + margin;
  }

  // Điều chỉnh vị trí nếu menu bị vượt qua mép trên cửa sổ
  if (top < scrollY + margin) {
    top = scrollY + margin;
  }

  // Thiết lập vị trí cuối cùng cho menu
  contextMenu.style.left = `${left}px`;
  contextMenu.style.top = `${top}px`;
  contextMenu.style.zIndex = 10000; // Đảm bảo menu hiển thị trên các phần tử khác
}
