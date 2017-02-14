import { OpaqueToken } from "@angular/core"; //不透明的令牌

export interface AppConfig {
    apiEndpoint:string,
    title:string
}

export const HERO_DI_CONFIG:AppConfig = {
    apiEndpoint:'api.heroes.com',
    title:'Dependency Injection'
};


export let APP_CONFIG = new OpaqueToken("app.config");
