document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.getElementById('gender').value;
    const food = Array.from(document.getElementById('food').selectedOptions).map(option => option.value);
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;
  
    // Append values to table
    const tableBody = document.getElementById('tableBody');
    const newRow = `<tr>
                      <td>${firstName}</td>
                      <td>${lastName}</td>
                      <td>${address}</td>
                      <td>${pincode}</td>
                      <td>${gender}</td>
                      <td>${food.join(', ')}</td>
                      <td>${state}</td>
                      <td>${country}</td>
                    </tr>`;
    tableBody.insertAdjacentHTML('beforeend', newRow);
  
    // Clear form fields
    document.getElementById('dataForm').reset();
  });
  