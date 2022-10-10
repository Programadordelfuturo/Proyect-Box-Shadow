const wShadow = document.querySelector('#w-shadow');
const rangeWShadow = document.querySelector('#range-w-shadow');

const hShadow = document.querySelector('#h-shadow');
const rangeHShadow = document.querySelector('#range-h-shadow');

const blurRadius = document.querySelector('#blur-radius');
const rangeBlurRadius = document.querySelector('#range-blur-radius');

const spreadRadius = document.querySelector('#spread-Radius');
const rangeSpreadRadius = document.querySelector('#range-spread-Radius');

const borderRadius = document.querySelector('#border-radius');
const rangeBorderRadius = document.querySelector('#range-border-radius');

const height = document.querySelector('#h');
const rangeHeight = document.querySelector('#range-h');

const width = document.querySelector('#w');
const rangeWidth = document.querySelector('#range-w')

const box = document.querySelector('#box');
const paintShadow = document.querySelector('#paint-shadow');
const masterBox = document.querySelector('#master-box');

const option = document.querySelector('.option');
const data = document.querySelector('.data');
const code = document.querySelector('#code');
const container = document.querySelector('.container');

const containerAxisX= [0];
const containerAxisY = [0];
const containerBlurRadius = [0];
const containerSpreadRadius = [0];
const valueColor = [0];


function exit(value){
  value.splice(0,1)
}


rangeWShadow.addEventListener("input", (e)=>{
  wShadow.value = e.target.value;
  containerAxisX.push(e.target.value);
  exit(containerAxisX);
  box.style.boxShadow = `${containerAxisX}px ${containerAxisY}px ${containerBlurRadius}px ${containerSpreadRadius}px ${valueColor}`
});

wShadow.addEventListener("change", (e) => {
  rangeWShadow.value = `${e.target.value}`;
  containerAxisX.push(e.target.value);
  exit(containerAxisX);
  box.style.boxShadow = `${containerAxisX}px ${containerAxisY}px ${containerBlurRadius}px ${containerSpreadRadius}px ${valueColor}`
});



rangeHShadow.addEventListener("input", (e)=>{
  hShadow.value = e.target.value;
  containerAxisY.push(e.target.value);
  exit(containerAxisY);
  box.style.boxShadow = `${containerAxisX}px ${containerAxisY}px ${containerBlurRadius}px ${containerSpreadRadius}px ${valueColor}`
});

hShadow.addEventListener("change", (e) => {
  rangeHShadow.value = `${e.target.value}`;
  containerAxisY.push(e.target.value);
  exit(containerAxisY);
  box.style.boxShadow = `${containerAxisX}px ${containerAxisY}px ${containerBlurRadius}px ${containerSpreadRadius}px ${valueColor}`
});



rangeBlurRadius.addEventListener("input", (e)=>{
  blurRadius.value = e.target.value;
  containerBlurRadius.push(e.target.value);
  exit(containerBlurRadius);
  box.style.boxShadow = `${containerAxisX}px ${containerAxisY}px ${containerBlurRadius}px ${containerSpreadRadius}px ${valueColor}`
});

blurRadius.addEventListener("change", (e) => {
  rangeBlurRadius.value = `${e.target.value}`;
  containerBlurRadius.push(e.target.value);
  exit(containerBlurRadius);
  box.style.boxShadow = `${containerAxisX}px ${containerAxisY}px ${containerBlurRadius}px ${containerSpreadRadius}px ${valueColor}`
});



rangeSpreadRadius.addEventListener("input", (e)=>{
  spreadRadius.value = e.target.value;
  containerSpreadRadius.push(e.target.value);
  exit(containerSpreadRadius);
  box.style.boxShadow = `${containerAxisX}px ${containerAxisY}px ${containerBlurRadius}px ${containerSpreadRadius}px ${valueColor}`
});

spreadRadius.addEventListener("change", (e) => {
  rangeSpreadRadius.value = `${e.target.value}`;
  containerSpreadRadius.push(e.target.value);
  exit(containerSpreadRadius);
  box.style.boxShadow = `${containerAxisX}px ${containerAxisY}px ${containerBlurRadius}px ${containerSpreadRadius}px ${valueColor}`
});


paintShadow.addEventListener("change", (e) => {
  paintShadow.value = `${e.target.value}`
  valueColor.push(e.target.value);
  exit(valueColor);
  box.style.boxShadow = `${containerAxisX}px ${containerAxisY}px ${containerBlurRadius}px ${containerSpreadRadius}px ${valueColor}`
})

paintShadow.addEventListener("change", (e) => {
  option.style.border = `7px groove ${e.target.value}`;
});




rangeBorderRadius.addEventListener("input", (e)=>{
  borderRadius.value = e.target.value;
});

borderRadius.addEventListener("change", (e) => {
  rangeBorderRadius.value = `${e.target.value}`;
});

rangeBorderRadius.addEventListener("input", (e)=>{
  box.style.borderRadius = `${e.target.value}px`;
});

borderRadius.addEventListener("change", (e) => {
  box.style.borderRadius = `${e.target.value}px`;
});


rangeHeight.addEventListener("input", (e)=>{
  height.value = e.target.value;
});

height.addEventListener("change", (e) => {
  rangeHeight.value = `${e.target.value}`;
});

rangeHeight.addEventListener("input", (e)=>{
  box.style.height = `${e.target.value}px`;
});

height.addEventListener("change", (e) => {
  box.style.height = `${e.target.value}px`;
});


rangeWidth.addEventListener("input", (e)=>{
  width.value = e.target.value;
});

width.addEventListener("change", (e) => {
  rangeWidth.value = `${e.target.value}`;
});

rangeWidth.addEventListener("input", (e)=>{
  box.style.width = `${e.target.value}px`;
});

width.addEventListener("change", (e) => {
  box.style.width = `${e.target.value}px`;
});


masterBox.addEventListener("change", (e) => {
  box.style.backgroundColor = `${e.target.value}`;
});

masterBox.addEventListener("change", (e) => {
  data.style.border = `7px groove ${e.target.value}`;
});


container.addEventListener("input", (e) => {
  code.value = `box-shadow: ${containerAxisX}px ${containerAxisY}px ${containerBlurRadius}px ${containerSpreadRadius}px ${valueColor}`
}),

container.addEventListener("change", (e) => {
  code.value = `box-shadow: ${containerAxisX}px ${containerAxisY}px ${containerBlurRadius}px ${containerSpreadRadius}px ${valueColor}`
})
