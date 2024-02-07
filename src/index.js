document.addEventListener('DOMContentLoaded', ()=>{
    const buttonSUV = document.querySelector('button[class="car_SUV"]')
    const buttonSUVStyle = window.getComputedStyle(buttonSUV)
    const buttonSportcar = document.querySelector('button[class="car_sportcar"]')
    const buttonSportcarStyle = window.getComputedStyle(buttonSportcar)
    const buttonBusiness = document.querySelector('button[class="car_business"]')
    const buttonBusinessStyle = window.getComputedStyle(buttonBusiness)
    const buttonPremium = document.querySelector('button[class="car_premium"]')
    const buttonPremiumStyle = window.getComputedStyle(buttonPremium)
    const buttonComfort = document.querySelector('button[class="car_comfort"]')
    const buttonComfortStyle = window.getComputedStyle(buttonComfort)
    buttonSUV.addEventListener('click', () => {
        if(buttonSUVStyle.getPropertyValue('background-color') === 'rgb(99, 99, 99)'){
            buttonSUV.style.backgroundColor = 'rgb(255, 255, 255)'
            buttonSportcar.style.backgroundColor = 'rgb(99, 99, 99)'
            buttonBusiness.style.backgroundColor = 'rgb(99, 99, 99)'
            buttonPremium.style.backgroundColor = 'rgb(99, 99, 99)'
            buttonComfort.style.backgroundColor = 'rgb(99, 99, 99)'
            
        }
})
    buttonSportcar.addEventListener('click', ()=>{
        if(buttonSportcarStyle.getPropertyValue('background-color') === 'rgb(99, 99, 99)'){
            buttonSportcar.style.backgroundColor = 'rgb(255, 255, 255)'
            buttonBusiness.style.backgroundColor = 'rgb(99, 99, 99)'
            buttonPremium.style.backgroundColor = 'rgb(99, 99, 99)'
            buttonComfort.style.backgroundColor = 'rgb(99, 99, 99)'
            buttonSUV.style.backgroundColor = 'rgb(99, 99, 99)'
        }
    })
    buttonBusiness.addEventListener('click', ()=>{
        if(buttonBusinessStyle.getPropertyValue('background-color') === 'rgb(99, 99, 99)'){
            buttonSportcar.style.backgroundColor = 'rgb(99, 99, 99)'
            buttonBusiness.style.backgroundColor = 'rgb(255, 255, 255)'
            buttonPremium.style.backgroundColor = 'rgb(99, 99, 99)'
            buttonComfort.style.backgroundColor = 'rgb(99, 99, 99)'
            buttonSUV.style.backgroundColor = 'rgb(99, 99, 99)'
        }
    })
    buttonPremium.addEventListener('click', () =>{
        if(buttonPremiumStyle.getPropertyValue('background-color') === 'rgb(99, 99, 99)'){
            buttonSportcar.style.backgroundColor = 'rgb(99, 99, 99)'
            buttonBusiness.style.backgroundColor = 'rgb(99, 99, 99)'
            buttonPremium.style.backgroundColor = 'rgb(255, 255, 255)'
            buttonComfort.style.backgroundColor = 'rgb(99, 99, 99)'
            buttonSUV.style.backgroundColor = 'rgb(99, 99, 99)'
        }
    })
    buttonComfort.addEventListener('click', ()=>{
        if(buttonComfortStyle.getPropertyValue('background-color') === 'rgb(99, 99, 99)'){
            buttonSportcar.style.backgroundColor = 'rgb(99, 99, 99)'
            buttonBusiness.style.backgroundColor = 'rgb(99, 99, 99)'
            buttonPremium.style.backgroundColor = 'rgb(99, 99, 99)'
            buttonComfort.style.backgroundColor = 'rgb(255, 255, 255)'
            buttonSUV.style.backgroundColor = 'rgb(99, 99, 99)'
        }
    })
})

