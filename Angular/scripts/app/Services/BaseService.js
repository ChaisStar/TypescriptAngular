var App;
(function (App) {
    var Services;
    (function (Services) {
        "use strict";
        var BaseService = (function () {
            function BaseService($http, url) {
                this.$http = $http;
                this.url = url;
            }
            BaseService.prototype.getAll = function () {
                return this.$http.get(this.url)
                    .then(function (response) {
                    return response.data;
                });
            };
            BaseService.prototype.getById = function (id) {
                return this.$http.get(this.url + id)
                    .then(function (response) {
                    return response.data;
                });
            };
            ;
            BaseService.prototype.add = function (entity) {
                return this.$http.post(this.url, entity)
                    .then(function (response) {
                    return response.data;
                });
            };
            ;
            BaseService.prototype.update = function (entity) {
                return this.$http.put(this.url, entity)
                    .then(function (response) {
                    return response.data;
                });
            };
            ;
            BaseService.prototype.delete = function (id) {
                return this.$http.delete(this.url + id)
                    .then(function (response) {
                    return response.data;
                });
            };
            ;
            return BaseService;
        }());
        BaseService.$inject = ["$http", "url"];
        Services.BaseService = BaseService;
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
//# sourceMappingURL=BaseService.js.map