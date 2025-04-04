document.addEventListener("DOMContentLoaded", function () {

    // Stahování modpacku
    const downloadBtn = document.getElementById("download-btn");
    if (downloadBtn) {
        downloadBtn.addEventListener("click", function () {
            window.location.href = "modpack.zip";
        });

        // Stahování modpacku
    const downloadBtn = document.getElementById("download-btn-java");
    if (downloadBtn) {
        downloadBtn.addEventListener("click", function () {
            window.location.href = "https://download.oracle.com/java/17/archive/jdk-17.0.12_windows-x64_bin.exe";
        });
    }
});
