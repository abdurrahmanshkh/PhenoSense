// report.js file

// This script is responsible for displaying the report in report.html
window.onload = function () {
    var submittedAnswersDiv = document.getElementById("submittedAnswers");
    
    // Retrieve the submitted answers from local storage
    var submittedAnswers = localStorage.getItem("submittedAnswers");
  
    if (submittedAnswers) {
      // Display the submitted answers
      submittedAnswersDiv.innerHTML = submittedAnswers;
    } else {
      submittedAnswersDiv.innerHTML = "<p>No assessment data available.</p>";
    }
  };

// JavaScript function to print the report section
function printReport() {
  var reportSection = document.querySelector(".report");
  var printWindow = window.open('', '', 'width=1000,height=600');
  printWindow.document.open();
  printWindow.document.write('<html><head><title>Print Report</title></head><body>');
  printWindow.document.write('<h1>Prakriti Assessment Report</h1>');
  printWindow.document.write(reportSection.innerHTML);
  printWindow.document.write('</body></html>');
  printWindow.document.close();
  printWindow.print();
  printWindow.close();
} 