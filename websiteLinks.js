
// Mảng chứa các liên kết
var websiteLinks = [
    { name: "Cửa nhựa Composite", url: "https://nhanghe.com/cua-nhua-composite/" },
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
