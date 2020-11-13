btn.addEventListener('click', () => sendToPython());

btn.dispatchEvent(new Event('click'));


function sendToPython() {
    const { PythonShell } = require('python-shell');

    let result = document.getElementById('result');

    let options = {
        mode: 'text',
        scriptPath: 'server',
        args: [input.value]
    };

    PythonShell.run('calc.py', options, (err, results) => {
        if (err) throw err;
        // result is an array consisting of msgs collected during execution
        console.log(results[0]);

        // replace text 'result:' from array to ''
        result.innerText = results[0].replace('result: ', '');
    });
}
