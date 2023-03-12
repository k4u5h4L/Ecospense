import ComponentLoaderPrimary from "@/components/ComponentLoader/ComponentLoaderPrimary";
import UpdateGoal from "@/components/Dialogs/UpdateGoal/UpdateGoal";
import GoalCard from "@/components/Goal/GoalCard/GoalCard";
import DangerNotification from "@/components/Notifications/DangerNotification/DangerNotification";
import PrimaryNotification from "@/components/Notifications/PrimaryNotification/PrimaryNotification";
import PaginationLoader from "@/components/PaginationLoader/PaginationLoader";
import { GoalActions } from "@/types/Common";
import { gql, useMutation, useQuery } from "@apollo/client";
import { Goal } from "@prisma/client";
import { useState } from "react";
import PullToRefresh from "react-simple-pull-to-refresh";

const GET_GOALS = gql`
    query GetAllGoals($page: Int, $itemsPerPage: Int) {
        getCurrency {
            currencyName
            id
        }
        getAllGoals(page: $page, itemsPerPage: $itemsPerPage) {
            collectedAmount
            desc
            id
            name
            totalAmount
        }
    }
`;

const UPDATE_GOAL = gql`
    mutation UpdateGoal(
        $updateGoalId: String!
        $action: String!
        $amount: Float!
    ) {
        updateGoal(id: $updateGoalId, action: $action, amount: $amount) {
            collectedAmount
            desc
            id
            name
            totalAmount
        }
    }
`;

type InputType = {
    action: GoalActions;
    amount: number;
};

const initialInput: InputType = {
    action: "+",
    amount: 0,
};

let currentPage = 1;

const Main = () => {
    const { loading, error, data, fetchMore, refetch } = useQuery(GET_GOALS, {
        variables: {
            page: currentPage,
            itemsPerPage: 999,
        },
    });

    const [goalId, setGoalId] = useState<string>("");
    const [input, setInput] = useState<InputType>(initialInput);
    const [payError, setPayError] = useState({ state: false, error: "" });

    const [updateGoal, { data: mData, loading: mLoading, error: mError }] =
        useMutation(UPDATE_GOAL);

    const handleActionChange = (action: GoalActions) => {
        setInput({ ...input, action: action });
    };

    const handleRefresh = async () => {
        await refetch();
    };

    const handleFetchMore = async () => {
        fetchMore({
            variables: {
                page: ++currentPage,
                itemsPerPage: 6,
            },
        });
    };

    const showFetchMore = (): boolean => {
        return !loading && data.getAllGoals.length > 4;
    };

    const handleCancel = () => {
        setInput(initialInput);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            await updateGoal({
                variables: {
                    updateGoalId: goalId,
                    action: input.action,
                    amount: input.amount,
                },
            });

            await handleRefresh();

            console.log("Goal updated successfully: ", goalId);

            handleCancel();
        } catch (err) {
            console.error(err);
            if (mError) {
                console.error(mError);
                setPayError((prev) => ({
                    ...prev,
                    state: true,
                    error: mError.message,
                }));

                setTimeout(() => {
                    setPayError((prev) => ({ ...prev, state: false }));
                }, 4000);
            }
        }
    };

    return (
        <>
            <div id="appCapsule">
                <PullToRefresh
                    onRefresh={handleRefresh}
                    canFetchMore={showFetchMore()}
                    onFetchMore={handleFetchMore}
                    pullingContent=""
                    refreshingContent={<PaginationLoader />}
                    resistance={1}
                >
                    <div className="section mt-2 mb-2">
                        {loading ? (
                            <ComponentLoaderPrimary />
                        ) : (
                            <div className="goals">
                                {data.getAllGoals.map((goal: Goal) => (
                                    <GoalCard
                                        key={goal.id}
                                        goal={goal}
                                        setGoalId={setGoalId}
                                        currencyName={
                                            data.getCurrency.currencyName
                                        }
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </PullToRefresh>
            </div>

            <UpdateGoal
                handleActionChange={handleActionChange}
                handleCancel={handleCancel}
                handleSubmit={handleSubmit}
                input={input}
                setInput={setInput}
            />

            <PrimaryNotification
                showNotif={mLoading}
                title="Updating goal..."
                text="Please wait."
                notifStyle="secondary"
                showHeader={false}
            />

            <DangerNotification
                showNotif={payError.state}
                title="Error in updating goal"
                text={payError.error}
                notifStyle="danger"
                showHeader={false}
            />
        </>
    );
};

export default Main;
