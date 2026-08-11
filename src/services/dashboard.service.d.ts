import type { ExportFilter } from "../dto/ExportFilterDto.js";
export declare const getEmployeesByDepartmentService: (departmentId: number) => Promise<{
    employeeId: number;
    name: string;
    department: string;
    designation: string;
}[]>;
export declare const getEmployeesByGenderService: (gender: string) => Promise<{
    employeeId: number;
    name: string;
    department: string;
    designation: string;
}[]>;
export declare const getEmployeesByStatusService: (status: string) => Promise<{
    employeeId: number;
    name: string;
    department: string;
    designation: string;
}[]>;
export declare const getEmployeesForExport: (options: ExportFilter) => Promise<{
    name: string;
    department: string;
    designation: string;
    gender: string;
    status: string;
}[]>;
//# sourceMappingURL=dashboard.service.d.ts.map