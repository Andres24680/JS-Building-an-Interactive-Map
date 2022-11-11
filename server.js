const express = require('express')
const app = express()
const liveServer = require('live-server')

async function main() {

    app.listen(3001, () => {
        liveServer.start({
            port: 3000,
            logLevel: 0,
            root: './public'
        })
    })
}

main()

/*<style>
#map { 
    height: 600px;
    background-color: #ccc;
}
.leaflet-popup-content-wrapper {
    width: 100%;
}
</style>*/

//https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png