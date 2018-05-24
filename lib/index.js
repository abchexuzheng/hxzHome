import CONFIG from './../config'


let address=`http://${CONFIG.HOST+CONFIG.PORT}`;


let query=(args)=>{
    let url=address;
    for(let i in args){
        if(url.indexOf("?")<0){

        }
    }
}