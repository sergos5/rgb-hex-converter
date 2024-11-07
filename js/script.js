const rgbInput = document.querySelectorAll('.rgb-block input')
const convertBtn = document.querySelector('.convert-btn')
const hexData = document.querySelector('.hex-data')
const colorBlock = document.querySelector('.color-block')
const errMessage = document.querySelector('.error-mess')

convertBtn.disabled = 'true'

rgbInput.forEach(item => {
    item.addEventListener('input', () => {
        let val = item.value.replace(/\D/gi, '')
        val = val.substring(0, 3)
        if (val > 255) {
            errMessage.classList.add('act')
            item.classList.add('error-input')
            console.log('макс. значение 255!!!');
        } else {
            errMessage.classList.remove('act')
            item.classList.remove('error-input')
        }
        item.value = val
        console.log(item.value);
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
        hex += element.toString(16);
    });
    hexData.textContent = hex.toUpperCase();
    colorBlock.style.backgroundColor = hex
}

convertBtn.addEventListener('click', () => {
    getRGBColor()
})




