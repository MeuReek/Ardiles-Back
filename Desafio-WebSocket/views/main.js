const socket = io.connect();

function addMessage(e){
    const message = {
        author: document.getElementById("username").value,
        message: document.getElementById("text").value,
        date: Date.now()
    }
    e.preventDefault();
    socket.emit('new-message', message);    
}

function render(data) { 
    const html = data.map((elem, index) =>{
        return(`
        <div>
        <em>${elem.author}</em>
        <em>${new Date(elem.date).toLocaleString()}</em>
        <em>${elem.message}</em>
        </div>`)
    }).join(" ")

    document.getElementById("mensajes").innerHTML = html
 }
 addEventListener("submit",addMessage); 
 socket.on("messages", function(data) { render(data) });