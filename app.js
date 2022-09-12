// https://www.omnicalculator.com/conversion/cps-converter

const v1 =  document.getElementById('v1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const cpsRadio = document.getElementById('cpsRadio');
const cpmRadio = document.getElementById('cpmRadio');

let cps;
let cpm = v1; 

// labels of the inpust
const variable1 = document.getElementById('variable1');

cpsRadio.addEventListener('click', function() {
  variable1.textContent = 'cpm';
  cpm = v1;
  result.textContent = '';
});

cpmRadio.addEventListener('click', function() {
  variable1.textContent = 'cps';
  cps = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(cpsRadio.checked)
    result.textContent = `cps = ${computecps().toFixed(5)}`;

  else if(cpmRadio.checked)
    result.textContent = `cpm = ${computecpm().toFixed(5)}`;
})

// calculation

function computecps() {
  return Number(cpm.value) / 60;
}

function computecpm() {
  return Number(cps.value) * 60;
}