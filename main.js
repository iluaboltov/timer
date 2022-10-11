const submit = document.getElementById("submit-button"),
    reset = document.getElementById("reset-button");
instances = []
submit.addEventListener('click', ()=>{
    timerCreateProcessing()
})
reset.addEventListener('click', ()=>{
    timerCreateProcessing(true)
})

class Timer{
    constructor(hourValue = 0, minutValue = 0, secValue = 0) {
        this.hours = hourValue;
        this.minutes = minutValue;
        this.seconds = secValue;
    }
    process(){
        this.timer()
        if(this.hours === 0 && this.minutes === 0  && this.seconds === 0){
            this.remove()
            return true;
        }
    }
    timer(){
        if(this.seconds >= 1){
            this.seconds--
            return;
        }
        if(this.minutes >= 1){
            this.minutes--
            this.seconds = 59
            return;
        }
        if(this.hours >= 1){
            this.hours--
            this.minutes = 60
            return;
        }
    }
    showTime(){
        return prefixNum(this.hours) + ":" + prefixNum(this.minutes) + ":" + prefixNum(this.seconds)
    }
    remove(){
        delete this
    }
}
const showTime = (container, timerContent, timer)=>{
    timerContent.textContent = timer.showTime()
}
const prefixNum = (numb)=>{
    return numb < 10 ? "0" + numb : numb
}
const removeElementsOfTimer =(element, interval)=>{
    element.remove()
    clearInterval(interval)
}
const timerCreateProcessing = (remove=0)=>{
    if(remove){
        instances.forEach((timer)=>{
            timer.remove()
        })
        setTimeout(()=>{document.getElementById("timer-container").innerHTML = ""}, 2000)
        return;
    }
    const hourValue = document.getElementById("hour-value").value,
        minutValue = document.getElementById("min-value").value,
        secValue = document.getElementById("sec-value").value,
        container = document.getElementById("timer-container");

    let divTimer = document.createElement("div")
    let timer = new Timer(Number(hourValue), Number(minutValue), Number(secValue))

    instances.push(timer)

    let interval = setInterval(()=> {

        showTime(container, divTimer, timer)
        if(timer.process()){setTimeout(()=>{removeElementsOfTimer(divTimer, interval)},5000)
        }
    }, 1000)
    container.insertAdjacentElement('beforeend', divTimer)
}