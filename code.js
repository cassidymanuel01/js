const btnDisplays= document.getElementById('btnDisplays');
btnDisplays.addEventListener('click', ()=>{
    let hours= document.getElementById('hours').value;
    let rate= document.getElementById('rate').value;
    let YourSalary= hours*rate;
    document.getElementById('YourSalary').innerText= YourSalary;
    console.log(rate * hours);
});

const btnDisplayss= document.getElementById('btnDisplayss');
btnDisplayss.addEventListener('click', ()=>{
    let hours= document.getElementById('hours').value;
    let rate= document.getElementById('rate').value;
    let YourSalary= 0;
    document.getElementById('YourSalary').innerText= YourSalary;
    console.log(YourSalary);
});