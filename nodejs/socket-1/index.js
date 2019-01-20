const server = require("http").Server();
const io = require("socket.io")(server);
const port = require("./config.json").SERVER_PORT;

require("./backend/connect")(io);

const banner = `
*****************************
    Basic Nodejs course
        Course Project
    Tic Tac Toe Server
*****************************
Status: Online
listening on port: ${port}
`

io.on("connection", (socket) => {
    socket.on("register", (user) => {
        console.info(`Usuario registrado: ${user.name}`)
    })
} )

server.listen(port, () => {
    console.info(banner);
})