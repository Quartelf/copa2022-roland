export class URLUtils {
    private static isDebug  : boolean = true; //true é debbug false é prod
    private static debugServer : string = 'localhost:3000/';
    private static prodServer  : string = 'https://10.3.73.174/'

    public static getUrl(){
        if (URLUtils.isDebug){
            return URLUtils.debugServer;
        }

        return URLUtils.prodServer;
    }
}