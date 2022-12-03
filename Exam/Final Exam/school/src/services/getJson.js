import http from "../http-common.js";
class getJson{
    load(filename){
        return http.get(`data/${filename}.json`);
    }
}
export default new getJson();