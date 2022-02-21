import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class UserService {
    // activatedEmitter = new EventEmitter<boolean>();
    // We want to use subject here better way then EventEmitter
    activatedEmitter = new Subject<boolean>();
 }