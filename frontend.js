document.getElementById('predictionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const sex = document.getElementById('sex').value;
    const pclass = parseInt(document.getElementById('pclass').value);

    let result = '';

    // Basic heuristic for prediction
    if (sex === 'female' || (sex === 'male' && age < 10 && pclass !== 3)) {
        result = `Passenger ${name} is likely to survive.`;
    } else {
        result = `Passenger ${name} is not likely to survive.`;
    }

    document.getElementById('result').innerText = result;
});
