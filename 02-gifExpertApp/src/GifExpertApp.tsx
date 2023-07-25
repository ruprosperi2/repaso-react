import {useState} from "react";

import {AddCategory} from "./components/AddCategory.tsx";
import {GifGrid} from "./components/GifGrid.tsx";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState<string[]>(['Dragon ball']);

    const AddNewCategory = (category: string) => {
        if (categories.includes(category)) {
            return
        }

        setCategories([category, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onAddCategory={AddNewCategory}/>

            {
                categories.map((category) => {
                    return (
                        <GifGrid key={category} category={category}/>
                    )
                })
            }
        </>
    );
};

