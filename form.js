//form.js file

// General questions
var generalQuestions = [
  "Name",
  "Gender",
  "Date of Birth",
  "Age",
  "Father's Full Name",
  "Mother's Full Name",
  "Place of Birth",
  "Present Address",
  "Permanent Address",
  "Marital Status",
  "Religion",
  "Caste",
  "Sub-caste",
  "Height",
  "Weight",
  "Blood Group",
  "Educational Qualification",
  "Socio-Economic Status",
  "Contact Number",
  "Email ID",
  "Personal History",
  "Food Habits",
  "Micturition",
  "Bowel Habits",
  "Sleep",
  "Occupation",
  "Previous History of Illness (Yes/No)",
  "If Yes, What was the nature of Illness",
  "Age at which the Illness was suffered",
  "Duration of suffering",
  "Medical Consultation undertaken",
  "Aftermath of Illness",
  "Family History",
  "Number of persons in the family",
  "Family History of disease",
  "Consanguinity",
  "Head Circumference (inch)",
  "Chest Circumference (inch)",
  "Neck Circumference (inch)",
  "Neck Length (inch)",
  "Upper Body Length (inch)",
  "Lower Body Length (inch)",
  "Waist (inch)",
  "Hip (inch)",
  "Waist:Hip ratio",
  "Forearm (inch)",
  "B.M.I"
];

// MCQ questions and options
var mcqQuestions = [
  "Body Frame",
  "Eye Size",
  "Iris Color",
  "Sclera",
  "Eyebrows",
  "Eyelashes",
  "Tongue",
  "Type of Hair",
  "Color of Hair",
  "Skin Type",
  "Skin Complexion",
  "Body Weight",
  "Nails",
  "Size and Color of the Teeth",
  "Pace of Performing Work",
  "Mental Activity",
  "Memory",
  "Grasping Power",
  "Sleep Pattern",
  "Intolerance to Weather Conditions",
  "Weather Preferred",
  "Weather Not Preferred",
  "Reactions Under Adverse Situation",
  "Mood",
  "Eating Habit",
  "Hunger",
  "Food/Liquid Intake Amount",
  "Food Inclinations",
  "Body Temperature",
  "Pulse Diagnosis",
  "Joints",
  "Nature",
  "Body Energy",
  "Eyeball",
  "Quality of Voice",
  "Dreams",
  "Social Relations",
  "Wealth",
  "Bowel Movements",
  "Stool Consistency",
  "Level of Sweating",
  "Walking Pace",
  "Communication Skills"
];

