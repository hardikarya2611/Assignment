const inputTable = document.querySelector("#inputTable tbody");
const htmlOutput = document.getElementById("htmlOutput");
const generatedHTML = document.getElementById("generatedHTML");
const downloadBtn = document.getElementById("downloadBtn");

function addElement() {
  const inputName = document.getElementById("inputName").value;
  const inputType = document.getElementById("inputType").value;
  const isRequired = document.getElementById("isRequired").checked;

  if (!inputName) {
    alert("Please enter an input name.");
    return;
  }

  // Add element to the table
  const row = inputTable.insertRow();
  row.innerHTML = `
    <td>${inputName}</td>
    <td>${inputType}</td>
    <td>${isRequired ? "Yes" : "No"}</td>
  `;

  // Clear the form fields after adding the row
  document.getElementById("inputName").value = '';
  document.getElementById("inputType").value = 'text';
  document.getElementById("isRequired").checked = false;
}

function generateHTML() {
  let formHTML = '<form>\n';
  const rows = inputTable.rows;

  for (let i = 0; i < rows.length; i++) {
    const inputName = rows[i].cells[0].innerText;
    const inputType = rows[i].cells[1].innerText.toLowerCase();
    const isRequired = rows[i].cells[2].innerText === "Yes" ? "required" : "";

    if (inputType === 'textarea') {
      formHTML += `  <label for="${inputName}">${inputName}</label>\n`;
      formHTML += `  <textarea id="${inputName}" name="${inputName}" ${isRequired}></textarea>\n`;
    } else {
      formHTML += `  <label for="${inputName}">${inputName}</label>\n`;
      formHTML += `  <input type="${inputType}" id="${inputName}" name="${inputName}" ${isRequired} />\n`;
    }
  }

  formHTML += '</form>';

  // Wrap the form HTML inside a basic HTML structure
  const fullHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Generated Form</title>
</head>
<body>
  ${formHTML}
</body>
</html>`;

  // Show the generated HTML in the output section
  htmlOutput.textContent = fullHTML;
  generatedHTML.style.display = "block";

  // Handle download functionality
  downloadBtn.onclick = function () {
    const blob = new Blob([fullHTML], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "generated_form.html";  // Set the name of the downloaded file
    link.click();  // Trigger the download action
  };
}


