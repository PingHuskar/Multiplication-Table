
document.title = "Loading"

const checkPrime = (number) => {
    let isPrime = true;

    // check if number is equal to 1
    if (number === 1) {
        return false
    }

    // check if number is greater than 1
    else if (number > 1) {

        // looping through 2 to number-1
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }

        return isPrime
    }

    // check if number is less than 1
        else {
            return false
        }
}
const main = () => {
    const a = parseInt(document.getElementById('customRange1').value)
    const b = parseInt(document.getElementById('customRange2').value)
    var header = ""
    document.getElementById('header').innerHTML = `<th scope="col">#</th>`
    var primeXList = []
    for (var z = a-2; z<=a+2;z++) {
        // console.log(i,a)
        var res = checkPrime(z) ? 'primeX' : 'compositeX'
        primeXList.push(res)
        document.getElementById('header').innerHTML += `<th scope="col" class="${res}">${z}</th>`
    }
    document.getElementById("table").innerHTML = ""
    for (var i = b-2; i<=b+2;i++) {
        var tt = ""
        tt += `<tr><th scope="row" class="${checkPrime(i) ? 'primeY' : 'compositeY'}">${i}</th>`
        for (var ii = 0; ii < 5; ii++) {
            tt += `<td class="${checkPrime(i) ? 'primeY' : 'compositeY'} ${primeXList[ii]}">${i*(a-2+ii)}</td>`
        }
        tt += "</tr>"
        document.getElementById("table").innerHTML += tt
    }
}
document.title = document.querySelector('h1').innerText