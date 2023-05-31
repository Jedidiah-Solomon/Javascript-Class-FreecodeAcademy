fetch('./scripts/employee.json')
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById('employeeList');
        const employees = data.employees;

        let emploeeDetails = '';
        employees.forEach(employee => {
          emploeeDetails += `<p>${employee.firstName} ${employee.lastName}</p>`;
        });

        container.innerHTML = emploeeDetails;
      })
      .catch(error => console.log(error));
 