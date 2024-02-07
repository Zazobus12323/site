document.addEventListener('DOMContentLoaded', ()=>{
    const buttonSUV = document.querySelector('button[class="car_SUV"]')
    const buttonSportcar = document.querySelector('button[class="car_sportcar"]')
    const buttonSportcarStyle = window.getComputedStyle(buttonSportcar)
    const buttonBusiness = document.querySelector('button[class="car_business"]')
    const buttonPremium = document.querySelector('button[class="car_premium"]')
    const buttonComfort = document.querySelector('button[class="car_comfort"]')
    buttonSUV.addEventListener('click', () => {
        if(buttonSUV.style.backgroundColor === 'rgb(99, 99, 99)'){
            buttonSUV.style.backgroundColor = 'rgb(255, 255, 255)'
            bchagne(buttonSUV, buttons).map((el) => el.backgroundColor = 'rgb(99, 99, 99)')
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
})

