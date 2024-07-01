//  arrays.js
const steps = ["one", "two", "three"];
steps.map((step) => {
    console.log(step);

})
for (let i = 0; i < steps.length; i++) {
    document.querySelector('#myList').innerHTML += `<li>${steps[i]}</li>`;
}