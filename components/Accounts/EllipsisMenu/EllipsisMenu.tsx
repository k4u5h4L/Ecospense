import {
    EllipsisHorizontal,
    PencilOutline,
    CloseOutline,
    ArrowUpCircleOutline,
} from "react-ionicons";

const EllipsisMenu = () => {
    return (
        <>
            <div className="card-button dropdown">
                <button
                    type="button"
                    className="btn btn-link btn-icon"
                    data-bs-toggle="dropdown"
                >
                    <EllipsisHorizontal color={"white"} />
                </button>
                <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="#">
                        <PencilOutline />
                        Edit
                    </a>
                    <a className="dropdown-item" href="#">
                        <CloseOutline />
                        Remove
                    </a>
                    <a className="dropdown-item" href="#">
                        <ArrowUpCircleOutline />
                        Upgrade
                    </a>
                </div>
            </div>
        </>
    );
};

export default EllipsisMenu;
