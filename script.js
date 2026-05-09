const text = "and i am a Mechanical Technician";
let i = 0;

function typingEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 80);
  } else {
    // pause before restarting
    setTimeout(() => {
      document.getElementById("typing").innerHTML = "";
      i = 0;
      typingEffect(); // restart
    }, 1500);
  }
}

typingEffect();
setTimeout(() => {
  document.getElementById("typing").innerHTML = "";
  i = 0;
  typingEffect();
}, 1500);  // 👈 THIS is the delay time
function sendEmail(){
  window.location.href = " taiwopetemichael53@gmail.com";
 }