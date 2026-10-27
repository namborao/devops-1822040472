// Hiển thị đồng hồ thời gian thực
function updateClock() {
    const now = new Date();
    document.getElementById("clock").textContent =
        "Bây giờ là: " + now.toLocaleString("vi-VN");
}
updateClock();
setInterval(updateClock, 1000);

// Xử lý sự kiện khi bấm nút
let count = 0;
document.getElementById("btn").addEventListener("click", function () {
    count++;
    document.getElementById("message").textContent =
        "Xin chào! Bạn đã bấm " + count + " lần. CI/CD hoạt động tốt!";
});
