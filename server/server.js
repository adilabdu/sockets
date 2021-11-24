const io = require("socket.io")(3000, {
    cors: {
        origin: ["http://localhost:5000", "http://localhost:58160"],
    },
})

let flip

io.on("connection", (socket) => {
    console.log(socket.id)

    socket.on('switch_state', (arg) => {
        flip = arg
        console.log(`New Flip State: ${ flip }`)
        io.emit('switch_bulb', flip)
    })

})