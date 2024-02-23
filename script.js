//"confirm box" showing user for palying Quiz Game

const userConfirmation = confirm("Do you want to play the quiz?");

//math questions
const mathQuestionOne = "What is 1+5=? \n A. 2 \n B. 3 \n C. 4 \n D. 6";
const mathOneAnswer = "d";
const mathQuestionTwo = "What is 4-2=? \n A. 2 \n B. 3 \n C. 4 \n D. 5";
const mathTwoAnswer = "a";
const mathQuestionThree = "What is 1+1=? \n A. 2 \n B. 3 \n C. 4 \n D. 5";
const mathThreeAnswer = "a";
//Science questions
const scienceQuestionOne =
  "Where does the formation of Urea takes place in our body ? \n A. Pancreas \n B. Kidney \n C. Liver \n D. Lungs";
const sciOneAnswer = "c";

const scienceQuestionTwo =
  "What is the freezing point of water as per the Fahrenheit scale? \n A. 0° \n B. 32° \n C. 100° \n D. 212°";
const sciTwoAnswer = "b";

const scienceQuestionThree =
  "Which of the following scientific discoveries was made by C.V Raman? \n A. Inelastic scattering of light by molecules \n B. Super Conductivity \n C. Controlled nuclear fission \n D. Cyclotron";
const sciThreeAnswer = "a";

//English questions
const englishQuestionOne = "What is 1+5=? \n A. 2 \n B. 3 \n C. 4 \n D. 6";
const englishQuestionTwo = "What is 4-2=? \n A. 2 \n B. 3 \n C. 4 \n D. 5";
const englishQuestionThree = "What is 1+1=? \n A. 2 \n B. 3 \n C. 4 \n D. 5";

//history questions
const historyQuestionOne = "What is 1+5=? \n A. 2 \n B. 3 \n C. 4 \n D. 6";
const historyQuestionTwo = "What is 4-2=? \n A. 2 \n B. 3 \n C. 4 \n D. 5";
const historyQuestionThree = "What is 1+1=? \n A. 2 \n B. 3 \n C. 4 \n D. 5";

//gepgraphy questions
const gepgraphyQuestionOne = "What is 1+5=? \n A. 2 \n B. 3 \n C. 4 \n D. 6";
const gepgraphyQuestionTwo = "What is 4-2=? \n A. 2 \n B. 3 \n C. 4 \n D. 5";
const gepgraphyQuestionThree = "What is 1+1=? \n A. 2 \n B. 3 \n C. 4 \n D. 5";

//gk questions
const gkQuestionOne = "What is 1+5=? \n A. 2 \n B. 3 \n C. 4 \n D. 6";
const gkQuestionTwo = "What is 4-2=? \n A. 2 \n B. 3 \n C. 4 \n D. 5";
const gkQuestionThree = "What is 1+1=? \n A. 2 \n B. 3 \n C. 4 \n D. 5";

//ask user to select a subject

