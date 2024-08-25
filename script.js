let timeLeft = 1;





function setTime() {
    const counter = setInterval(function (){
        timeLeft--;

        if (timeLeft===0) {
            clearInterval(counter);
            sendMessage();
        }
    },1000);

}

function sendMessage() {

    document.querySelector('#firstprompt').setAttribute('style', 'display:flex');
    document.querySelector('#opening').setAttribute('style', 'display:none');

}

addEventListener('load', function () {
    setTime()
});

document.querySelector('#CalltoWandell').addEventListener('click', function() {
    document.querySelector('#ques1').setAttribute('style','display:none')
    document.querySelector('#call').setAttribute('style','display:flex')
    document.querySelector('#choice1').setAttribute('style','display:flex')

})

document.querySelector('#Stealth').addEventListener('click', function() {
    document.querySelector('#Stealthans').setAttribute('style','display:flex')
    document.querySelector('#choice1').setAttribute('style','display:none')

})

document.querySelector('#Nat1').addEventListener('click', function() {
    document.querySelector('#Stealthans').setAttribute('style','display:none')
    document.querySelector('#nat1ans').setAttribute('style','display:flex')

})

document.querySelector('#bad').addEventListener('click', function() {
    document.querySelector('#Stealthans').setAttribute('style','display:none')
    document.querySelector('#badans').setAttribute('style','display:flex')

})

document.querySelector('#good').addEventListener('click', function() {
    document.querySelector('#Stealthans').setAttribute('style','display:none')
    document.querySelector('#goodAns').setAttribute('style','display:flex')

})

document.querySelector('#Nat20').addEventListener('click', function() {
    document.querySelector('#Stealthans').setAttribute('style','display:none')
    document.querySelector('#Nat20ans').setAttribute('style','display:flex')

})

document.querySelector('#walkin').addEventListener('click', function() {
   
    document.querySelector('#barge').setAttribute('style','display:flex')
    document.querySelector('#choice1').setAttribute('style','display:none')

})

document.querySelector('#Nat1one').addEventListener('click', function() {
    console.log('working')
    document.querySelector('#barge').setAttribute('style','display:none')
    document.querySelector('#nat1ans').setAttribute('style','display:flex')

})

document.querySelector('#badtwo').addEventListener('click', function() {
    document.querySelector('#barge').setAttribute('style','display:none')
    document.querySelector('#badans').setAttribute('style','display:flex')

})

document.querySelector('#goodthree').addEventListener('click', function() {
    document.querySelector('#barge').setAttribute('style','display:none')
    document.querySelector('#goodAns').setAttribute('style','display:flex')

})

document.querySelector('#Nat20four').addEventListener('click', function() {
    document.querySelector('#barge').setAttribute('style','display:none')
    document.querySelector('#Nat20ans').setAttribute('style','display:flex')

})

document.querySelector('#Lethimgosleep').addEventListener('click', function() {
    document.querySelector('#ques1').setAttribute('style','display:none')
    document.querySelector('#bad-ending').setAttribute('style','display:flex')

})

document.querySelector('#Nothing').addEventListener('click', function() {
    document.querySelector('#choice1').setAttribute('style','display:none')
    document.querySelector('#bad-ending').setAttribute('style','display:flex')

})