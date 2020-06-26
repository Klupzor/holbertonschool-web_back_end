import createEmployeesObject from "./11-createEmployeesObject";

export default function createReportObject(employeesList) {
    return {
        allEmployees: createEmployeesObject("engineering", employeesList)
    };
};
