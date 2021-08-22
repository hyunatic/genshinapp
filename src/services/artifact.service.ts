import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import flowerMainStats from './artifact/flower.json'
import plumeMainStats from './artifact/plume.json'
import subStats from './artifact/substats.json'
import otherMainStats from './artifact/mainstats.json'


@Injectable({
    providedIn: 'root'
})
export class ArtifactService {

    private ArtifactList = new BehaviorSubject<Array<any>>([])
    userArtifactList = this.ArtifactList.asObservable()

    constructor() { }

    getFlowerMainStats = () => {
        return flowerMainStats
    }
    getPlumeMainStats = () => {
        return plumeMainStats
    }
    getSubStats = () => {
        return subStats
    }
    getOtherMainStats = () => {
        return otherMainStats
    }
    saveArtifactList = (arr: any[]) => this.ArtifactList.next(arr)
}
