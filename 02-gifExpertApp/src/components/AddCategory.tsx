import React, {ChangeEvent, useState} from "react";

interface AddCategoryProps {
    onAddCategory: (newValue: string) => void
}

export const AddCategory = ({onAddCategory}: AddCategoryProps) => {

    const [inputValue, setInputValue] = useState<string>('');
    const handleInputChange = ({target}: ChangeEvent<HTMLInputElement>): void => {
        setInputValue(target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newValue: string = inputValue.trim()
        if (newValue.length <= 1) {
            return
        }
        onAddCategory(newValue)
        setInputValue('')
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder={"Buscar Gif"}
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
};

