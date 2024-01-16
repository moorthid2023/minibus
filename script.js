let tbody=document.getElementById("tbody");
let content ='';
const busDetailsObject=[
{language:"en",from:"காமராஜர் நகர்",to:"வெள்ளைக்கோட்டை, சிவன் கோவில்",time:6.00,amOrpm:"முப ",service:"மீனாம்பிகைமீனாம்பிகை"},
{language:"en",from:"காமராஜர் நகர்",to:"வெள்ளைக்கோட்டை, சிவன் கோவில்",time:6.25,amOrpm:"முப ",service:"ஜெயா"},
{language:"en",from:"காமராஜர் நகர்",to:"வெள்ளைக்கோட்டை, சிவன் கோவில்",time:6.55,amOrpm:"முப ",service:"மீனாம்பிகைமீனாம்பிகை"},
{language:"en",from:"காமராஜர் நகர்",to:"வெள்ளைக்கோட்டை, சிவன் கோவில்",time:7.25,amOrpm:"முப ",service:"ஜெயா"},
{language:"en",from:"காமராஜர் நகர்",to:"வெள்ளைக்கோட்டை, சிவன் கோவில்",time: 7.55,amOrpm:"முப ",service:"மீனாம்பிகைமீனாம்பிகை"},
{language:"en",from:"காமராஜர் நகர்",to:"வெள்ளைக்கோட்டை, சிவன் கோவில்",time: 8.30,amOrpm:"முப ", service:"ஜெயா"},
{language:"en",from:"காமராஜர் நகர்",to:"வெள்ளைக்கோட்டை, சிவன் கோவில்",time: 9.10,amOrpm:"முப " ,service:"மீனாம்பிகைமீனாம்பிகை"},
{language:"en",from:"காமராஜர் நகர்",to:"வெள்ளைக்கோட்டை, சிவன் கோவில்",time: 9.55,amOrpm:"முப ", service:"ஜெயா"},
{language:"en",from:"காமராஜர் நகர்",to:"வெள்ளைக்கோட்டை, சிவன் கோவில்",time:10.35,amOrpm:"முப ", service:"மீனாம்பிகைமீனாம்பிகை"},
{language:"en",from:"காமராஜர் நகர்",to:"வெள்ளைக்கோட்டை, சிவன் கோவில்",time:11.05,amOrpm:"முப " ,service:"ஜெயா"},
{language:"en",from:"காமராஜர் நகர்",to:"வெள்ளைக்கோட்டை, சிவன் கோவில்",time:11.45,amOrpm:"முப " ,service:"மீனாம்பிகைமீனாம்பிகை"},
{language:"en",from:"காமராஜர் நகர்",to:"வெள்ளைக்கோட்டை, சிவன் கோவில்",time:12.30,amOrpm:"பிப" ,service:"ஜெயா"},
{language:"en",from:"காமராஜர் நகர்",to:"வெள்ளைக்கோட்டை, சிவன் கோவில்",time: 1.05,amOrpm:"பிப" ,service:"மீனாம்பிகைமீனாம்பிகை"},
{language:"en",from:"காமராஜர் நகர்",to:"வெள்ளைக்கோட்டை, சிவன் கோவில்",time: 1.45,amOrpm:"பிப", service:"ஜெயா"},
{language:"en",from:"காமராஜர் நகர்",to:"வெள்ளைக்கோட்டை, சிவன் கோவில்",time: 2.15,amOrpm:"பிப" ,service:"மீனாம்பிகைமீனாம்பிகை"},
{language:"en",from:"காமராஜர் நகர்",to:"வெள்ளைக்கோட்டை, சிவன் கோவில்",time: 2.55,amOrpm:"பிப", service:"ஜெயா"},
{language:"en",from:"காமராஜர் நகர்",to:"வெள்ளைக்கோட்டை, சிவன் கோவில்",time: 3.35,amOrpm:"பிப" ,service:"மீனாம்பிகைமீனாம்பிகை"},
{language:"en",from:"காமராஜர் நகர்",to:"வெள்ளைக்கோட்டை, சிவன் கோவில்",time: 4.15,amOrpm:"பிப", service:"ஜெயா"},
{language:"en",from:"காமராஜர் நகர்",to:"வெள்ளைக்கோட்டை, சிவன் கோவில்",time: 5.05,amOrpm:"பிப" ,service:"மீனாம்பிகைமீனாம்பிகை"},
{language:"en",from:"காமராஜர் நகர்",to:"வெள்ளைக்கோட்டை, சிவன் கோவில்",time: 5.55,amOrpm:"பிப", service:"ஜெயா"},
{language:"en",from:"காமராஜர் நகர்",to:"வெள்ளைக்கோட்டை, சிவன் கோவில்",time: 6.25,amOrpm:"பிப" ,service:"மீனாம்பிகைமீனாம்பிகை"},
{language:"en",from:"காமராஜர் நகர்",to:"வெள்ளைக்கோட்டை, சிவன் கோவில்",time: 7.05,amOrpm:"பிப", service:"ஜெயா"},
{language:"en",from:"காமராஜர் நகர்",to:"வெள்ளைக்கோட்டை, சிவன் கோவில்",time: 7.40,amOrpm:"பிப" ,service:"மீனாம்பிகைமீனாம்பிகை"},
{language:"en",from:"காமராஜர் நகர்",to:"வெள்ளைக்கோட்டை, சிவன் கோவில்",time: 8.15,amOrpm:"பிப", service:"ஜெயா"},
{language:"en",from:"காமராஜர் நகர்",to:"வெள்ளைக்கோட்டை, சிவன் கோவில்",time: 9.10,amOrpm:"பிப" ,service:"மீனாம்பிகைமீனாம்பிகை"},
{language:"en",from:"காமராஜர் நகர்",to:"வெள்ளைக்கோட்டை, சிவன் கோவில்",time: 9.25,amOrpm:"பிப", service:"ஜெயா"},
{language:"en",from:"காமராஜர் நகர்",to:"வெள்ளைக்கோட்டை, சிவன் கோவில்",time: 9.55,amOrpm:"பிப" ,service:"மீனாம்பிகைமீனாம்பிகை"},
{language:"en",from:"காமராஜர் நகர்",to:"வெள்ளைக்கோட்டை, சிவன் கோவில்",time:10.25,amOrpm:"பிப" ,service:"ஜெயா"}
]

for(let row=0;row<busDetailsObject.length;row++){
    
        content +=`<tr>
        <td class="body-no">${row+1}</td>
        <td class="body-bus">${busDetailsObject[row].service}</td>
        <td class="body-time">${busDetailsObject[row].time}</td>
        <td class="body-ampm">${busDetailsObject[row].amOrpm}</td>
        <td class="body-from">${busDetailsObject[row].from}</td>
        <td class="body-to">${busDetailsObject[row].to}</td>
    </tr>`
   
};
const app = document.querySelector('.app');
let header=document.querySelector('header');
app.addEventListener('scroll',()=>{
        let value=0;
       value += app.scrollLeft;
       header.style.left = value+'px';
})


tbody.innerHTML=content;