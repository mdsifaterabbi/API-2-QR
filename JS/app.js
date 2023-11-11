const userName = document.getElementById('userName');
const qrHeight = document.getElementById('qrHeight');
const qrWidth = document.getElementById('qrWidth');
const submitbtn = document.getElementById('submitbtn');


submitbtn.addEventListener('click',()=>{
    let user_Name = userName.value;
    let qr_Height = qrHeight.value;
    let qr_Width = qrWidth.value;
    // console.log(user_Name,qr_Height,qr_Width);
    if(user_Name.length == 0 || qr_Height.length == 0 || qr_Width.length == 0)
    {
        alert("blank input not allowed");  	
         return false; 
    }
    //console.log(user_Name,qr_Height,qr_Width);
    const myQR = document.getElementById('myQR');
    myQR.src = `https://api.qrserver.com/v1/create-qr-code/?size=${qr_Height}x${qr_Width}&data=${user_Name}`;
    
    userName.value = '';
    qrHeight.value = '';
    qrWidth.value = '';

    return true; 
}) 


