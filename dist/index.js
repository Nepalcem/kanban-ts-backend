"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app/app"));
const { PORT } = process.env || 3000;
const { MONGO_URL } = process.env;
if (!MONGO_URL) {
    console.error("MONGO_URL is not defined in the environment variables.");
    process.exit(1);
}
mongoose_1.default.set("strictQuery", true);
mongoose_1.default
    .connect(MONGO_URL)
    .then(() => {
    console.log("Database connection successfull ");
    app_1.default.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    });
})
    .catch((err) => {
    console.log(`Server cannot start. Error: ${err.message}`);
    process.exit(1);
});
//# sourceMappingURL=index.js.map