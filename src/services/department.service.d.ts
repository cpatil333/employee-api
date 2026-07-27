import type { CreateDepartmentDto } from "../dto/CreateDepartmentDto.js";
import type { UpdateDepartmentDto } from "../dto/UpdateDepartmentDto.js";
export declare const getDepartments: () => Promise<{
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}[]>;
export declare const getDepartment: (departmentId: number) => Promise<{
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
} | null>;
export declare const addDepartment: (depatment: CreateDepartmentDto) => Promise<{
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const editDepartment: (depatment: UpdateDepartmentDto) => Promise<{
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
} | undefined>;
export declare const removeDepartment: (departmentId: number) => Promise<{
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}>;
//# sourceMappingURL=department.service.d.ts.map