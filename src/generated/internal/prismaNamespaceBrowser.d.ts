import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: any;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: any;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: any;
export declare const ModelName: {
    readonly Employee: 'Employee';
    readonly Department: 'Department';
    readonly Designation: 'Designation';
    readonly Country: 'Country';
    readonly State: 'State';
    readonly City: 'City';
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: 'ReadUncommitted';
    readonly ReadCommitted: 'ReadCommitted';
    readonly RepeatableRead: 'RepeatableRead';
    readonly Serializable: 'Serializable';
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const EmployeeScalarFieldEnum: {
    readonly employeeId: 'employeeId';
    readonly name: 'name';
    readonly email: 'email';
    readonly phone: 'phone';
    readonly departmentId: 'departmentId';
    readonly designationId: 'designationId';
    readonly status: 'status';
    readonly joiningDate: 'joiningDate';
    readonly salary: 'salary';
    readonly maritalStatus: 'maritalStatus';
    readonly address1: 'address1';
    readonly address2: 'address2';
    readonly pincode: 'pincode';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
    readonly cityId: 'cityId';
    readonly countryId: 'countryId';
    readonly stateId: 'stateId';
};
export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum];
export declare const DepartmentScalarFieldEnum: {
    readonly id: 'id';
    readonly name: 'name';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum];
export declare const DesignationScalarFieldEnum: {
    readonly id: 'id';
    readonly name: 'name';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type DesignationScalarFieldEnum = (typeof DesignationScalarFieldEnum)[keyof typeof DesignationScalarFieldEnum];
export declare const CountryScalarFieldEnum: {
    readonly id: 'id';
    readonly name: 'name';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum];
export declare const StateScalarFieldEnum: {
    readonly id: 'id';
    readonly countryId: 'countryId';
    readonly name: 'name';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type StateScalarFieldEnum = (typeof StateScalarFieldEnum)[keyof typeof StateScalarFieldEnum];
export declare const CityScalarFieldEnum: {
    readonly id: 'id';
    readonly stateId: 'stateId';
    readonly name: 'name';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type CityScalarFieldEnum = (typeof CityScalarFieldEnum)[keyof typeof CityScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: 'asc';
    readonly desc: 'desc';
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: 'default';
    readonly insensitive: 'insensitive';
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: 'first';
    readonly last: 'last';
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map