
// script.js
document.getElementById("login-form").addEventListener("submit", function(event){
  event.preventDefault(); 
    // جلوگیری از ارسال فرم

    // گرفتن مقادیر ورودی 
     var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // ذخیره مقادیر در Local Storage (در مرورگر)
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // نمایش پیغام موفقیت
  alert("ورود ناموفق بود لطفا دوباره تلاش کنید. ");

    // برای پاک کردن فیلدها پس از ورود
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}
);