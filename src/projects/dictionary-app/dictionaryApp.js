// // https://www.instagram.com/p/C4LK4lmvytN/
// https://www.instagram.com/p/C2mmPlsNg3J/?img_index=6
// https://www.instagram.com/p/C0IU1FhtRP9/
// https://www.freecodecamp.org/news/learn-promise-async-await-in-20-minutes/
// https://www.instagram.com/p/CdXcTzVqv5j/?img_index=7
// https://www.youtube.com/watch?v=POFCI1jtH20
// https://static.javatpoint.com/javascriptpages/images/what-is-a-promise-in-javascript.png

// https://www.w3schools.com/js/js_callback.asp
// promise, async and await
// https://dev-to-uploads.s3.amazonaws.com/i/z51d1v0jf07b43bfhfuu.gif
// https://www.freecodecamp.org/news/how-to-create-a-chatbot-with-the-chatgpt-api/

async function loadJSONData() {
  try {
    const response = await fetch("./dictionary.json");
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Error loading JSON data:", error);
    return null;
  }
}

function binarySearch(words, element) {
  let low = 0;
  let high = words.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let midElement = words[mid];
    let lowElement = words[low];

    if (midElement === element) {
      return midElement;
    }
    if (midElement < element) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return null;
}

function extractWordDetails(wordDetails) {
  const meanings = [];
  const antonyms = [];
  const synonyms = [];

  if (wordDetails.MEANINGS) {
    if (Array.isArray(wordDetails.MEANINGS)) {
      wordDetails.MEANINGS.forEach((meaning) => {
        if (Array.isArray(meaning) && meaning.length > 0) {
          meanings.push(meaning.join(", "));
        }
      });
    } else if (typeof wordDetails.MEANINGS === "object") {
      Object.values(wordDetails.MEANINGS).forEach((meaning) => {
        if (Array.isArray(meaning) && meaning.length > 0) {
          meanings.push(meaning.join(", "));
        }
      });
    }
  }

  if (wordDetails.ANTONYMS && Array.isArray(wordDetails.ANTONYMS)) {
    antonyms.push(...wordDetails.ANTONYMS);
  }

  if (wordDetails.SYNONYMS && Array.isArray(wordDetails.SYNONYMS)) {
    synonyms.push(...wordDetails.SYNONYMS);
  }

  return { meanings, antonyms, synonyms };
}

async function main() {
  const jsonData = await loadJSONData();
  if (!jsonData) {
    console.log("Failed to load JSON data.");
    return;
  }

  const words = Object.keys(jsonData);

  // Get the input element
  const inputElement = document.getElementById("searching");

  // Listen for input events on the input element
  inputElement.addEventListener("input", function (event) {
    const searchTerm = event.target.value.trim().toUpperCase();

    if (searchTerm === "") {
      // Clear the search result if input is empty
      document.getElementById("result").innerHTML =
        "</br> <h6> Type and Search Word Meanings. </h6> ";
    } else {
      const foundWord = binarySearch(words, searchTerm);

      if (foundWord === null) {
        // Show "No result" if word not found
        document.getElementById("result").innerHTML =
          "<span class='text-danger'> No Result. Please Search Another Word Meaning </span>";
      } else {
        const wordDetails = jsonData[foundWord];
        const { meanings, antonyms, synonyms } =
          extractWordDetails(wordDetails);
        // Log meanings, antonyms, and synonyms to the console
        console.log("Meanings of", searchTerm.toLowerCase() + ":", meanings);
        console.log("Antonyms of", searchTerm.toLowerCase() + ":", antonyms);
        console.log("Synonyms of", searchTerm.toLowerCase() + ":", synonyms);
        // Render search result on the HTML
        // document.getElementById("result").innerHTML =
        //   "<h6> Meanings of " + searchTerm.toLowerCase() + "</h6>" + meanings;
        // Render search result on the HTML
        const resultHTML = `
        <h4> ${searchTerm.toLowerCase()}</h4>
        <p><strong>Meanings:</strong> ${meanings.join(", ")}</p>
        <p><strong>Antonyms:</strong> ${antonyms.join(", ")}</p>
        <p><strong>Synonyms:</strong> ${synonyms.join(", ")}</p>
        `;
        document.getElementById("result").innerHTML = resultHTML;
      }
    }
  });
}

main();
