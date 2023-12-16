import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Status from "./components/State";
const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: true },
];

export default function App() {
    const [items, setItems] = useState([]);

    function handleAddItems(item) {
        setItems((items) => [...items, item]);
    }
    function handleDeleteItem(id) {
        setItems(items.filter((item) => item.id !== id));
    }
    function handleToggleItem(id) {
        setItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, packed: !item.packed } : item
            )
        );
    }
    function clearItems() {
        if (!items.length) return;
        const confirmed = window.confirm(
            "Are you sure you want to delete all items ?"
        );

        if (confirmed) setItems([]);
    }
    return (
        <div className="app">
            <Logo />
            <Form addItem={handleAddItems} />
            <PackingList
                deleteItem={handleDeleteItem}
                items={items}
                toggleItem={handleToggleItem}
                clearItems={clearItems}
            />
            <Status items={items} />
        </div>
    );
}
