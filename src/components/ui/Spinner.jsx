import classNames from "classnames";
import { CgSpinnerTwo } from "react-icons/cg";

export const Spinner = (props) => {
    const {
        size = 20,
        className,
        style,
        color,
        isSpining = true,
        ...rest
    } = props;

    const spinnerStyle = {
        height: size,
        width: size,
        ...style,
    };
    const spinnerColor = color || "primary";
    const spinnerClass = classNames(
        isSpining && "animate-spin",
        spinnerColor && `text-${spinnerColor}`,
        className
    );
    return (
        <CgSpinnerTwo
            size={size}
            style={spinnerStyle}
            className={spinnerClass}
            {...rest}
        />
    );
};
