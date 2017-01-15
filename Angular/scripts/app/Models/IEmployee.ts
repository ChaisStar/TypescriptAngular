module App.Models {
    "use strict";
    export interface IEmployee {
        Id: number;
        FirstName: string;
        LastName: string;
        Profession: IProfession;
    }
}