import { useState } from "react";

const MultipleChoiceExercise = () => {
    const [isSelected, setIsSelected] = useState('');

    const handleChange = (item) => {
        setIsSelected(item)
    }
    return (
        <div style={{marginTop: 10}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <h3>Q: 2.</h3>
                <h3 style={{marginLeft: 15}}>What is HTML?</h3>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 5}}>
                <Option isSelected={isSelected} handleChange={handleChange} title="an HyperText Markup Language" />
                <Option isSelected={isSelected} handleChange={handleChange} title="a programming language" />
                <Option isSelected={isSelected} handleChange={handleChange} title="a styling language" />
                <Option isSelected={isSelected} handleChange={handleChange} title="a scripting language" />
            </div>
        </div>
    );
}

export default MultipleChoiceExercise;

interface OptionProps {
    title: string;
    isSelected: string;
    handleChange: () => null;
}

const Option = ({title, isSelected, handleChange}: OptionProps) => {
    return (
        <button onClick={() => handleChange(title)} style={{ backgroundColor: isSelected === title ? 'purple' : null, color: isSelected === title ? '#fff' : '#000', borderRadius: 20}}>{title}</button>
    );
}