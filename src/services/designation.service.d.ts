import type { CreateDesignationDto } from "../dto/CreateDesignationDto.js";
import type { UpdateDesignationDto } from "../dto/UpdateDesignationDto.js";
export declare const getDesignations: () => Promise<{
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}[]>;
export declare const getDesignation: (designationId: number) => Promise<{
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
} | null>;
export declare const addDesignation: (designation: CreateDesignationDto) => Promise<{
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const editDesignation: (designation: UpdateDesignationDto) => Promise<{
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const removeDesignation: (designationId: number) => Promise<{
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}>;
//# sourceMappingURL=designation.service.d.ts.map