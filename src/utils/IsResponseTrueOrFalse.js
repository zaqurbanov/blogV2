const ErrorHandlerMiddleWares = require("../middlewares/ErrorHandlerMiddleWares")

//* response ve message parametrleri alir.
// eger response false olarsa geriye error qaytarir. 
// eger  response true olarsa geriye yeniden responsu qaytarir
class isResponseTrueOrFalse{

    check(response,message){
        if(!response)
            // Errorlari bir yerden idare etmek ucun . ve sabit strukturda mesajlari gostermek ucun error middleware yaradiriq
            // ve response olaraq deyer false oldugu zaman error yaranir
            throw ErrorHandlerMiddleWares.newError(message)

        return response
    }
}


module.exports = new isResponseTrueOrFalse()