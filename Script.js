function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("يجب ملء جميع الحقول!");
        return false;
    }

    if (username === "admin" && password === "1234") {
        alert("تم تسجيل الدخول بنجاح!");
        return true;  // هنا يمكن إعادة توجيه المستخدم إلى صفحة أخرى إذا كان تسجيل الدخول صحيحًا
    } else {
        alert("اسم المستخدم أو كلمة المرور غير صحيحة!");
        return false;
    }
}