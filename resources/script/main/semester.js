

console.clear();
const discreteMath = " https://raw.githubusercontent.com/yana-music/CSITSolution/main/pastyearsolutions/secondSemester/DiscreteMath/";
const mathsII = " https://raw.githubusercontent.com/yana-music/CSITSolution/main/pastyearsolutions/secondSemester/Maths-II/";
const oop = "https://raw.githubusercontent.com/yana-music/CSITSolution/main/pastyearsolutions/secondSemester/OOP/";
const statsI = "https://raw.githubusercontent.com/yana-music/CSITSolution/main/pastyearsolutions/secondSemester/STAT-I/";
const microprocessor = "https://raw.githubusercontent.com/yana-music/CSITSolution/main/pastyearsolutions/secondSemester/Microprocessor/";

const startYear = 2075; // Specify the starting year as needed
const maxIterations = 15; // Specify the maximum number of iterations

const secondSem = [
    {
        name: "Discrete Math",
        years: [],
    },
    {
        name: "Maths-II",
        years: [],
    },
    {
        name: "OOP",
        years: [],
    },
    {
        name: "Microprocessor",
        years: [],
    },
    {
        name: "StatisticsI",
        years: [],
    },
    // Other course objects...
];


// Log the final arrays of existing years outside the function
console.log("Final array of existing years for Discrete Math:", secondSem.find(course => course.name === "Discrete Math").years);
console.log("Final array of existing years for Maths-II:", secondSem.find(course => course.name === "Maths-II").years);

async function checkExistence() {
    let year = startYear;
    let iterations = 0;

    // subjects object
    let discreteMathObject;
    let mathsIIObject;
    let statsObject;
    let microprocessorObj;
    let oopObj;

    // Find the "Discrete Math" object in secondSem array
    discreteMathObject = secondSem.find(course => course.name === "Discrete Math");
    mathsIIObject = secondSem.find(course => course.name === "Maths-II" );
    statsObject = secondSem.find(course => course.name == "StatisticsI");
    oopObj = secondSem.find(course => course.name == "OOP");
    microprocessorObj = secondSem.find(course => course.name == "Microprocessor");

    // If the object is found, insert the starting year at the beginning
    if (discreteMathObject || mathsIIObject)  {
        discreteMathObject.years.unshift(`DS_MATH_${startYear}_BS_TU`);
        mathsIIObject.years.unshift(`Maths-II_${startYear}_BS_TU`);
        statsObject.years.unshift(`Stats-I_${startYear}_BS_TU`);
        oopObj.years.unshift(`OOP_${startYear}_BS_TU`);
        microprocessorObj.years.unshift(`Microprocessor_${startYear}_BS_TU`);
    }
   https://raw.githubusercontent.com/yana-music/CSITSolution/main/pastyearsolutions/firstSemester/Maths-II/2075/Maths-II-2075-1.jpg
    while (iterations < maxIterations) {
        const url = `${discreteMath}${year}/ds-${year}-1.jpg`;
        const mathUrl  = `${mathsII}${year}/Maths-II-${year}-1.jpg`;
        const microUrl = `${microprocessor}${year}/microprocesor-${year}-1.jpg`;
        const oopUrl  = `${oop}${year}/oop-${year}-1.jpg`;
        const statsUrl = `${statsI}${year}/Maths-II-${year}-1.jpg`;
        try {
            const response = await fetch(url);

            if (response.ok) {
                console.log(`${url} exists (status code: ${response.status}) - Yes`);

                // If the object is found, append the year
                if (discreteMathObject || mathsIIObject) {
                    discreteMathObject.years.push(`DS_MATH_${year}_BS_TU`);
                    mathsIIObject.years.push(`Maths-II-${year}_BS_TU`);
                    oopObj.years.push(`OOP_${year}_BS_TU`);
                    statsObject.years.push(`STATS-I-${year}_BS_TU`);
                    microprocessorObj.years.push(`microprocessor-${year}_BS_TU`);
                }

                console.log("secondsem",secondSem);
            } else {
                console.log(`${url} does not exist (status code: ${response.status}) - No`);
            }
        } catch (error) {
            console.error(`Error while fetching ${url}: ${error}`);
        }

        // Increment the year and iteration count
        year++;
        iterations++;
    }
}

checkExistence();

console.log("secondsem",secondSem);

// Log the final arrays of existing years outside the function
console.log("Final array of existing years for Discrete Math:", secondSem.find(course => course.name === "Discrete Math").years);
console.log("Final array of existing years for Maths-II:", secondSem.find(course => course.name === "Maths-II").years);

