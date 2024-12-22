let fileInputCount = 1; // عداد لإعطاء IDs فريدة للملفات

function updateRow(input) {
  const fileInput = input;
  const fileName = fileInput.files[0]?.name || "No file selected";
  const date = new Date().toLocaleDateString(); // عرض التاريخ فقط
  const row = fileInput.closest("tr"); // تحديد الصف الذي يحتوي على الزر

  // تحديث الصف الذي تم الضغط فيه
  row.cells[0].innerHTML = `<small>${date}</small>`; // تاريخ
  row.cells[1].innerHTML = `<strong>${fileName}</strong>`; // اسم الملف

  // تغيير زر "Add File" إلى "File Added" أو أي شيء آخر بعد رفع الملف
  const addFileButton = row.querySelector("button");
  addFileButton.textContent = "File Added";
  addFileButton.disabled = true; // تعطيل الزر بعد رفع الملف

  // إضافة زر "Uploading" و "Clear" في نفس الصف
  row.cells[3].innerHTML = `<button class="button-folder" onclick="uploadFile()">Uploading</button>`;
  row.cells[4].innerHTML = `<button class="button-folder" onclick="deleteFile()">Delete</button>`;
  row.cells[5].innerHTML = `<button class="button-folder" onclick="clearRow(this)">Clear</button>`;

  // إضافة صف جديد بعد رفع الملف ليتمكن المستخدم من رفع ملف آخر
  addNewRow();
}

function addNewRow() {
  const tableBody = document.getElementById("file-table-body");

  // تحقق إذا كان هناك صف فارغ بالفعل (لم يتم رفع ملف فيه)
  const lastRow = tableBody.rows[tableBody.rows.length - 1];
  if (
    lastRow &&
    lastRow.cells[1].innerHTML === "<strong>No file selected</strong>"
  ) {
    return; // لا تضف صفاً جديداً إذا كان هناك صف فارغ
  }

  const newRow = `
    <tr>
      <td><small>-</small></td>
      <td><strong>No file selected</strong></td>
      <td>
        <button class="button-folder" onclick="document.getElementById('file-input-${fileInputCount}').click()">
          Add File
        </button>
        <input type="file" class="file-input" id="file-input-${fileInputCount}" style="display: none;" onchange="updateRow(this)" />
      </td>
      <td>
        <button class="button-folder" onclick="uploadFile()">Uploading</button>
      </td>
      <td>
        <button class="button-folder" onclick="deleteFile()">Delete</button>
      </td>
      <td>
        <button class="button-folder" onclick="clearRow(this)">Clear</button>
      </td>
    </tr>
  `;
  tableBody.insertAdjacentHTML("beforeend", newRow);
  fileInputCount++; // زيادة العدّاد لإعطاء ID جديد
}

function clearRow(button) {
  const tableBody = document.getElementById("file-table-body");
  const rows = tableBody.rows;

  const currentRow = button.closest("tr");

  // إذا كان آخر صف في الجدول
  if (rows.length === 1 || currentRow === rows[rows.length - 1]) {
    // مسح الملف فقط من آخر صف وليس الصف نفسه
    currentRow.cells[1].innerHTML = `<strong>No file selected</strong>`;
    currentRow.cells[0].innerHTML = `<small>-</small>`;
    const addFileButton = currentRow.querySelector("button");
    addFileButton.textContent = "Add File"; // إعادة تفعيل الزر
    addFileButton.disabled = false; // تفعيل الزر ليتمكن المستخدم من رفع ملف جديد
  } else {
    // حذف الصف بالكامل
    currentRow.remove();
  }
}



function deleteFile() {
  alert("Deleting file...");
  // يمكنك إضافة كود لحذف الملف من الخادم هنا
}

