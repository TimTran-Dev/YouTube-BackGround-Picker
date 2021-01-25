document.getElementById('purple').onclick = purpleParty
document.getElementById('green').onclick = greenParty
document.getElementById('blue').onclick = blueParty


function purpleParty() {
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)';
  document.querySelector('body').style.color = 'white'
}

function greenParty() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
  document.querySelector('body').style.color = 'white'
}

function blueParty() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('body').style.color = 'white'
}