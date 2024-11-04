const rgbInput = document.querySelectorAll('.rgb-block input')
const convertBtn = document.querySelector('.convert-btn')
const hexData = document.querySelector('.hex-data')
const colorBlock = document.querySelector('.color-block')

const getRGBColor = () => {
    let rgbColorArr = []
    rgbInput.forEach(item => {
        rgbColorArr.push(+item.value)
    })
    
    convertRGBToHex(rgbColorArr);    
}

const convertRGBToHex = (arrRGB)=> {
    let hex ='#'
    arrRGB.forEach(element => {     
        hex+=element.toString(16);            
    }); 
    hexData.textContent=hex.toUpperCase();  
    colorBlock.style.backgroundColor=hex
}

convertBtn.addEventListener('click', ()=> {
    getRGBColor()    
})




