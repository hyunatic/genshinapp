import { Injectable } from '@angular/core';

import bannerDetails from './data/banner.json'
import standardbanner from './data/wanderlust-invocation.json'
import weaponbanner from './data/epitome-invocation.json'

import ascensionMaterial from './ascensionmats/materials.json'
import charMaterial from './ascensionmats/characters.json'

declare var require: any
@Injectable({
    providedIn: 'root'
})

export class DataService {

    constructor() { }

    getBannerData = (bannerName) => {
        if (bannerName === "wanderlust-invocation") 
            return this.WanderlustInvocationBanner()
        else if (bannerName === "epitome-invocation") 
            return this.EpitomeInvocationBanner()
        else
            return this.EventBanner(bannerName)
    }
    EventBanner = (bannerName) => {
        const filename = bannerName+".json"
        return require("./data/" + filename)
    }
    WanderlustInvocationBanner = () => {
        return standardbanner
    }
    EpitomeInvocationBanner = () => {
        return weaponbanner
    }
    getBannerList = () => {
        return bannerDetails
    }
    getAscensionMats = () => {
        return ascensionMaterial
    }
    getCharMats = (charName) => {
        return charMaterial[charName.toLowerCase()]
    }
}
