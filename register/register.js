let participantCount = 1;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('add').addEventListener('click', addParticipant);
    document.getElementById('submitButton').addEventListener('click', submitForm);
});

function addParticipant() {
    participantCount++;
    const participantTemplateHTML = participantTemplate(participantCount);
    const addBtn = document.getElementById('add');
    addBtn.insertAdjacentHTML('beforebegin', participantTemplateHTML);
}

function participantTemplate(count) {
    return `
        <section class="participant${count}">
            <p>Participant ${count}</p>
            <div class="item">
              <label for="fname${count}"> First Name<span>*</span></label>
              <input id="fname${count}" type="text" name="fname${count}" value="" required />
            </div>
            <div class="item activities">
              <label for="activity${count}">Activity #<span>*</span></label>
              <input id="activity${count}" type="text" name="activity${count}" />
            </div>
            <div class="item">
              <label for="fee${count}">Fee ($)<span>*</span></label>
              <input id="fee${count}" type="number" name="fee${count}" />
            </div>
            <div class="item">
              <label for="date${count}">Desired Date <span>*</span></label>
              <input id="date${count}" type="date" name="date${count}" />
            </div>
            <div class="item">
              <p>Grade</p>
              <select>
                <option selected value="" disabled selected></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
              </select>
            </div>
        </section>`;
}

function submitForm(event) {
    event.preventDefault();
    const totalFees = calculateTotalFees();
    const adultName = document.getElementById('adult_name').value;
    const summaryMessage = successTemplate({
        name: adultName,
        participantCount: participantCount,
        totalFees: totalFees
    });

    document.querySelector('form').style.display = 'none';
    const summaryElement = document.getElementById('summary');
    summaryElement.innerHTML = summaryMessage;
    summaryElement.style.display = 'block';
}

function calculateTotalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];
    const total = feeElements.reduce((sum, feeElement) => {
        return sum + parseFloat(feeElement.value || 0);
    }, 0);
    return total;
}

function successTemplate(info) {
    return `
        <h2>Registration Successful!</h2>
        <p>Thank you, ${info.name}, for registering.</p>
        <p>You have registered ${info.participantCount} participants.</p>
        <p>Total fees: $${info.totalFees.toFixed(2)}</p>
    `;
}
