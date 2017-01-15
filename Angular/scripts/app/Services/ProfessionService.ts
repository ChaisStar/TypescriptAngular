module App.Services {
    "use strict";

    export class ProfessionService extends BaseService<App.Models.IProfession> {
        static $inject = ["$http"];
        constructor($http: ng.IHttpService) {
            super($http, "/api/professions/");
        }
    }

    angular
        .module("App.Module")
        .service("professionService", ProfessionService);
}