async function loadJSONData() {
    try {
        const response = await fetch("./data.json");
        const jsonData = await response.json();

        // Adding "P1" to each student's name
        jsonData.forEach((row, index) => {
            if (index !== 0 && row[1]) {
                row[1] = `P1 ${row[1]}`;
            }
        });

        return jsonData;
    } catch (error) {
        console.error("Error loading JSON data:", error);
        return null;
    }
}

// Call the function to load JSON data and render the table
loadJSONData().then(jsonData => {
    const table = document.getElementById('attendanceTable');
    const headerRow = document.getElementById('headerRow');
    const body = document.getElementById('attendanceBody');

    // Populate table headers
    jsonData[0].forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });

    // Populate table body
    for (let i = 1; i < jsonData.length; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < jsonData[i].length; j++) {
            const cell = document.createElement('td');
            cell.textContent = jsonData[i][j];
            row.appendChild(cell);
        }
        body.appendChild(row);
    }
});




        // Function to check if students exist
        function checkStudents(event) {
            event.preventDefault(); // Prevent form submission
            const studentNames = document.getElementById('studentNames').value;
            const namesArray = studentNames.split(',').map(name => name.replace(/\s+/g, '').toLowerCase());
            namesArray.forEach(name => {
                const student = studentsData.find(student => student.name.replace(/\s+/g, '').toLowerCase() === name);
                if (student) {
                    alert(`Student "${student.name}" exists.`);
                } else {
                    alert(`Student "${name}" does not exist.`);
                }
            });
        }