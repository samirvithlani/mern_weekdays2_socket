const socket = io();

const sendBtn = document.getElementById("send");
const msgInput = document.getElementById("message");
const messages = document.getElementById("messages");

sendBtn.addEventListener("click",()=>{
    console.log(msgInput.value)
    socket.emit("message",msgInput.value)
    var p = document.createElement("p");
    p.innerHTML = msgInput.value;
    p.style.color = "green";
    messages.appendChild(p);
})

