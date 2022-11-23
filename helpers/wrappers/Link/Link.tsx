import Link from "next/link";

const CustomLink = (props: any) => {
    props.scroll = true;

    return (
        <Link scroll={false} {...props}>
            {props.children}
        </Link>
    );
};

export default CustomLink;
