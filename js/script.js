const $ = (selector) => document.querySelector(selector);
// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.querySelector('#addForm');
let table = document.querySelector('#employees');
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0;
let empCount = $('#empCount');
empCount.appendChild(document.createTextNode(`(${count})`));


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let id =            $('#id').value;
    console.log(id);
    let name =          $('#name').value;
    console.log(name);
    let extension =     $('#extension').value;
    console.log(extension);
    let email =         $('#email').value;
    console.log(email);
    let department =    $('#department').value;
    console.log(department);
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = table.insertRow();
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellId =            row.insertCell();
    let cellName =          row.insertCell();
    let cellExtension =     row.insertCell();
    let cellEmail =         row.insertCell();
    let cellDepartment =    row.insertCell();
    
    let cellDelBtn = row.insertCell();
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellId.appendChild(document.createTextNode(id));
    cellName.appendChild(document.createTextNode(name));
    cellExtension.appendChild(document.createTextNode(extension));
    cellEmail.appendChild(document.createTextNode(email));
    cellDepartment.appendChild(document.createTextNode(department));
    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('X'));
    deleteBtn.className = 'btn btn-sm btn-danger';
    cellDelBtn.appendChild(deleteBtn);
    // RESET THE FORM
    form.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    $('#id').focus();
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    empCount.innerHTML = `(${++count})`;
});

// DELETE EMPLOYEE
table.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        if (confirm('Are you sure you want to delete this Employee?')) {
            table.deleteRow(e.target.parentElement.parentElement.rowIndex);
            empCount.innerHTML = `(${--count})`;
        }
    }
});