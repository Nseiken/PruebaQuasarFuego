class Message {
    /**
     * Lógica de servicio para obtener el mensaje
     * @param {*} message1 
     * @param {*} message2 
     * @param {*} message3 
     * @returns String
     */
    getMessage(message1, message2, message3) {
        let decodedMsg = "";
        let size = 0;

        if (message1.length > message2.length && message1.length > message3.length) {
            size = message1.length;
        } else if (message2.length > message3.length && message2.length > message1.length) {
            size = message2.length;
        } else {
            size = message3.length;
        }
        
        for (let i = 0;	i < size; i++) {
            if (message1[i] !== "") {
                decodedMsg = decodedMsg + message1[i] + " ";
            } else if (message2[i] !== "") {
                decodedMsg = decodedMsg + message2[i] + " ";
            } else if (message3[i] !== "") {
                decodedMsg = decodedMsg + message3[i] + " ";
            } else {
                decodedMsg = "No se puede determinar el mensaje";
                break;
            }
        }

        return decodedMsg;
    }
}

module.exports = Message