var mcqOptions = [
  ["A) Thin and Lean", "B) Medium", "C) Well Built"],
  ["A) Small", "B) Medium", "C) Large"],
  ["A) Black", "B) Light Brown", "C) Dark Brown", "D) Greyish/Blue/Green"],
  ["A) Muddy", "B) Reddish Tinge", "C) White"],
  ["A) Small", "B) Medium", "C) Large"],
  ["A) Small", "B) Medium", "C) Large"],
  ["A) Dry", "B) Red", "C) Wet and Shining"],
  ["A) Dry and with Split Ends", "B) Normal, Thin, More Hair Fall", "C) Greasy, Heavy"],
  ["A) Pale Brown", "B) Red or Brown", "C) Jet Black"],
  ["A) Dry, Rough", "B) Soft, More Sweating, Acne", "C) Moist, Greasy"],
  ["A) Dark, Blackish", "B) Pink to Red", "C) Glowing, White"],
  ["A) Low, Difficult to Put on Weight", "B) Medium, Can Easily Lose or Gain Weight", "C) Overweight, Difficult to Lose Weight"],
  ["A) Blackish, Small, Brittle", "B) Reddish, Small", "C) Pinkish, Big, Smooth"],
  ["A) Very Big or Very Small, Irregular, Blackish", "B) Medium-Sized, Yellowish", "C) Large, Shining White"],
  ["A) Fast, Always in a Hurry", "B) Medium, Energetic", "C) Slow, Steady"],
  ["A) Quick, Restless", "B) Smart Intellect, Aggressive", "C) Calm, Stable"],
  ["A) Short Term Bad", "B) Good Memory", "C) Long Term is Best"],
  ["A) Grasps Quickly but not Completely and Forgets Quickly", "B) Grasps Quickly but Completely and has Good Memory", "C) Grasps Late and Retains for a Longer Time"],
  ["A) Interrupted, Less", "B) Moderate", "C) Sleepy, Lazy"],
  ["A) Aversion to Cold", "B) Aversion to Heat", "C) Aversion to Moist, Rainy, and Cool Weather"],
  ["A) Cold", "B) Warm", "C) Humid", "D) Dry"],
  ["A) Cold", "B) Warm", "C) Humid", "D) Dry"],
  ["A) Anxiety, Worry, Irritability", "B) Anger, Aggression", "C) Calm, Reclusive, Sometimes Depressive"],
  ["A) Changes Quickly, Have Frequent Mood Swings", "B) Changes Slowly", "C) Stable, Constant"],
  ["A) Eats Quickly Without Chewing Properly", "B) Eats at a Moderate Speed", "C) Chews Food Properly"],
  ["A) Irregular, Any Time", "B) Sudden Hunger Pangs, Sharp Hunger", "C) Can Skip any Meal Easily"],
  ["A) Inconsistent Appetite", "B) Strong appetite", "C) Poor appetite"],
  ["A) Sweet", "B) Sour", "C) Bitter", "D) Astringent", "E) Pungent", "F) Salty"],
  ["A) Less than Normal, Hands and Feet are Cold", "B) More than Normal, Face and Forehead Hot", "C) Normal, Hands and Feet Slightly Cold"],
  ["A) Snake Pulse (inconsistent)", "B) Frog Pulse (curved)", "C) SwanPeacock Pulse (soft)"],
  ["A) Weak, Noise on Movement", "B) Healthy with Optimal Strength", "C) Heavy Weight Bearing"],
  ["A) Timid, Jealous", "B) Egoistic, Fearless", "C) Forgiving, Grateful, Not Greedy"],
  ["A) Becomes Low in the Evening, Fatigues After Less Work", "B) Moderate, Gets Tired After Medium Work", "C) Excellent Energy Throughout the Day, Not Easily Fatigued"],
  ["A) Unsteady, Fast Moving", "B) Moving Slowly", "C) Steady"],
  ["A) Rough with Broken Words", "B) Fast, Commanding", "C) Soft and Deep"],
  ["A) Sky, Wind, Flying, Objects and Confusion", "B) Fire, Light, Bright Colors, Violence", "C) Water Pools, Gardens, and Good Relationships"],
  ["A) Make Few Friends, Prefers Solitude", "B) Good Number of Friends", "C) Love to Socialize. Relationships are Longer Lasting"],
  ["A) Spends Without Thinking Much", "B) Saves but Spends on Valuable Things", "C) Prefers More Savings"],
  ["A) Regular", "B) Irregular", "C) Variable"],
  ["A) Dry, Hard, Blackish, Scanty Stools", "B) Soft, Yellowish, Loose Stools", "C) Heavy, Thick, Sticky Stools"],
  ["A) Normal", "B) Excessive", "C) Minimal"],
  ["A) Quick, Fast With Long Steps", "B) Average, Steady", "C) Slow with Short Steps"],
  ["A) Fast, Irrelevant Talk, Speech not Clear", "B) Good Speakers with Genuine Argumentative Skills", "C) Authoritative, Firm, and Little Speech"]
];

// Defining lists
const vatalist = [
  'A', 0, 0, 0, 0, 0, 0, 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 0, 0, 'A', 'A', 'A', 'A', 'A', 0, 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 0, 'A', 'A', 'A', 'A'
];

const pittalist = [
  'B', 0, 0, 0, 0, 0, 0, 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 0, 0, 'B', 'B', 'B', 'B', 'B', 0, 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 0, 'B', 'B', 'B', 'B'
];

const kaphalist = [
  'C', 0, 0, 0, 0, 0, 0, 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 0, 0, 'C', 'C', 'C', 'C', 'C', 0, 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 0, 'C', 'C', 'C', 'C'
];

// Array to store MCQ answers
var mcqAnswers = [];

// Function to create general questions
function createGeneralQuestions() {
  var generalDiv = document.getElementById("generalQuestions");
  generalQuestions.forEach(function (question, index) {
    var label = document.createElement("label");
    label.setAttribute("for", "gen-" + index);
    label.textContent = question + ": ";
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "gen-" + index);
    input.setAttribute("name", "gen-" + index);
    //input.setAttribute("required", "required");
    generalDiv.appendChild(label);
    generalDiv.appendChild(input);
    generalDiv.appendChild(document.createElement("br"));
  });
}

