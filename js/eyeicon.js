const pwShowHide = document.querySelectorAll(".eye-icon"); // تحديد أيقونات العين

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    // تحديد الحقل المرتبط بهذه الأيقونة باستخدام الأقرب في DOM
    let passwordField = eyeIcon.previousElementSibling;

    if (passwordField.type === "password") {
      passwordField.type = "text";
      eyeIcon.classList.replace("bx-hide", "bx-show");
    } else {
      passwordField.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
    }
  });
});
