var App;
(function (App) {
    var Models;
    (function (Models) {
        var Employee = (function () {
            function Employee(firstName, lastName, profession) {
                this.profession = profession;
                this.firstName = firstName;
                this.lastName = lastName;
            }
            return Employee;
        }());
        Models.Employee = Employee;
    })(Models = App.Models || (App.Models = {}));
})(App || (App = {}));
//# sourceMappingURL=Models.js.map