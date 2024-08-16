export function copyLink(link) {
  navigator.clipboard
    .writeText(link)
    .then(() => {
      alert("Link đã được sao chép vào clipboard!");
    })
    .catch((err) => {
      console.error("Không thể sao chép: ", err);
    });
}

export function copyCurrentPageLink() {
  const link = window.location.href;
  copyLink(link);
}
