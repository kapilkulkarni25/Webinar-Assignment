import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const styles = {
    primary: {
        backgroundColor: 'var(--blue)',
        color: 'var(--white)',
        fontSize: "16px",
        fontWeight: "600",
        lineHeight: "20px",
        textAlign: "center",
        borderRadius: "10px",
        padding: "12px 23px",
        transition: "all ease 0.3s",
        textTransform: "none",

        '&:hover': {
            boxShadow: "0px 8px 20px -8px var(--blue)",
        },
    },
    secondary: {
        backgroundColor: '#F9E8E8',
        color: '#D14040',
        borderRadius: "24px",
        fontSize: "14px",
        fontWeight: "600",
        lineHeight: "24px",
        padding: "4px 23px",
        textTransform: "none",
        boxShadow: "none",
    },
    tertiary: {
        fontSize: "12.86px",
        fontWeight: 600,
        lineHeight: "15.57px",
        textAlign: "center",
        textTransform: "none",
        boxShadow: "none",
        color: "var(--blue)",
        padding: "0",
        backgroundColor: "white",
        minWidth: "auto",
    }
};

const withButtonStyles = (WrappedComponent) => {
    const StyledButton = styled(({ type, ...props }) =>
        <WrappedComponent {...props} type={type} />)(({ type }) =>
        ({
            ...(styles[type] || styles.primary),
        }));

    return StyledButton;
};

export const StyledButton = withButtonStyles(Button);

