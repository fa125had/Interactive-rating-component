/////Variables
//Vote Form
const votingForm = document.getElementById("votingForm");
//Star Header Icon 
const votBoxIcon = document.getElementById("boxIcon");
//Thank You Header Icon 
const thankYouIcon = document.getElementById("thankYouIcon");
//Header and paragraph texts
const votBoxText = document.getElementById("votTags");
//Submit Button
const submitButton = document.getElementById("submit-vote-button");
/////
//preload styles
thankYouIcon.style.display = "none";

//Show Thankyou Content and submitted Vote
const showThankYOu = (voteNumber) => {
  thankYouIcon.style.display = "flex";
  thankYouIcon.style.borderRadius = 0;
  thankYouIcon.style.margin = "0 auto";
  votBoxText.querySelector("h2").innerHTML = "Thank you!";
  votBoxText.querySelector("h2").style.textAlign = "center";
  votBoxText.querySelector("p").innerHTML =
    "We appreciate you taking the time to give a rating.If you ever need more support, dont hesitate to get in touch!";
  votBoxText.querySelector("p").style.textAlign = "center";
  votBoxText.style.display = "block";
  document.getElementById("submittedNumber").innerHTML = `You selected ${voteNumber} out of 5`;
  document.getElementById("submittedNumber").style.display = "flex";
  document.getElementById("submittedNumber").style.justifyContent = "center";
  document.getElementById("submittedNumber").style.margin = "1.5rem";
}

//Hide Voting screen and save the vote Number
function hideVotingContent(event) {
  event.preventDefault();
  const voteNumber = document.querySelector(
    'input[name="radioVote"]:checked'
  ).value;
  votingForm.style.display = "none";
  votBoxText.style.display = "none";
  votBoxIcon.style.display = "none";
  showThankYOu(voteNumber);
  
}
submitButton.onclick = hideVotingContent;
