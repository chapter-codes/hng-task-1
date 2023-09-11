const dayOfWeek=document.querySelector("p[data-testid='currentDayOfTheWeek']"),
time= document.querySelector("p[data-testid='currentUTCTime'] .input")


setDay()
setUTCTime()


function setDay(){
    const date= new Date()
    const day= date.getUTCDay()

     let dayInWords=''

     switch(day){
        case 1: dayInWords='Monday'
        break;
        case 2: dayInWords='Tuesday'
        break;    
        case 3: dayInWords='Wednesday'
        break;    
        case 4: dayInWords='Thursday'
        break;    
        case 5: dayInWords='Friday'
        break;    
        case 6: dayInWords='Saturday'
        break;
        case 7: dayInWords='Sunday'
        break;
        default:
            console.log('i have failed you all')
        break;    
     }

     dayOfWeek.innerHTML+=dayInWords
    
}

function setUTCTime(){


    setInterval(setTime, 1000)

    function setTime(){
        const date= new Date()
        let utcHour= String(date.getUTCHours() % 12)
        utcHour= utcHour.length==1? '0'+utcHour : utcHour
        
        let utcMinutes= String(date.getUTCMinutes())
        utcMinutes= utcMinutes.length==1? '0'+utcMinutes : utcMinutes
        
        const isAM=date.getHours()/12 <= 1? 'AM' : 'PM'
        time.textContent= `${utcHour} : ${utcMinutes} ${ isAM}`
    
    }
 
    

}


