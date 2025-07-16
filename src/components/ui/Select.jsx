import { FormControl, InputLabel, NativeSelect } from "@mui/material";
import { memo } from "react";

function Select({
    label = "",
    value,
    onChange,
    inputProps,
    options = [],
    displayLabel = true,
}) {
    return (
        <FormControl
            fullWidth
            variant="standard"
            sx={{
                fontFamily: "'Inter', sans-serif",
                "& .MuiInputBase-root": {
                    borderBottom: "2px solid #0ac6a0",
                    fontWeight: 500,
                },
                "& .MuiInputLabel-root": {
                    fontSize: "15px",
                    color: "#fff",
                    fontWeight: 600,
                },
                "& .MuiInputLabel-root.Mui-focused": {
                    color: "#0ac6a0",
                },
                "& .MuiNativeSelect-root:focus": {
                    outline: "5px dotted #0ac6a0",
                },
                "& legend": { display: "none" },
                "& fieldset": { top: 0 },
            }}
        >
            {displayLabel && (
                <InputLabel htmlFor={label} shrink>
                    {label}
                </InputLabel>
            )}
            <NativeSelect
                id={label}
                value={value}
                onChange={onChange}
                inputProps={inputProps}
                className="focus:outline-dotted focus:outline-[2px] focus:outline-[#0ac6a0] text-sm"
            >
                {options.map(({ value, label }, idx) => (
                    <option key={idx} value={value}>
                        {label}
                    </option>
                ))}
            </NativeSelect>
        </FormControl>
    );
}

export default memo(Select);
