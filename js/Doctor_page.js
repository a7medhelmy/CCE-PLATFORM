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




  // الحصول على اسم المستخدم من sessionStorage
    const loggedInUser = sessionStorage.getItem("loggedInUser");

    // النصوص المتحركة مع اسم المستخدم
    const texts1 = [
      `Hello ${loggedInUser}`,
      "Welcome to the Website of Chemistry and Criminal Evidence",
      "We hope you enjoy exploring the site"
    ];
    const typingElement1 = document.getElementById("typing-text");

    const texts2 = [
      `Hello ${loggedInUser}`,
      "Welcome to the Website of Chemistry and Criminal Evidence",
      "We hope you enjoy exploring the site"
    ];
    const typingElement2 = document.getElementById("text");

    const texts3 = [
      "Welcome to the first page",
      "Please explore the content"
    ];
    const typingElement3 = document.getElementById("text1");

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




function updateTexts() {
  const loggedInUser = sessionStorage.getItem("loggedInUser");

  if (loggedInUser) {
    const managerName = document.getElementById("manager-name");
    const programName = document.getElementById("program-name");
    const SubjectName = document.getElementById("Subject-Name");

    if (managerName && programName && SubjectName) {
      // تغيير النصوص بناءً على اسم المستخدم
      if (loggedInUser === "Dr.warda") {
        managerName.textContent = "Dr.Warda";
        programName.textContent = "Level Three";
        SubjectName.textContent = "Software Engineering";
      } else if (loggedInUser === "ahmed helmy") {
        managerName.textContent = "Ahmed Helmy (Student)";
        programName.textContent = "Student's Program";
        SubjectName.textContent = "General Studies";
      } else if (loggedInUser === "Dr.amr awad") {
        managerName.textContent = "Dr. Amr Awad (Manager)";
        programName.textContent = "Management Program";
        SubjectName.textContent = "Business Administration";
      }
    } else {
      console.error("Elements not found in the HTML.");
    }
  } else {
    console.error("No logged-in user found in sessionStorage.");
  }
}

// استدعاء تحديث النصوص عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', updateTexts);  // يضمن تحميل العناصر أولاً
