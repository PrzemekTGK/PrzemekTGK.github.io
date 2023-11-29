function calculateGrades(results) {
    let total = 0;
    for (let i = 0; i < results.length; i++) {
        total += results[i];
    }

    const average = total / results.length;

    return {
        average: average.toFixed(2),
        grades: results.map(result => {
            if (result >= 90) {
                return 'A';
            } else if (result >= 80) {
                return 'B';
            } else if (result >= 70) {
                return 'C';
            } else if (result >= 60) {
                return 'D';
            } else {
                return 'F';
            }
        })
    };
}

function displayResults(results, average, grades) {
    const resultContainer = document.getElementById('result-container');

    const resultsParagraph = document.createElement('p');
    resultsParagraph.textContent = `Results: ${results.join(', ')}`;
    resultContainer.appendChild(resultsParagraph);

    const averageParagraph = document.createElement('p');
    averageParagraph.textContent = `Overall Average: ${average}`;
    resultContainer.appendChild(averageParagraph);

    const gradesParagraph = document.createElement('p');
    gradesParagraph.textContent = `Grades: ${grades.join(', ')}`;
    resultContainer.appendChild(gradesParagraph);
}

const numSubjects = parseInt(prompt("Enter the number of subjects:"));

if (isNaN(numSubjects) || numSubjects <= 0) {
    alert("Please enter a valid number of subjects.");
} else {
    const results = [];

    
    for (let i = 0; i < numSubjects; i++) {
        var result = parseFloat(prompt(`Enter the result for Subject ${i + 1}:`));
        
        var resultValid = false;
        do {
            if (isNaN(result) || result < 0 || result > 100) {
                alert("Please enter a valid result for each subject.");
                result = parseFloat(prompt(`Enter the result for Subject ${i + 1}:`));
            } else{
                resultValid = true;
            }
            
        } while (!resultValid);

        results.push(result);
    }

    if (results.length === numSubjects) {
        const { average, grades } = calculateGrades(results);
        displayResults(results, average, grades);
    }
}
