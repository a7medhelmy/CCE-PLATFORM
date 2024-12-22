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
function togglePlayPause(button) {
  // الحصول على الفيديو المرتبط بالزر
  var videoId = button.getAttribute("data-video-id");
  var video = document.getElementById(videoId);

  // التبديل بين تشغيل وإيقاف الفيديو
  if (video.paused) {
    video.play(); // تشغيل الفيديو إذا كان متوقفًا
    button.textContent = "Pause"; // تغيير النص إلى "Pause"
  } else {
    video.pause(); // إيقاف الفيديو إذا كان قيد التشغيل
    button.textContent = "Play"; // تغيير النص إلى "Play"
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
  const texts3 = ["Welcome to the website developers page"];
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



   
