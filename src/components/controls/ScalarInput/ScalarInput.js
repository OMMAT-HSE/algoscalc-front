
// Libraries
import * as React from 'react';

// Components
import TextField from "@mui/material/TextField";

// Types
type ScalarInputTypes = {
    description?: string;
    title?: string;
    callback?: () => void;
    isDisabeld?: boolean;
    isFullWidth?: boolean;
    variant?: string;
    isRequired?: boolean;
    value?: string;
    id?: string;
};

const ScalarInput = ({ description, title, isDisabeld, value, isFullWidth, isRequired, id, variant, callback = () => {} }: ScalarInputTypes) => {

    return (
        <>
            <div style={{fontWeight: "700", marginTop: "5px"}}>{title}</div>
            <TextField
                fullWidth={isFullWidth}
                disabled={isDisabeld}
                id={id}
                label={description}
                variant={variant}
                required={isRequired}
                value={value}
                style={{marginTop: "5px"}}
            />
        </>
    )
};

// Exports
export default ScalarInput;
