var SetIntervalTime = [];
var SetTimeoutTime = [];
var N = 1000;
var idTimeout;
var idAnimation;
var idInterval;

function calculatePrimes(iterations, multiplier) {
    var primes = [];
    for (var i = 0; i < iterations; i++) {
      var candidate = i * (multiplier * Math.random());
      var isPrime = true;
      for (var c = 2; c <= Math.sqrt(candidate); ++c) {
        if (candidate % c === 0) {
            // not prime
            isPrime = false;
            break;
         }
      }
      if (isPrime) {
        primes.push(candidate);
      }
    }
    return primes;
  }

function doTimeConsumingCallculationsWithSetInterval(){
    if(SetIntervalTime.length > N){
        SetIntervalTime.shift();
    }
    SetIntervalTime.push(performance.now());
    calculatePrimes(1000, 1000000000);
}

function doTimeConsumingCallculationsWithSetTimeout(){
    if (SetTimeoutTime.length > N){
        SetTimeoutTime.shift();
    }
    SetTimeoutTime.push(performance.now());
    calculatePrimes(1000,1000000000);
    idTimeout = window.setTimeout(doTimeConsumingCallculationsWithSetTimeout, M);
}

function drawChart(){
    let AvarageForInterval = 0;
    let AvarageForTimeout = 0;
    if(SetTimeoutTime.length > 1){
        for(let i = 0; i < SetTimeoutTime.length - 1; i++){
            AvarageForTimeout += (SetTimeoutTime[i+1] - SetTimeoutTime[i]);
        }
        AvarageForTimeout /= (SetTimeoutTime.length-1);
        console.log("timeout: "+ AvarageForTimeout);
    }

    if(SetIntervalTime.length > 1){
        for(let i = 0; i < SetIntervalTime.length - 1; i++){
            AvarageForInterval += (SetIntervalTime[i+1] - SetIntervalTime[i]);
        }
        AvarageForInterval /= (SetIntervalTime.length-1);
        console.log("Interval: "+ AvarageForInterval);
    }

    idAnimation = window.requestAnimationFrame(drawChart);    

    var chart = new CanvasJS.Chart("chartContainer", {
		title:{
			text: "Time chart"              
		},
		data: [              
		{
			type: "column",
			dataPoints: [
				{ label: "Timeout",  y: AvarageForTimeout  },
				{ label: "Interval", y: AvarageForInterval  },
			]
		}
		]
	});
	chart.render();
    
}
function start(){
    const M = parseInt(document.getElementById('M').value);
    console.log(M);
    idInterval = window.setInterval(doTimeConsumingCallculationsWithSetInterval, M);
    idTimeout = window.setTimeout(doTimeConsumingCallculationsWithSetTimeout, M);
    idAnimation = window.requestAnimationFrame(drawChart);
}

function stop(){
    window.clearInterval(idInterval);
    window.clearTimeout(idTimeout);
    window.cancelAnimationFrame(idAnimation);
}
