import Link from "next/link";

const CustomLink = (props: any) => {
    return (
        <Link scroll={false} {...props}>
            {props.children}
        </Link>
    );
};

export default CustomLink;
