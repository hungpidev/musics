export function downloadSong(currentSong) {
  if (currentSong) {
    const link = document.createElement("a");
    link.href = currentSong.path;
    link.download = currentSong.name;
    link.target = "_blank";
    link.click();
  }
}
