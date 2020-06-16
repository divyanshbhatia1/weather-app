export enum AppType{
    Modal,
    InLine
}

export class AppSettings{
    public static API_ID = "1547eadac1de654c7e5f1a5953e6a24e"
    public static API_Path = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" + AppSettings.API_ID;
    public static Mode =  AppType.InLine;
}

