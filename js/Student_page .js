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










document.addEventListener("DOMContentLoaded", function () {
  // جلب البيانات المخزنة من localStorage
  const storedData = localStorage.getItem("uploadedBook");

  if (storedData) {
    const bookData = JSON.parse(storedData);

    // تحديث العناصر في الصفحة لعرض المعلومات
    const bookNameCell = document.getElementById("bookName");
    const subjectNameCell = document.getElementById("subjectName");
    const downloadButton = document.getElementById("downloadButton");

    bookNameCell.textContent = bookData.fileName;
    subjectNameCell.textContent = bookData.subjectName;

    // إظهار زر التنزيل وتفعيل الرابط
    downloadButton.style.display = "inline-block"; // إظهار الزر
    downloadButton.onclick = function () {
      const link = document.createElement("a");
      link.href = bookData.filePath; // مسار الملف المخزن
      link.download = bookData.fileName; // اسم الملف عند التنزيل
      link.click(); // تفعيل التنزيل
    };
  } else {
    alert("No file uploaded yet.");
  }
});


// عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", function () {
    const storedGrade = localStorage.getItem("uploadedGrade");
    const tableBody = document.getElementById("grades-table-body");

    if (storedGrade) {
        const gradeData = JSON.parse(storedGrade);
        tableBody.innerHTML = `
            <tr>
                <td>${gradeData.date}</td>
                <td><strong>${gradeData.subjectName}</strong></td>
                <td><strong>${gradeData.fileName}</strong></td>
            </tr>
        `;
    } else {
        tableBody.innerHTML = `
            <tr>
                <td>-</td>
                <td><strong>No grades uploaded</strong></td>
                <td>-</td>
            </tr>
        `;
    }
    
});
document.addEventListener("DOMContentLoaded", function () {
    const storedGrade = localStorage.getItem("uploadedBook4");
    const tableBody = document.getElementById("semester-work-grades-table-body");

    if (storedGrade) {
        const bookData = JSON.parse(storedGrade);
        tableBody.innerHTML = `
            <tr>
                <td>${bookData.date}</td>
                <td><strong>${bookData.subjectName}</strong></td>
                <td><strong>${bookData.fileName}</strong></td>
            </tr>
        `;
    } else {
        tableBody.innerHTML = `
            <tr>
                <td>-</td>
                <td><strong>No grades uploaded</strong></td>
                <td>-</td>
            </tr>
        `;
    }
    
});
document.addEventListener("DOMContentLoaded", function () {
    const storedGrade = localStorage.getItem("uploadedBook3");
    const tableBody = document.getElementById("practical-degrees-table-body");

    if (storedGrade) {
        const bookData = JSON.parse(storedGrade);
        tableBody.innerHTML = `
            <tr>
                <td>${bookData.date}</td>
                <td><strong>${bookData.subjectName}</strong></td>
                <td><strong>${bookData.fileName}</strong></td>
            </tr>
        `;
    } else {
        tableBody.innerHTML = `
            <tr>
                <td>-</td>
                <td><strong>No grades uploaded</strong></td>
                <td>-</td>
            </tr>
        `;
    }
    
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
    const studentName = document.getElementById("student-name");
    const levelName = document.getElementById("Level-name");

    if (studentName && levelName) {
      // تغيير النصوص بناءً على اسم المستخدم
      if (loggedInUser === "Gehaan helmy") {
        studentName.textContent = "Gehaan Helmy ";
        levelName.textContent = "Level Three";
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






