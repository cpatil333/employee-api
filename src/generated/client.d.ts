import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Employees
 * const employees = await prisma.employee.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model Employee
 *
 */
export type Employee = Prisma.EmployeeModel;
/**
 * Model Department
 *
 */
export type Department = Prisma.DepartmentModel;
/**
 * Model Designation
 *
 */
export type Designation = Prisma.DesignationModel;
/**
 * Model Country
 *
 */
export type Country = Prisma.CountryModel;
/**
 * Model State
 *
 */
export type State = Prisma.StateModel;
/**
 * Model City
 *
 */
export type City = Prisma.CityModel;
//# sourceMappingURL=client.d.ts.map