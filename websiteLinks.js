
// Mảng chứa các liên kết
var websiteLinks = [
    { name: "FPT Telecom Đà Nẵng", url: "https://fpttelecomdanang.com.vn" },
    { name: "FPT Telecom Edu", url: "https://fpttelecom.edu.vn" },
    { name: "Hoàng Minh Travel", url: "https://hoangminhtravel.com.vn" },
    { name: "Hotline FPT Telecom", url: "https://hotlinefpttelecom.com" },
    { name: "Kính Mát Nam", url: "https://kinhmatnam.net" }
];

// Hàm để hiển thị các liên kết
function displayLinks() {
    var htmlContent = "";
    for(var i = 0; i < websiteLinks.length; i++) {
        htmlContent += '<a href="' + websiteLinks[i].url + '">' + websiteLinks[i].name + '</a><br>';
    }
    document.getElementById("socialLinks").innerHTML = htmlContent; // Cập nhật ID phần tử
}

// Gọi hàm này trong HTML của bạn để hiển thị các liên kết
// Ví dụ: <body onload="displayLinks()">
