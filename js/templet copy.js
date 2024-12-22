let fileInputCount3 = 1; // للجدول الأول
let fileInputCount4 = 1; // للجدول الثاني

// دالة لتحديث الصف للجدول 1 (Practical Degrees)
function updateRow3(input) {
  const fileInput = input;
  const fileName = fileInput.files[0]?.name || "No file selected";
  const date = new Date().toLocaleDateString();
  const row = fileInput.closest("tr");

  row.cells[0].innerHTML = `<small>${date}</small>`;
  row.cells[1].innerHTML = `<strong>${fileName}</strong>`;

  const addFileButton = row.querySelector("button");
  addFileButton.textContent = "File Added";
  addFileButton.disabled = true;

  row.cells[3].innerHTML = `<button class="button-folder" onclick="uploadFile3()">Uploading</button>`;
  row.cells[4].innerHTML = `<button class="button-folder" onclick="deleteFile3()">Delete</button>`;
  row.cells[5].innerHTML = `<button class="button-folder" onclick="clearRow3(this)">Clear</button>`;

  addNewRow3(); // إضافة صف جديد
}

// دالة لإضافة صف جديد للجدول 1
function addNewRow3() {
  const tableBody = document.getElementById("file-table-body3");
  const newRow = `
        <tr>
            <td><small>-</small></td>
            <td><strong>No file selected</strong></td>
            <td>
                <button class="button-folder" onclick="document.getElementById('file-input-3-${fileInputCount3}').click()">Add File</button>
                <input type="file" class="file-input" id="file-input-3-${fileInputCount3}" style="display: none;" onchange="updateRow3(this)" />
            </td>
            <td><button class="button-folder" onclick="uploadFile3()">Uploading</button></td>
            <td><button class="button-folder" onclick="deleteFile3()">Delete</button></td>
            <td><button class="button-folder" onclick="clearRow3(this)">Clear</button></td>
        </tr>
    `;
  tableBody.insertAdjacentHTML("beforeend", newRow);
  fileInputCount3++;
}

// مسح الصف للجدول 1
function clearRow3(button) {
  const currentRow = button.closest("tr");
  const fileInput = currentRow.querySelector("input[type='file']");
  const fileNameCell = currentRow.querySelector("td:nth-child(2) strong");

  if (fileInput.files.length > 0) {
    fileInput.value = "";
    fileNameCell.textContent = "No file selected";
  }

  currentRow.querySelector("button[onclick='uploadFile3()']").textContent =
    "Uploading";
}

// حذف الصف للجدول 1
function deleteFile3() {
  alert("Deleting file for Schedule 1...");
  const row = event.target.closest("tr");
  row.remove();
}

// رفع الملف للجدول 1
function uploadFile3() {
  const button = event.target;
  const row = button.closest("tr");
  const fileInput = row.querySelector(".file-input");
  const file = fileInput.files[0];

  if (!file) {
    alert("Please select a file before uploading.");
    return;
  }

  const fileName = file.name;
  const subjectName = "subjectName ";
  const date = new Date().toLocaleDateString();

  button.textContent = "Uploading...";
  button.disabled = true;

  setTimeout(() => {
    button.textContent = "Uploaded";
    alert(`The file "${fileName}" has been uploaded successfully.`);

    const bookData = {
      fileName: fileName,
      subjectName: subjectName,
      date: date,
    };
    localStorage.setItem("uploadedBook3", JSON.stringify(bookData));
  }, 2000);
}

// دالة لتحديث الصف للجدول 2 (Grades for Semester Work)
function updateRow4(input) {
  const fileInput = input;
  const fileName = fileInput.files[0]?.name || "No file selected";
  const date = new Date().toLocaleDateString();
  const row = fileInput.closest("tr");

  row.cells[0].innerHTML = `<small>${date}</small>`;
  row.cells[1].innerHTML = `<strong>${fileName}</strong>`;

  const addFileButton = row.querySelector("button");
  addFileButton.textContent = "File Added";
  addFileButton.disabled = true;

  row.cells[3].innerHTML = `<button class="button-folder" onclick="uploadFile4()">Uploading</button>`;
  row.cells[4].innerHTML = `<button class="button-folder" onclick="deleteFile4()">Delete</button>`;
  row.cells[5].innerHTML = `<button class="button-folder" onclick="clearRow4(this)">Clear</button>`;

  addNewRow4(); // إضافة صف جديد
}

// دالة لإضافة صف جديد للجدول 2
function addNewRow4() {
  const tableBody = document.getElementById("file-table-body-4");
  const newRow = `
        <tr>
            <td><small>-</small></td>
            <td><strong>No file selected</strong></td>
            <td>
                <button class="button-folder" onclick="document.getElementById('file-input-4-${fileInputCount4}').click()">Add File</button>
                <input type="file" class="file-input" id="file-input-4-${fileInputCount4}" style="display: none;" onchange="updateRow4(this)" />
            </td>
            <td><button class="button-folder" onclick="uploadFile4()">Uploading</button></td>
            <td><button class="button-folder" onclick="deleteFile4()">Delete</button></td>
            <td><button class="button-folder" onclick="clearRow4(this)">Clear</button></td>
        </tr>
    `;
  tableBody.insertAdjacentHTML("beforeend", newRow);
  fileInputCount4++;
}

// مسح الصف للجدول 2
function clearRow4(button) {
  const currentRow = button.closest("tr");
  const fileInput = currentRow.querySelector("input[type='file']");
  const fileNameCell = currentRow.querySelector("td:nth-child(2) strong");

  if (fileInput.files.length > 0) {
    fileInput.value = "";
    fileNameCell.textContent = "No file selected";
  }

  currentRow.querySelector("button[onclick='uploadFile4()']").textContent =
    "Uploading";
}

// حذف الصف للجدول 2
function deleteFile4() {
  alert("Deleting file for Schedule 2...");
  const row = event.target.closest("tr");
  row.remove();
}

// رفع الملف للجدول 2
function uploadFile4() {
  const button = event.target;
  const row = button.closest("tr");
  const fileInput = row.querySelector(".file-input");
  const file = fileInput.files[0];

  if (!file) {
    alert("Please select a file before uploading.");
    return;
  }

  const fileName = file.name;
  const subjectName = "subjectName ";
  const date = new Date().toLocaleDateString();

  button.textContent = "Uploading...";
  button.disabled = true;

  setTimeout(() => {
    button.textContent = "Uploaded";
    alert(`The file "${fileName}" has been uploaded successfully.`);

    const bookData = {
      fileName: fileName,
      subjectName: subjectName,
      date: date,
    };
    localStorage.setItem("uploadedBook4", JSON.stringify(bookData));
  }, 2000);
}

// إضافة الصف الأول تلقائيًا عند تحميل الصفحة
window.onload = function () {
  addNewRow3();
  addNewRow4();
};