if (userConfirmation) {
  //adding while loop here for itaration if user choose wrong option
  while (userConfirmation) {
    var userInput = prompt(
      "Please select a subject choosing A to F \n \n A. Mathmatics \n B. Science \n C. English \n D. History \n E. Geography \n F .GK \n"
    );
    {
      switch (
        userInput.toLowerCase() // here adding toLowerCase() method for lowercase
      ) {
        case "a":
          alert("You are choosing Mathematics");

          //question number 1 start (Mathematics)
          var userMathQuestionOne = prompt(mathQuestionOne);
          if (userMathQuestionOne.toLowerCase() == "d") {
            alert("Your answer is Correct");
          } else {
            alert("Wrong Answer");
          }

          //question number 2 start (Mathematics)
          var userMathQuestionTwo = prompt(mathQuestionTwo);
          if (userMathQuestionTwo.toLowerCase() == "a") {
            alert("Your answer is Correct");
          } else {
            alert("Wrong Answer");
          }

          //question number 3 start (Mathematics)
          var userMathQuestionThree = prompt(mathQuestionThree);
          if (mathQuestionThree.toLowerCase() == "a") {
            alert("Your answer is Correct");
          } else {
            alert("Wrong Answer");
          }
          userConfirmation = false;
          break;
        case "b":
          alert("You are choosing Science");
          //question number 1 start (Science)
          var userScienceQuestionOne = prompt(scienceQuestionOne);
          if (userScienceQuestionOne.toLowerCase() == sciOneAnswer) {
            alert("Your answer is Correct");
          } else {
            alert("Wrong Answer");
          }

          //question number 2 start (Science)
          var userScienceQuestionTwo = prompt(scienceQuestionTwo);
          if (userScienceQuestionTwo.toLowerCase() == sciTwoAnswer) {
            alert("Your answer is Correct");
          } else {
            alert("Wrong Answer");
          }

          //question number 3 start (Science)
          var userScienceQuestionThree = prompt(scienceQuestionThree);
          if (userScienceQuestionThree.toLowerCase() == sciThreeAnswer) {
            alert("Your answer is Correct");
          } else {
            alert("Wrong Answer");
          }
          userConfirmation = false;
          break;
        case "c":
          alert("You are choosing English");

          //question number 1 start (English)
          prompt(englishQuestionOne);
          if (englishQuestionOne.toLowerCase() == "d") {
            alert("Your answer is Correct");
          } else {
            alert("Wrong Answer");
          }

          //question number 2 start (English)
          prompt(englishQuestionTwo);
          if (englishQuestionTwo.toLowerCase() == "a") {
            alert("Your answer is Correct");
          } else {
            alert("Wrong Answer");
          }

          //question number 3 start (English)
          prompt(englishQuestionThree);
          if (englishQuestionThree.toLowerCase() == "a") {
            alert("Your answer is Correct");
          } else {
            alert("Wrong Answer");
          }

          userConfirmation = false;
          break;
        case "d":
          alert("You are choosing History");

          //question number 1 start (history)
          prompt(historyQuestionOne);
          if (historyQuestionOne.toLowerCase() == "d") {
            alert("Your answer is Correct");
          } else {
            alert("Wrong Answer");
          }

          //question number 2 start (history)
          prompt(historyQuestionTwo);
          if (historyQuestionTwo.toLowerCase() == "a") {
            alert("Your answer is Correct");
          } else {
            alert("Wrong Answer");
          }

          //question number 3 start (history)
          prompt(historyQuestionThree);
          if (historyQuestionThree.toLowerCase() == "a") {
            alert("Your answer is Correct");
          } else {
            alert("Wrong Answer");
          }

          userConfirmation = false;
          break;
        case "e":
          alert("You are choosing Geography");

          //question number 1 start (geography)
          prompt(geographyQuestionOne);
          if (geographyQuestionOne.toLowerCase() == "d") {
            alert("Your answer is Correct");
          } else {
            alert("Wrong Answer");
          }

          //question number 2 start (geography)
          prompt(geographyQuestionTwo);
          if (geographyQuestionTwo.toLowerCase() == "a") {
            alert("Your answer is Correct");
          } else {
            alert("Wrong Answer");
          }

          //question number 3 start (geography)
          prompt(geographyQuestionThree);
          if (geographyQuestionThree.toLowerCase() == "a") {
            alert("Your answer is Correct");
          } else {
            alert("Wrong Answer");
          }

          userConfirmation = false;
          break;
        case "f":
          alert("You are choosing GK");

          //question number 1 start (gk)
          prompt(gkQuestionOne);
          if (gkQuestionOne.toLowerCase() == "d") {
            alert("Your answer is Correct");
          } else {
            alert("Wrong Answer");
          }

          //question number 2 start (gk)
          prompt(gkQuestionTwo);
          if (gkQuestionTwo.toLowerCase() == "a") {
            alert("Your answer is Correct");
          } else {
            alert("Wrong Answer");
          }

          //question number 3 start (gk)
          prompt(gkQuestionThree);
          if (gkQuestionThree.toLowerCase() == "a") {
            alert("Your answer is Correct");
          } else {
            alert("Wrong Answer");
          }

          userConfirmation = false;
          break;
        default:
          alert("Please choose a correct option");
      }
    }
  }
} else {
  alert("No Problem See you on Next Time");
}
