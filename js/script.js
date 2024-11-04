


const convertRGBToHex = (arrRGB)=> {
    let hex ='#'
    arrRGB.forEach(element => {     
        hex+=element.toString(16);            
    }); 
    console.log(hex.toUpperCase());  
}

convertRGBToHex([44, 183, 66])

