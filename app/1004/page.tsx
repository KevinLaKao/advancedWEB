"use client";
import {
    Box,
    Input,
    List,
    ListItem,
    ListItemText,
    Button,
    IconButton,
    Dialog,
    TextField,
    DialogTitle,
    DialogContent,
    DialogActions,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import { use, useState } from "react";

export default function ProductList() {
    const [products, setProducts] = useState([
        { desc: "iPad", price: 20000 },
        { desc: "iPhone 8", price: 20000 },
        { desc: "iPhone X", price: 30000 },
    ]);
    const [newProduct, setNewProduct] = useState({
        visible: false,
        desc: "",
        price: 0,
    });
    const [reviseDialog, setReviseDialog] = useState({
        visible: false,
        desc: "",
        price: 0,
        i: 0,
    });

    const handleClick = function (e: React.ChangeEvent<HTMLInputElement>) {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    };
    const show = () => {
        setNewProduct({ ...newProduct, visible: true });
    };
    const hide = () => {
        setNewProduct({ ...newProduct, visible: false });
    };
    const newProducts = () => {
        setProducts(() => [...products, newProduct]);
        setNewProduct({ ...newProduct, visible: false });
    };

    const deleteItem = (index: number) => {
        let oriProducts = products;
        let afterDeleteProducts = oriProducts.splice(index, 1);
        setProducts(() => [...oriProducts]);
    };

    const close = () => {
        setReviseDialog({
            ...reviseDialog,
            visible: false,
        });
    };

    const handleRevise = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "desc") {
            setReviseDialog({
                ...reviseDialog,
                desc: e.target.value,
            });
        }
        if (e.target.name === "price") {
            setReviseDialog({
                ...reviseDialog,
                price: Number(e.target.value),
            });
        }
    };

    const revise = () => {
        const changeProduct = products;
        changeProduct.splice(reviseDialog.i, 1, {
            desc: reviseDialog.desc,
            price: reviseDialog.price,
        });
        setProducts([...changeProduct]);
        close();
    };

    return (
        <Box
            sx={{
                width: "80vw",
                height: "100vh",
                backgroundColor: "background.paper",
                color: "black",
                textAlign: "left",
            }}
        >
            <Dialog open={reviseDialog.visible} onClose={close}>
                <DialogTitle>修改產品</DialogTitle>
                <DialogContent>
                    <TextField
                        label="產品描述"
                        variant="outlined"
                        name="desc"
                        value={reviseDialog.desc}
                        onChange={handleRevise}
                    />
                    <p />
                    <TextField
                        label="產品價格"
                        variant="outlined"
                        name="price"
                        value={reviseDialog.price}
                        onChange={handleRevise}
                    />
                    <p />
                </DialogContent>
                <DialogActions>
                    <IconButton
                        aria-label="close"
                        onClick={close}
                        sx={{
                            position: "absolute",
                            right: 8,
                            top: 8,
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={revise}
                    >
                        修改
                    </Button>
                </DialogActions>
            </Dialog>

            {newProduct.visible ? (
                <Dialog open={newProduct.visible} onClose={hide}>
                    <DialogTitle>新增產品</DialogTitle>
                    <DialogContent>
                        <TextField
                            label="產品描述"
                            variant="outlined"
                            name="desc"
                            value={newProduct.desc}
                            onChange={handleClick}
                        />
                        <p />
                        <TextField
                            label="產品價格"
                            variant="outlined"
                            name="price"
                            value={newProduct.price}
                            onChange={handleClick}
                        />
                        <p />
                    </DialogContent>
                    <DialogActions>
                        <IconButton
                            aria-label="close"
                            onClick={hide}
                            sx={{
                                position: "absolute",
                                right: 8,
                                top: 8,
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={newProducts}
                        >
                            新增
                        </Button>
                    </DialogActions>
                </Dialog>
            ) : (
                <div>
                    <Button onClick={show}>新增產品</Button>
                    <List subheader="Product list" aria-label="product list">
                        {products.map((product, index) => (
                            <ListItem divider key={product.desc}>
                                <ListItemText
                                    primary={product.desc}
                                    secondary={product.price}
                                ></ListItemText>
                                <IconButton
                                    edge="end"
                                    aria-label="edit"
                                    onClick={() => {
                                        setReviseDialog({
                                            ...reviseDialog,
                                            visible: true,
                                            desc: product.desc,
                                            price: product.price,
                                            i: index,
                                        });
                                    }}
                                >
                                    <EditIcon />
                                </IconButton>
                                <IconButton
                                    edge="end"
                                    aria-label="delete"
                                    onClick={() => deleteItem(index)}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </ListItem>
                        ))}
                    </List>
                </div>
            )}
        </Box>
    );
}
