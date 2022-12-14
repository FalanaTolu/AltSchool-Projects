const carrier = document.getElementById("number")
const image = document.querySelector(".image-class img")

function displayImage() {
    const carrierNumber = carrier.value
    
    const carrierNumberMtn = ["0703", "0706", "0803", "0806", "0810", "0813", "0816", "0814", "0903", "0906", 
    "+234703", "+234706", "+234803", "+234806", "+234810", "+234813", "+234816", "+234814", "+234903", "+234906"]
    const carrierNumberMtnFound = carrierNumberMtn.some(number => carrierNumber.startsWith(number))
    
    const carrierNumberGlo = ["0705", "0805", "0811", "0807", "0815", "0905", 
    "+234705", "+234805", "+234811", "+234807", "+234815", "+234905"]
    const carrierNumberGloFound = carrierNumberGlo.some(number => carrierNumber.startsWith(number))
    
    const carrierNumberAirtel = ["0701", "0708", "0802", "0808", "0812", "0901", "0902", "0907", 
    "+234701", "+234708", "+234802", "+234808", "+234812", "+234901", "+234902", "+234907"]
    const carrierNumberAirtelFound = carrierNumberAirtel.some(number => carrierNumber.startsWith(number))
    
    const carrierNumber9mobile = ["0809", "0817", "0818", "0908", "0909", 
    "+234809", "+234817", "+234818", "+234908", "+234909"]
    const carrierNumber9mobileFound = carrierNumber9mobile.some(number => carrierNumber.startsWith(number))
    
    const carrierNumberNtel = ["0804", "+234804"]
    const carrierNumberNtelFound = carrierNumberNtel.some(number => carrierNumber.startsWith(number))
    
    const carrierNumberSmile = ["0702", "+234702"]
    const carrierNumberSmileFound = carrierNumberSmile.some(number => carrierNumber.startsWith(number))
    
    const carrierNumberMultilinks = ["0709", "+234709"]
    const carrierNumberMultilinksFound = carrierNumberMultilinks.some(number => carrierNumber.startsWith(number))
    
    const carrierNumberZoomMobile = ["0707", "+234707"]
    const carrierNumberZoomMobileFound = carrierNumberZoomMobile.some(number => carrierNumber.startsWith(number))

    if (carrierNumberMtnFound) {
        image.src = "images/mtn.jpg"
    } else if (carrierNumberGloFound) {
        image.src = "images/glo.jpg"
    } else if (carrierNumberAirtelFound) {
        image.src = "images/airtel.jpg"
    } else if (carrierNumber9mobileFound) {
        image.src = "images/9mobile.jpg"
    } else if (carrierNumberNtelFound) {
        image.src = "images/ntel.jpg"
    } else if (carrierNumberSmileFound) {
        image.src = "images/smile.jpg"
    } else if (carrierNumberMultilinksFound) {
        image.src = "images/multilinks.jpg"
    } else if (carrierNumberZoomMobileFound) {
        image.src = "images/zoom-mobile.jpg"
    }  else {
        image.src = "images/null.png"
    }  
}

carrier.addEventListener("input", displayImage)


carrier.oninvalid = function() {
    // event.target.setCustomValidity("Please enter an airtel number");
    carrier.title = "Only airtel numbers that contain at least eleven digits(without the country code) and start with 0701, 0708, 0802, 0808, 0812, 0901, 0902, 0907 are valid"
}
