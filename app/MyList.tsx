"use client";
import { useState } from "react";
import { List, ListItem, ListItemText, ListItemButton } from "@mui/material";

const MyList = () => {
    const [selectedIndex, setSelectedIndex] = useState<number>();
    const [selectedList, setSelectedList] = useState<number[]>([]);

    let products = [
        { desc: "iPad", price: 20000 },
        { desc: "iPhone 8", price: 20000 },
        { desc: "iPhone X", price: 30000 },
    ];

    const handleListItemClick = (index: number) => {
        setSelectedIndex(index);
        setSelectedList((selectedIndex) => [...selectedIndex, index]);
    };

    return (
        <div>
            <List subheader="Product list" aria-label="product list">
                {products.map((product, index) => (
                    <ListItem divider key={product.desc}>
                        <ListItemButton
                            selected={selectedIndex === index}
                            onClick={(event) => handleListItemClick(index)}
                        >
                            <ListItemText
                                primary={product.desc}
                                secondary={product.price}
                            ></ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <h1>{selectedList.map((i) => i + " ")}</h1>
        </div>
    );
};
export default MyList;
