import AllTool from "../Pages/Tools/AllTool";
import PurchaseTool from "../Pages/Tools/PurchaseTool"

export const PrivateRoutes = [
    {path: "alltool", name: "AllTool", Component: AllTool},
    {path: "tool/:id", name: "PurchaseTool", Component: PurchaseTool},
]