function uploadFile() {
  const button = event.target;
  const row = button.closest("tr");
  const fileInput = row.querySelector(".file-input");
  const file = fileInput.files[0];

  if (!file) {
    alert("Please select a file before uploading.");
    return;
  }

  const fileName = file.name; // اسم الملف
  const subjectName = "Subject Name"; // يمكن استبداله باسم المادة
  const date = new Date().toLocaleDateString(); // تاريخ الرفع

  // محاكاة عملية الرفع
  button.textContent = "Uploading...";
  button.disabled = true;

  setTimeout(() => {
    // محاكاة انتهاء الرفع
    button.textContent = "Uploaded";
    alert(`The file "${fileName}" has been uploaded successfully.`);

    // تخزين البيانات في localStorage
    const bookData = {
      fileName: fileName,
      subjectName: subjectName,
      date: date,
    };
    localStorage.setItem("uploadedBook", JSON.stringify(bookData));
  }, 2000); // وقت الانتظار لمحاكاة الرفع (2 ثانية)
}










let fileInputCount2 = 1; // عداد للجدول الثاني

function updateRow2(input) {
  const fileInput = input;
  const fileName = fileInput.files[0]?.name || "No file selected";
  const date = new Date().toLocaleDateString(); // عرض التاريخ فقط
  const row = fileInput.closest("tr");

  row.cells[0].innerHTML = `<small>${date}</small>`;
  row.cells[1].innerHTML = `<strong>${fileName}</strong>`;

  const addFileButton = row.querySelector("button");
  addFileButton.textContent = "File Added";
  addFileButton.disabled = true;

  row.cells[3].innerHTML = `<button class="button-folder" onclick="uploadFile2()">Uploading</button>`;
  row.cells[4].innerHTML = `<button class="button-folder" onclick="deleteFile2()">Delete</button>`;
  row.cells[5].innerHTML = `<button class="button-folder" onclick="clearRow2(this)">Clear</button>`;

  addNewRow2();
}

function addNewRow2() {
  const tableBody = document.getElementById("file-table-body-2");
  const newRow = `
        <tr>
            <td><small>-</small></td>
            <td><strong>No file selected</strong></td>
            <td>
                <button class="button-folder" onclick="document.getElementById('file-input-2-${fileInputCount2}').click()">
                    Add File
                </button>
                <input type="file" class="file-input" id="file-input-2-${fileInputCount2}" style="display: none;" onchange="updateRow2(this)" />
            </td>
            <td>
                <button class="button-folder" onclick="uploadFile2()">Uploading</button>
            </td>
            <td>
                <button class="button-folder" onclick="deleteFile2()">Delete</button>
            </td>
            <td>
                <button class="button-folder" onclick="clearRow2(this)">Clear</button>
            </td>
        </tr>`;
  tableBody.insertAdjacentHTML("beforeend", newRow);
  fileInputCount2++;
}

function clearRow2(button) {
  const tableBody = document.getElementById("file-table-body-2");
  const rows = tableBody.rows;

  const currentRow = button.closest("tr");

  if (rows.length === 1 || currentRow === rows[rows.length - 1]) {
    currentRow.cells[1].innerHTML = `<strong>No file selected</strong>`;
    currentRow.cells[0].innerHTML = `<small>-</small>`;
    const addFileButton = currentRow.querySelector("button");
    addFileButton.textContent = "Add File";
    addFileButton.disabled = false;
  } else {
    currentRow.remove();
  }
}



function deleteFile2() {
  alert("Deleting file for Table 2...");
}


  
function uploadFile2() {
  const button = event.target;
  const row = button.closest("tr");
  const fileInput = row.querySelector(".file-input");
  const file = fileInput.files[0];

  if (!file) {
    alert("Please select a file before uploading.");
    return;
  }

  const fileName = file.name; // اسم الملف
  const subjectName = "Math"; // اسم المادة (يمكن تغييره حسب الحاجة)
  const date = new Date().toLocaleDateString(); // تاريخ الرفع

  // محاكاة عملية الرفع
  button.textContent = "Uploading...";
  button.disabled = true;

  setTimeout(() => {
    // محاكاة انتهاء الرفع
    button.textContent = "Uploaded";
    alert(`The file "${fileName}" has been uploaded successfully.`);

    // تخزين البيانات في localStorage
    const gradeData = {
      fileName: fileName,
      subjectName: subjectName,
      date: date,
    };
    localStorage.setItem("uploadedGrade", JSON.stringify(gradeData));
  }, 2000); // وقت الانتظار لمحاكاة الرفع (2 ثانية)
}



