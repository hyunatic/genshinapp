import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class HistoryService {

    private CharEventBanner = new BehaviorSubject<Array<any>>([])
    charEventBannerHistory = this.CharEventBanner.asObservable();

    private StandardEventBanner = new BehaviorSubject<Array<any>>([])
    standardEventBannerHistory = this.StandardEventBanner.asObservable();

    private WeaponEventBanner = new BehaviorSubject<Array<any>>([])
    WeaponEventBannerHistory = this.WeaponEventBanner.asObservable();

    buffer: any;
    constructor() { }

    updateCharHistory = (arr: any[]) => {
        this.charEventBannerHistory.subscribe(x => this.buffer = x)
        this.CharEventBanner.next([...arr,...this.buffer])
    }
    updateWeapHistory = (arr: any[]) => {
        this.WeaponEventBannerHistory.subscribe(x => this.buffer = x)
        this.WeaponEventBanner.next([ ...arr, ...this.buffer])
    }
    updateStandardHistory = (arr: any[]) => {
        this.standardEventBannerHistory.subscribe(x => this.buffer = x)
        this.StandardEventBanner.next([...arr, ...this.buffer])
    }


}
