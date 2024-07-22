const stay = document.querySelector('#stay')
const go = document.querySelector('#go')
const stayAns = document.querySelector('#stay1')
const go1 = document.querySelector('#go1')
const totalAns1 = document.querySelector('.ans1')
const totalAns2 = document.querySelector('#ans2')
const balls = document.querySelector('#balls')
const ans3 = document.querySelector('#ans3')
const balls1 = document.querySelector('#balls1')
const balls2 = document.querySelector('#balls2')
const balls3 = document.querySelector('#balls3')
const ballsAns1 = document.querySelector('#ballsAns1')
const ballsAns2 = document.querySelector('#ballsAns2')
const ballsAns3 = document.querySelector('#ballsAns3')
let timeLeft = 4
const end1 = document.querySelector('#end1')
const scrolls = document.querySelector('#scrolls')
const scrollsIntro = document.querySelector('#scrollIntro')
const theman = document.querySelector('#theman')
const manIntro  = document.querySelector('#manIntro')
let manTime = 5
let sleightofhand = document.querySelector('#sleightofhand')
const nat1 = document.querySelector('#nat1')
const poor = document.querySelector('#poor')
const decent = document.querySelector('#decent')
const good = document.querySelector('#good')
const great = document.querySelector('#great')
const nat20 = document.querySelector('#nat20')
const nat1Ans = document.querySelector('#nat1Ans')
const poorAns = document.querySelector('#poorAns')
const decentAns = document.querySelector('#decentAns')
const goodAns = document.querySelector('#goodAns')
const greatAns = document.querySelector('#greatAns')
const nat20Ans = document.querySelector('#nat20Ans')
const sneaknat1 = document.querySelector('#sneaknat1')
const sneakpoor = document.querySelector('#sneakpoor')
const sneakdecent = document.querySelector('#sneakdecent')
const sneakgood = document.querySelector('#sneakgood')
const sneakgreat = document.querySelector('#sneakgreat')
const sneaknat20 = document.querySelector('#sneaknat20')
const sneaknat1Ans = document.querySelector('#sneaknat1Ans')
const sneakpoorAns = document.querySelector('#sneakpoorAns')
const sneakdecentAns = document.querySelector('#sneakdecentAns')
const sneakgoodAns = document.querySelector('#sneakgoodAns')
const sneakgreatAns = document.querySelector('#sneakgreatAns')
const sneaknat20Ans = document.querySelector('#sneaknat20Ans')




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

    console.log('working')
    ballsAns1.setAttribute('style',
        'display:none');
    ballsAns2.setAttribute('style',
        'display:none');
    ballsAns3.setAttribute('style',
        'display:none');
    end1.setAttribute('style',
        'display:block'
    )

}



stay.addEventListener('click', function () {
    
    if (stay.checked === true) {

        totalAns1.setAttribute('style',
        'display:none');
        stayAns.setAttribute('style',
            'display:block');
    }
})

go.addEventListener('click', function () {
    
    if (go.checked === true) {

        totalAns1.setAttribute('style',
        'display:none');
        go1.setAttribute('style',
            'display:block');
        ans2.setAttribute('style',
            'display:flex');
        }
})

balls.addEventListener('click', function () {
    
    if (balls.checked === true) {

        totalAns2.setAttribute('style',
        'display:none');
        ans3.setAttribute('style',
            'display:flex');
        }
})


balls1.addEventListener('click', function () {
    
    if (balls1.checked === true) {

        ans3.setAttribute('style',
        'display:none');
        ballsAns1.setAttribute('style',
            'display:flex');
        setTime();
        }
})

balls2.addEventListener('click', function () {
    
    if (balls2.checked === true) {

        ans3.setAttribute('style',
        'display:none');
        ballsAns2.setAttribute('style',
            'display:flex');
        setTime();
        }
})

balls3.addEventListener('click', function () {
    
    if (balls3.checked === true) {

        ans3.setAttribute('style',
        'display:none');
        ballsAns3.setAttribute('style',
            'display:flex');
        setTime();
        }
})

scrolls.addEventListener('click', function () {
    
    if (scrolls.checked === true) {

        ans2.setAttribute('style',
        'display:none');
        scrollsIntro.setAttribute('style',
            'display:flex');
            
        
        }
})

nat1.addEventListener('click', function () {
    
    if (nat1.checked === true) {

        scrollsIntro.setAttribute('style',
        'display:none');
        nat1Ans.setAttribute('style',
            'display:flex');
        end2.setAttribute('style','display:flex');
        
        }
})

poor.addEventListener('click', function () {
    
    if (poor.checked === true) {

        scrollsIntro.setAttribute('style',
        'display:none');
        poorAns.setAttribute('style',
            'display:flex');
        end2.setAttribute('style','display:flex');
        
        }
})

decent.addEventListener('click', function () {
    
    if (decent.checked === true) {

        scrollsIntro.setAttribute('style',
        'display:none');
        decentAns.setAttribute('style',
            'display:flex');
        end2.setAttribute('style','display:flex');
        
        }
})

good.addEventListener('click', function () {
    
    if (good.checked === true) {

        scrollsIntro.setAttribute('style',
        'display:none');
        goodAns.setAttribute('style',
            'display:flex');
        end2.setAttribute('style','display:flex');
        
        }
})

great.addEventListener('click', function () {
    
    if (great.checked === true) {

        scrollsIntro.setAttribute('style',
        'display:none');
        greatAns.setAttribute('style',
            'display:flex');
        end2.setAttribute('style','display:flex');
        
        }
})

nat20.addEventListener('click', function () {
    
    if (nat20.checked === true) {

        scrollsIntro.setAttribute('style',
        'display:none');
        nat20Ans.setAttribute('style',
            'display:flex');
        end2.setAttribute('style','display:flex');
        
        }
})

theman.addEventListener('click', function () {
    
    if (theman.checked === true) {

        ans2.setAttribute('style',
        'display:none');
        manIntro.setAttribute('style',
            'display:flex');
        
        }
})

sneaknat1.addEventListener('click', function () {
    
    if (sneaknat1.checked === true) {

        manIntro.setAttribute('style',
        'display:none');
        sneaknat1Ans.setAttribute('style',
            'display:flex');
        
        
        }
})

sneakpoor.addEventListener('click', function () {
    
    if (sneakpoor.checked === true) {

        manIntro.setAttribute('style',
        'display:none');
        sneakpoorAns.setAttribute('style',
            'display:flex');
   
        
        }
})

sneakdecent.addEventListener('click', function () {
    
    if (sneakdecent.checked === true) {

        manIntro.setAttribute('style',
        'display:none');
        sneakdecentAns.setAttribute('style',
            'display:flex');
       
        
        }
})

sneakgood.addEventListener('click', function () {
    
    if (sneakgood.checked === true) {

        manIntro.setAttribute('style',
        'display:none');
        sneakgoodAns.setAttribute('style',
            'display:flex');
      
        
        }
})

sneakgreat.addEventListener('click', function () {
    
    if (sneakgreat.checked === true) {

        manIntro.setAttribute('style',
        'display:none');
        sneakgreatAns.setAttribute('style',
            'display:flex');
        
        
        }
})

sneaknat20.addEventListener('click', function () {
    
    if (sneaknat20.checked === true) {

        manIntro.setAttribute('style',
        'display:none');
        sneaknat20Ans.setAttribute('style',
            'display:flex');
      
        
        }
})










