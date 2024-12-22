const swiper = new Swiper(".slider-wrapper", {
  loop: true, // تكرار الشريط عند الوصول إلى النهاية
  grabCursor: true, // تغيير المؤشر إلى شكل يد للإشارة إلى إمكانية السحب
  spaceBetween: 30, // المسافة بين الشرائح
  slidesPerView: 3, // عرض 3 بطاقات في كل مرة
  slidesPerGroup: 3, // تمرير 3 بطاقات في كل نقرة

  // إعدادات النقاط (Pagination)
  pagination: {
    el: ".swiper-pagination", // تحديد العنصر الذي يحتوي على النقاط
    clickable: true, // السماح بالنقر على النقاط للانتقال بين الشرائح
    dynamicBullets: true, // استخدام نقاط متحركة
  },

  // إعدادات أزرار التنقل (Navigation)
  navigation: {
    nextEl: ".swiper-button-next", // زر الانتقال إلى الشريحة التالية
    prevEl: ".swiper-button-prev", // زر العودة إلى الشريحة السابقة
  },

  // إعدادات العرض التفاعلي بناءً على حجم الشاشة
  breakpoints: {
    0: { slidesPerView: 1, slidesPerGroup: 1 }, // شريحة واحدة على الشاشات الصغيرة
    768: { slidesPerView: 2, slidesPerGroup: 2 }, // شريحتان على الشاشات المتوسطة
    1024: { slidesPerView: 3, slidesPerGroup: 3 }, // ثلاث شرائح على الشاشات الكبيرة
  },
});

// دالة لتشغيل أو إيقاف الفيديو
function togglePlayPause(videoId) {
  var video = document.getElementById(videoId);
  if (video.paused) {
    video.play(); // تشغيل الفيديو إذا كان متوقفًا
  } else {
    video.pause(); // إيقاف الفيديو إذا كان قيد التشغيل
  }
}

// دالة لتكبير الفيديو إلى وضعية الشاشة الكاملة
function toggleFullscreen(videoId) {
  var video = document.getElementById(videoId);
  if (video.requestFullscreen) {
    video.requestFullscreen(); // وضع الشاشة الكاملة
  } else if (video.mozRequestFullScreen) {
    // للمتصفحات مثل Firefox
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
    // للمتصفحات مثل Chrome, Safari, Opera
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    // للمتصفحات مثل IE/Edge
    video.msRequestFullscreen();
  }
}

// التأثير النصي المتحرك عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  // النصوص للواجهة الطلاب
  const texts1 = [
    "Hello name the student",
    "Welcome to the Website of Chemistry and Criminal Evidence",
    "We hope you enjoy exploring the site",
  ];
  const typingElement1 = document.getElementById("typing-text");

  // النصوص للواجهة الدكاتره
  const texts2 = [
    "Hello name the Doctor",
    "Welcome to the Website of Chemistry and Criminal Evidence",
    "We hope you enjoy exploring the site",
  ];
  const typingElement2 = document.getElementById("text");
  // النصوص للواجهة  الاولي
  const texts3 = ["Excellence in Forensic Science Integration"];
  const typingElement3 = document.getElementById("text1");
  // النصوص للواجهة المدير
  const texts4 = [
    "Hello Program Manager",
    "Welcome to the Website of Chemistry and Criminal Evidence",
    "We look forward to your guidance and support throughout the program",
  ];
  const typingElement4 = document.getElementById("text2");

  // دالة كتابة النصوص العامة
  function typeText(texts, typingElement) {
    let index = 0;
    let textIndex = 0;
    let isDeleting = false;

    function type() {
      if (!typingElement) return; // تأكد من وجود العنصر

      const currentText = texts[textIndex];
      if (!isDeleting) {
        typingElement.textContent += currentText.charAt(index);
        index++;
        if (index === currentText.length) {
          isDeleting = true;
          setTimeout(type, 1000); // انتظار قبل الحذف
          return;
        }
      } else {
        typingElement.textContent = currentText.substring(0, index - 1); // الحذف التدريجي
        index--;
        if (index === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length; // الانتقال للنص التالي
        }
      }
      setTimeout(type, isDeleting ? 100 : 100); // سرعة الكتابة والحذف
    }
    type();
  }

  // استدعاء الدالة للنصوص والعناصر المختلفة
  typeText(texts1, typingElement1);
  typeText(texts2, typingElement2);
  typeText(texts3, typingElement3);
  typeText(texts4, typingElement4);
});

// استماع لاختيار ملف وإظهار تنبيه باسم الملف
document
  .getElementById("file-input")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      alert("تم اختيار الملف: " + file.name); // عرض رسالة تنبيه باسم الملف
    }
  });

// دالة رفع الملف وتحديث العنصر بالمعلومات
function uploadFile() {
  const fileInput = document.getElementById("file-input");
  const file = fileInput.files[0];
  const boxingCell = document.getElementById("boxing");

  if (file) {
    const fileName = file.name;
    const fileURL = URL.createObjectURL(file);

    // تحديث النص بداخل العنصر لعرض الملف ورابطه
    boxingCell.innerHTML = `
      <strong>Boxing</strong>
      <a href="${fileURL}" target="_blank">${fileName}</a>
    `;
  }
}


function validateForm() {
  const passwordField = document.getElementById("password");
  const confirmPasswordField = document.getElementById("confirm-password");

  const password = passwordField.value;
  const confirmPassword = confirmPasswordField.value;



  // التحقق من مطابقة كلمات المرور
  if (password !== confirmPassword) {
    alert("Passwords do not match. Please try again.");
    return false; // منع الإرسال
  }

  // إذا تم التحقق بنجاح
  alert("Account created successfully!");
  
  // إعادة التوجيه إلى صفحة تسجيل الدخول
  window.location.href = "../html/login.html";
  
  return false; // منع الإرسال الافتراضي للنموذج
}


// التحقق من بيانات تسجيل الدخول
function validateLogin(event) {
  event.preventDefault(); // منع إرسال النموذج لتجنب إعادة تحميل الصفحة

  const studentID = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // تحقق بسيط من اسم المستخدم وكلمة المرور
  const users = [
    {
      id: "123456789",
      password: "pass1",
      role: "Dr.warda",
      redirect: "../html/Doctor_page.html",
    },
    {
      id: "807039632",
      password: "pass2",
      role: "Gehaan helmy",
      redirect: "../html/Student_page.html",
    },
    {
      id: "001122334",
      password: "pass3",
      role: "Dr.amr awad",
      redirect: "../html/manegment_page.html",
    },
  ];

  const user = users.find(
    (user) => user.id === studentID && user.password === password
  );

  if (user) {
    sessionStorage.setItem("loggedInUser", user.role); 
    window.location.href = user.redirect; 
  } else {
    alert("Incorrect Student ID or Password"); 
  }
}

