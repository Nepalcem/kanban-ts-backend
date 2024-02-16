"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(__dirname, "../environment", ".env") });
const express_1 = __importDefault(require("express"));
//routers
const routes_1 = require("../routes");
const app = (0, express_1.default)();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";
app.use((0, morgan_1.default)(formatsLogger));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//routes
app.use("/boards", routes_1.boardRouter);
app.use("/tasks", routes_1.taskRouter);
app.use((_req, res) => {
    res.status(404).json({ message: "Not found" });
});
app.use((err, _req, res, _next) => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({ message: message });
    return Promise.resolve();
});
exports.default = app;
//# sourceMappingURL=app.js.map