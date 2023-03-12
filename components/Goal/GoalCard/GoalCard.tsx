import { formatMoney } from "@/utils/formatMoney";
import { Goal } from "@prisma/client";

type Proptype = {
    goal: Goal;
    setGoalId: any;
    currencyName: string;
};

const GoalCard = ({ goal, setGoalId, currencyName }: Proptype) => {
    return (
        <>
            <div
                style={{ cursor: "pointer" }}
                className="item"
                onClick={() => {
                    setGoalId(goal.id);
                }}
                data-bs-toggle="modal"
                data-bs-target="#UpdateGoalDialog"
            >
                <div className="in">
                    <div>
                        <h4>{goal.name}</h4>
                        <p>{goal.desc}</p>
                    </div>
                    <div className="price">
                        {formatMoney(
                            goal.totalAmount,
                            currencyName,
                            "standard"
                        )}
                    </div>
                </div>
                <div className="progress">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                            width: `${Math.round(
                                (100 * goal.collectedAmount) / goal.totalAmount
                            )}%`,
                        }}
                        aria-valuenow={Math.round(
                            (100 * goal.collectedAmount) / goal.totalAmount
                        )}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    >
                        {Math.round(
                            (100 * goal.collectedAmount) / goal.totalAmount
                        )}
                        %
                    </div>
                </div>
            </div>
        </>
    );
};

export default GoalCard;
