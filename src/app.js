import express from "express";
import cors from "cors";
import departmentRoutes from "../src/routes/department.routes.js";
import designationRoutes from "../src/routes/designation.routes.js";
import countryRoutes from "../src/routes/country.routes.js";
import stateRoutes from "../src/routes/state.routes.js";
import cityRoutes from "../src/routes/city.routes.js";
import employeeRoutes from "../src/routes/employee.routes.js";
import loginRoutes from "../src/routes/login.routes.js";
const app = express();
//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use("/uploads", express.static("uploads"));
//routes
app.use("/api/departments", departmentRoutes);
app.use("/api/designations", designationRoutes);
app.use("/api/countries", countryRoutes);
app.use("/api/states", stateRoutes);
app.use("/api/cities", cityRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/login", loginRoutes);
export default app;
//# sourceMappingURL=app.js.map