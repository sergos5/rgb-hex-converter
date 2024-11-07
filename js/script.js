const rgbInput = document.querySelectorAll('.rgb-block input')
const convertBtn = document.querySelector('.convert-btn')
const hexData = document.querySelector('.hex-data')
const colorBlock = document.querySelector('.color-block')
const errMessage = document.querySelector('.error-mess')

rgbInput.forEach(item => {
    item.addEventListener('input', () => {
        let val = item.value.replace(/\D/g, '')
        val = val.substring(0, 3)
        item.value = val
    })
})


const getRGBColor = () => {
    let rgbColorArr = []
    rgbInput.forEach(item => {
        rgbColorArr.push(+item.value)
    })
    convertRGBToHex(rgbColorArr);
}

const convertRGBToHex = (arrRGB) => {
    let hex = '#'
    arrRGB.forEach(element => {
        if (element <= 15) element = '0' + element
        hex += element.toString(16);
    });
    hexData.textContent = hex.toUpperCase();
    colorBlock.style.backgroundColor = hex
}

convertBtn.addEventListener('click', () => {
    let control = 0
    rgbInput.forEach(item => {
        if (item.value > 255) {
            item.classList.add('error-input')
            control += 1
            console.log(control)
        } else {
            item.classList.remove('error-input')
        }
    })
    if (control === 0) {
        errMessage.classList.remove('act')
        getRGBColor()
    } else {
        errMessage.classList.add('act')
    }
})




