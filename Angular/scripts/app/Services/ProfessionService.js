var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var App;
(function (App) {
    var Services;
    (function (Services) {
        "use strict";
        var ProfessionService = (function (_super) {
            __extends(ProfessionService, _super);
            function ProfessionService($http) {
                return _super.call(this, $http, "/api/professions/") || this;
            }
            return ProfessionService;
        }(Services.BaseService));
        ProfessionService.$inject = ["$http"];
        Services.ProfessionService = ProfessionService;
        angular
            .module("App.Module")
            .service("professionService", ProfessionService);
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
//# sourceMappingURL=ProfessionService.js.map