import NextLink from "next/link";

const Link = (props: any) => {
    return (
        <NextLink scroll={false} {...props}>
            {props.children}
        </NextLink>
    );
};

export default Link;
