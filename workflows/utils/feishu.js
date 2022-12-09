const axios = require('axios');

const env = require("./env");

async function feishurobot({ subject, text, html }) {
    axios.post(env.FEISHU_WEBHOOK,{
        "msg_type": "text",
        "content": {
            "text": `${subject}\n${text || html}`
        }
    })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error)
        })

}
module.exports = feishurobot;
