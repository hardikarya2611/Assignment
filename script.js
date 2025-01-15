document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const name = document.getElementById('name').value;
    const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '';
    const email = document.getElementById('email').value;
    const country = document.getElementById('dropdown').value;
    const agree = document.getElementById('checkbox').checked ? 'Yes' : 'No';
    const resume = document.getElementById('resume').files[0] ? document.getElementById('resume').files[0].name : '';
    const age = document.getElementById('number').value;
    const textInput = document.getElementById('textInput').value;

    
    if (!name || !gender || !email || !country || !agree || !resume || !age || !textInput) {
        alert('Please fill in all required fields.');
        return;
    }

   
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${gender}</td>
        <td>${email}</td>
        <td>${country}</td>
        <td>${agree}</td>
        <td>${resume}</td>
        <td>${age}</td>
        <td>${textInput}</td>
    `;

    
    document.querySelector('#dataTable tbody').appendChild(newRow);

    
    document.getElementById('dataForm').reset();
});


document.getElementById('downloadHtmlBtn').addEventListener('click', function() {
   
    const form = document.getElementById('dataForm').outerHTML;
    const table = document.getElementById('dataTable').outerHTML;

    
    const fullHtml = `
        <html>
            <head>
                <title>Form Data</title>
                <style>
                    /* Add any necessary styles for the HTML content */
                    body { font-family: Arial, sans-serif; }
                    table { border-collapse: collapse; width: 100%; }
                    table, th, td { border: 1px solid #ddd; }
                    th, td { padding: 8px; text-align: left; }
                    th { background-color: #f2f2f2; }
                </style>
            </head>
            <body>
                <h2>Form Data</h2>
                ${form}
                ${table}
            </body>
        </html>
    `;

    }) 

