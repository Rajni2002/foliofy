export type ValidHTMLElements = keyof JSX.IntrinsicElements;

type StyleMap = {
    [element in ValidHTMLElements]?: React.CSSProperties;
};

const customStylesMap: StyleMap = {
    h1: {
        fontSize: "2rem",
        fontWeight: "500"
    },
    u: {
        textDecorationColor: "orange",
        textDecorationThickness: ".3rem"
    },
    em: {
        display: "inline"
    },
    strong: {
        display: "inline"
    },
}

export { customStylesMap };