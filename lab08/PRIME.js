onmessage = function(event) {
    let primes = findPrimes(event.data.from, event.data.to);
    postMessage({messageType: "PrimeList", data: primes}); };
function findPrimes(fromNumber, toNumber) {
    let list = [];
    for (let i=fromNumber; i<=toNumber; i++) {
        if (i>1) list.push(i); }
    let maxDiv = Math.round(Math.sqrt(toNumber));
    let primes = [];
    let previousProgress;
    for (let i=0; i<list.length; i++) {
        let failed = false;
        for (let j=2; j<=maxDiv; j++) {
            if ((list[i] !== j) && (list[i] % j === 0)) {
                failed = true;
            } else if ((j===maxDiv) && (failed === false)) {
                primes.push(`Простое число: ` + list[i] + `, Точное время нахождения: 
${performance.now()} ms;`); }
            let progress = Math.round(i/list.length*100);
            if (progress !== previousProgress) {
                postMessage( {messageType: "Progress", data: progress}
                );
                previousProgress = progress; } } }
    return primes; }