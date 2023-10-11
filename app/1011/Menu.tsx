"use client";
import { AppBar, Button, Toolbar } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

export default function Menu() {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <AppBar position="static">
            <Toolbar>
                <Button
                    color="inherit"
                    variant={pathname === "/" ? "outlined" : "text"}
                    onClick={() => router.push("/")}
                >
                    主頁面
                </Button>
                <Button
                    color="inherit"
                    variant={pathname === "/1004" ? "outlined" : "text"}
                    onClick={() => router.push("/1004")}
                >
                    產品管理
                </Button>
            </Toolbar>
        </AppBar>
    );
}
