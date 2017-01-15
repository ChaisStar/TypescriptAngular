module App.Services {
    "use strict";
    export class BaseService<T> implements IService<T> {
        url: string;
        static $inject = ["$http", "url"];

        constructor(
            private $http: ng.IHttpService,
            url: string
        ) {
            this.url = url;
        }

        getAll(): ng.IPromise<Array<T>> {
            return this.$http.get(this.url)
                .then((response: ng.IHttpPromiseCallbackArg<Array<T>>): Array<T> => {
                    return response.data;
                });
        }

        getById(id: number): ng.IPromise<T> {
            return this.$http.get(this.url + id)
                .then((response: ng.IHttpPromiseCallbackArg<T>): T => {
                    return response.data;
                });
        };

        add(entity: T): ng.IPromise<any> {
            return this.$http.post(this.url, entity)
                .then((response: ng.IHttpPromiseCallbackArg<any>): any => {
                    return response.data;
                });
        };

        update(entity: T): ng.IPromise<any> {
            return this.$http.put(this.url, entity)
                .then((response: ng.IHttpPromiseCallbackArg<any>): any => {
                    return response.data;
                });
        };

        delete(id: number): ng.IPromise<any> {
            return this.$http.delete(this.url + id)
                .then((response: ng.IHttpPromiseCallbackArg<any>): any => {
                    return response.data;
                });
        };
    }
}