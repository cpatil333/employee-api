export declare const getEmployeesByDepartmentService: (departmentId: number) => Promise<{
    departmentId: number;
    employeeName: string;
    department: string;
    designation: string;
}[]>;
export declare const getEmployeesByGenderService: (gender: string) => Promise<{
    employeeId: number;
    employeeName: string;
    department: string;
    designation: string;
}[]>;
export declare const getEmployeesByStatusService: (status: string) => Promise<{
    employeeId: number;
    employeeName: string;
    department: string;
    designation: string;
}[]>;
//# sourceMappingURL=dashboard.service.d.ts.map