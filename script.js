document.addEventListener("DOMContentLoaded", function () {

    // Stahování modpacku
    const downloadBtn = document.getElementById("download-btn");
    if (downloadBtn) {
        downloadBtn.addEventListener("click", function () {
            window.location.href = "modpack.zip";
        });
    }
});
