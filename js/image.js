let fileInputCount = 1; // عداد لإعطاء IDs فريدة للملفات

// دالة لتحديث الصف عند رفع الصورة
function updateRow(input) {
  const fileInput = input;
  const file = fileInput.files[0];

  if (file) {
    const fileName = file.name; // اسم الصورة
    const date = new Date().toLocaleDateString(); // عرض التاريخ فقط
    const row = fileInput.closest("tr"); // تحديد الصف الذي يحتوي على الزر

    // تحديث تاريخ الرفع فقط في العمود الأول
    row.cells[0].innerHTML = `<small>${date}</small>`; // تاريخ

    // تغيير زر "Add Image" إلى اسم الصورة بعد رفعها
    const addFileButton = row.querySelector(".add-image-btn");
    addFileButton.textContent = fileName; // عرض اسم الصورة بدلاً من "Add Image"
    addFileButton.disabled = true; // تعطيل الزر بعد رفع الصورة

    // إضافة الأزرار "Uploading"، و "Delete"، و "Clear" فقط إذا لم تكن موجودة بالفعل
    if (!row.cells[3].querySelector("button")) {
      row.cells[3].innerHTML = `<button class="button-folder" onclick="uploadFile(this)">Uploading</button>`;
    }
    if (!row.cells[4].querySelector("button")) {
      row.cells[4].innerHTML = `<button class="button-folder" onclick="deleteRow(this)">Delete</button>`;
    }
    if (!row.cells[5].querySelector("button")) {
      row.cells[5].innerHTML = `<button class="button-folder" onclick="clearRow(this)">Clear</button>`;
    }

    // إضافة صف جديد بعد رفع الصورة ليتمكن المستخدم من رفع صورة أخرى
    addNewRow();
  }
}

// دالة لإضافة صف جديد
function addNewRow() {
  const tableBody = document.getElementById("students-table-body");

  // تحقق إذا كان هناك صف فارغ بالفعل (لم يتم رفع صورة فيه)
  const lastRow = tableBody.rows[tableBody.rows.length - 1];
  if (lastRow && lastRow.cells[1].innerHTML === "") {
    return; // لا تضف صفاً جديداً إذا كان هناك صف فارغ
  }

  const newRow = `
    <tr class="student-row">
      <td><small>-</small></td>
      <td>
        <input
            placeholder="Enter student name"
            class="input"
            name="studentName"
            type="text"
        />
      </td>
      <td>
        <!-- هنا سيتم إضافة اختيار المستويات -->
        <fieldset>
          <div class="button-group">
            <input type="radio" id="level-1-${fileInputCount}" name="level-${fileInputCount}" />
            <label for="level-1-${fileInputCount}">Level 1</label>
          </div>
          <div class="button-group">
            <input type="radio" id="level-2-${fileInputCount}" name="level-${fileInputCount}" />
            <label for="level-2-${fileInputCount}">Level 2</label>
          </div>
          <div class="button-group">
            <input type="radio" id="level-3-${fileInputCount}" name="level-${fileInputCount}" />
            <label for="level-3-${fileInputCount}">Level 3</label>
          </div>
        </fieldset>
      </td>
      <td>
        <button class="button-folder add-image-btn" onclick="document.getElementById('image-input-${fileInputCount}').click()">
          Add Image
        </button>
        <input type="file" class="image-input" id="image-input-${fileInputCount}" accept="image/*" style="display: none;" onchange="updateRow(this)" />
      </td>
      <td>
        <button class="button-folder" onclick="uploadFile(this)">Uploading</button>
      </td>
      <td>
        <button class="button-folder" onclick="deleteRow(this)">Delete</button>
      </td>
      <td>
        <button class="button-folder" onclick="clearRow(this)">Clear</button>
      </td>
    </tr>
  `;
  tableBody.insertAdjacentHTML("beforeend", newRow);
  fileInputCount++; // زيادة العدّاد لإعطاء ID جديد
}

// دالة لمسح الصف
function clearRow(button) {
  const tableBody = document.getElementById("students-table-body");
  const currentRow = button.closest("tr");

  // التحقق إذا كان هناك صف واحد فقط في الجدول
  if (tableBody.rows.length === 1) {
    button.disabled = true; // تعطيل زر "Clear" إذا كان هناك صف واحد فقط
    return; // عدم تنفيذ عملية الحذف
  }

  // التحقق إذا كان هذا هو آخر صف في الجدول
  if (currentRow === tableBody.rows[tableBody.rows.length - 1]) {
    button.disabled = true; // تعطيل زر "Clear" إذا كان آخر صف
    return; // عدم تنفيذ عملية الحذف
  }

  // مسح الصف بالكامل
  currentRow.remove();
}

// دالة لتحميل الصورة (محاكاة)
function uploadFile(button) {
  const row = button.closest("tr");
  const fileInput = row.querySelector(".image-input");
  const file = fileInput.files[0];

  if (!file) {
    alert("Please select a file before uploading.");
    return;
  }

  const fileName = file.name;
  const date = new Date().toLocaleDateString(); // تاريخ الرفع

  // محاكاة عملية الرفع
  button.textContent = "Uploading...";
  button.disabled = true;

  setTimeout(() => {
    // محاكاة انتهاء الرفع
    button.textContent = "Uploaded";
    alert(`The file "${fileName}" has been uploaded successfully.`);

    // تعطيل التعديل بعد الرفع
    row.querySelector(".add-image-btn").disabled = true;
  }, 2000); // وقت الانتظار لمحاكاة الرفع (2 ثانية)
}

// دالة لحذف الصورة
function deleteRow(button) {
  const row = button.closest("tr");
  const fileInput = row.querySelector(".image-input");

  // مسح البيانات التي تم رفعها
  fileInput.value = ""; // مسح الملف
  row.querySelector(".add-image-btn").textContent = "Add Image"; // إعادة النص إلى "Add Image"
  row.querySelector(".add-image-btn").disabled = false; // تفعيل الزر مرة أخرى
  row.cells[0].innerHTML = "<small>-</small>"; // إعادة التاريخ

  alert("The file has been deleted.");
}


