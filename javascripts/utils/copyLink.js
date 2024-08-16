export function copyLink(link) {
  navigator.clipboard
    .writeText(link)
    .then(() => {
      console.log("Bài hát đã được tải xuống thành công!");
    })
    .catch((err) => {
      console.error("Không thể sao chép: ", err);
    });
}

export function copyCurrentPageLink() {
  const link = window.location.href;
  copyLink(link);
}