// Function to create MCQ questions
function createMCQQuestions() {
  var mcqDiv = document.getElementById("mcqQuestions");
  mcqQuestions.forEach(function (question, index) {
    var fieldset = document.createElement("fieldset");
    var legend = document.createElement("legend");
    legend.textContent = (index + 1) + ". " + question + ":";
    fieldset.appendChild(legend);

    mcqOptions[index].forEach(function (option, optionIndex) {
      var input = document.createElement("input");
      input.setAttribute("type", "radio");
      input.setAttribute("id", "mcq-" + index + "-" + option.charAt(0));
      input.setAttribute("name", "mcq-" + index);
      input.setAttribute("value", option.charAt(0));
      var label = document.createElement("label");
      label.setAttribute("for", "mcq-" + index + "-" + option.charAt(0));
      label.textContent = option;

      input.addEventListener("change", function () {
        // Update the selected answer in the mcqAnswers array
        mcqAnswers[index] = option.charAt(0);
      });

      fieldset.appendChild(input);
      fieldset.appendChild(label);
      fieldset.appendChild(document.createElement("br"));
    });

    mcqDiv.appendChild(fieldset);
  });
}

// form.js file

// ... (Previous code)

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Get submitted answers
    var submittedAnswersDiv = document.getElementById("submittedAnswers");
    submittedAnswersDiv.innerHTML = "<h2>Prakriti Assessment Report:</h2>";
  
    generalQuestions.forEach(function (question, index) {
      var input = document.getElementById("gen-" + index);
      var answer = input.value;
      displayAnswer(submittedAnswersDiv, question, answer);
    });
  
    mcqQuestions.forEach(function (question, index) {
      var selectedOption = document.querySelector('input[name="mcq-' + index + '"]:checked');
      var answer = selectedOption ? selectedOption.nextElementSibling.textContent : "Not answered";
      displayAnswer(submittedAnswersDiv, question, answer);
    });
  
    // Compare MCQ answers with lists
    var vatacount = 0;
    var pittacount = 0;
    var kaphacount = 0;
  
    for (var i = 0; i < 43; i++) {
      if (mcqAnswers[i] === vatalist[i]) {
        vatacount += 1;
      } else if (mcqAnswers[i] === pittalist[i]) {
        pittacount += 1;
      } else if (mcqAnswers[i] === kaphalist[i]) {
        kaphacount += 1;
      }
    }
  
    // Create the composition table
    var compositionTable = document.createElement("table");
  
    compositionTable.innerHTML = `
          <tr>
              <th colspan="3" class= "tabletitle">Prakriti Composition Analysis</th>
          </tr>
          <tr>
              <th>Dosha</th>
              <th>Number of characteristics present</th>
              <th>Percentage of characteristics present</th>
          </tr>
          <tr>
              <th>Vata</th>
              <td>${vatacount}</td>
              <td>${(vatacount * 100 / 33).toFixed(2)}%</td>
          </tr>
          <tr>
              <th>Pitta</th>
              <td>${pittacount}</td>
              <td>${(pittacount * 100 / 33).toFixed(2)}%</td>
          </tr>
          <tr>
              <th>Kapha</th>
              <td>${kaphacount}</td>
              <td>${(kaphacount * 100 / 33).toFixed(2)}%</td>
          </tr>
      `;
  
    submittedAnswersDiv.appendChild(compositionTable);
  
    // Display summary
    var counts = { "Vata": vatacount, "Pitta": pittacount, "Kapha": kaphacount };
    var max_count = Object.keys(counts).reduce(function (a, b) {
      return counts[a] > counts[b] ? a : b;
    });
    var summary = document.createElement("summary");
    summary.textContent = `\nYour Prakriti type is ${max_count}`;
    submittedAnswersDiv.appendChild(summary);
  
    // Add a line break
    submittedAnswersDiv.appendChild(document.createElement("br"));
  
    // Add the extra line after Prakriti type
    var verification = document.createElement("verification");
    verification.textContent = "--This Report is digitally generated by PhenoSense--";
    submittedAnswersDiv.appendChild(verification);
  
    // Add an extra line break for spacing
    submittedAnswersDiv.appendChild(document.createElement("br"));
  
    // Add an extra line break for spacing
    submittedAnswersDiv.appendChild(document.createElement("br"));
  
    // Store the submitted answers in local storage
    localStorage.setItem("submittedAnswers", submittedAnswersDiv.innerHTML);
  
    // Navigate to the report page
    window.location.href = "report.html";
  }
  
  // ... (Rest of the code)
  

// Prakriti Assessment Report
// Function to display answers with bold questions and line breaks
function displayAnswer(container, question, answer) {
  var questionElement = document.createElement("strong");
  questionElement.textContent = question + ": ";
  container.appendChild(questionElement);
  container.appendChild(document.createTextNode(answer));
  container.appendChild(document.createElement("br")); // Add a line break
  container.appendChild(document.createElement("br")); // Add an extra line break for spacing
}

// Create the form elements
createGeneralQuestions();
createMCQQuestions();

// Add form submission event listener
var form = document.getElementById("prakritiForm");
form.addEventListener("submit", handleSubmit);
