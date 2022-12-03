class cookieClass{
    #ExpDays;
    #ExpDate;
    constructor(expDays=1){
        this.#ExpDays = expDays;
    }
    setCookieExp(expDays=this.#ExpDays){
        const dateObj = new Date();
        dateObj.setTime(dateObj.getTime() + (expDays*24*60*60*1000));
        this.#ExpDate = "expires="+dateObj.toUTCString();
    }
    setCookie(key,value){
        document.cookie = `${key}=${value};${this.#ExpDate}`;
    }
    getCookie(cookieKey){
        let decodeCookie = decodeURIComponent(document.cookie);
        let cookieArray = decodeCookie.split(';');
        for(let value of cookieArray){
            let cookiePair = value.split('=');
            if(cookiePair[0].includes(cookieKey)){
                return cookiePair[1];
            }
        }
        return "";
    }
}
export default cookieClass;