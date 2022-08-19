const btn = document.getElementById('btn');
btn.addEventListener('click', function () {
    const a = (Math.floor(Math.random() * 10)).toFixed(0);
    const b = (Math.floor(Math.random() * 10)).toFixed(0);
    const c = (Math.floor(Math.random() * 10)).toFixed(0);
    const d = (Math.floor(Math.random() * 10)).toFixed(0);
    const pin = a + b+ c + d;
    const inpin = document.getElementById('inpin');
    inpin.innerText = pin;
    matcher(pin);
})



function matcher(pin) {
    const input = document.getElementById('input');
    input.addEventListener('keyup', function(event) {
        let value = event.target.value;
        const pinMatcher = document.getElementById('btn-matcher');
        pinMatcher.addEventListener('click', function () {
        if(value === pin) {
            const dd = document.getElementById('dd');
            dd.innerText = 'You are well done';
        } else {
            const dd = document.getElementById('dd');
            dd.innerText = 'sorry';
        }
        event.target.value = '';
    })
    })
}