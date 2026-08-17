import type { Request, Response } from "express";
export declare const fetchEmployees: (req: Request, res: Response) => Promise<void>;
export declare const fetchEmployeeById: (req: Request, res: Response) => Promise<void>;
export declare const createEmployee: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateEmployee: (req: Request, res: Response) => Promise<void>;
export declare const deleteEmployee: (req: Request, res: Response) => Promise<void>;
export declare const fetchEmployeeByDepartmentId: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=employee.controller.d.ts.map