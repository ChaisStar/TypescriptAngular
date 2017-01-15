module App.Services {
    "use strict";
    export interface IService<T> {
        url: string;
        getAll(): ng.IPromise<Array<T>>;
        getById(id: number): ng.IPromise<T>;
        add(entity: T): ng.IPromise<any>;
        update(entity: T): ng.IPromise<any>;
        delete(id: number): ng.IPromise<any>;
    }
}