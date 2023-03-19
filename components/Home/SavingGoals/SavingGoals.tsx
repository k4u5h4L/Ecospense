import ComponentLoaderPrimary from "@/components/ComponentLoader/ComponentLoaderPrimary";
import NoResults from "@/components/NotFound/NoResults";
import Link from "@/helpers/wrappers/Link/Link";
import { formatMoney } from "@/utils/formatMoney";
import { gql, useQuery } from "@apollo/client";
import { Goal } from "@prisma/client";

const GET_GOALS = gql`
    query GetGoals($page: Int, $itemsPerPage: Int) {
        getCurrency {
            id
            currencyName
        }
        getAllGoals(page: $page, itemsPerPage: $itemsPerPage) {
            totalAmount
            collectedAmount
            desc
            id
            name
        }
    }
`;

const SavingGoals = () => {
    const { loading, error, data } = useQuery(GET_GOALS, {
        variables: {
            page: 1,
            itemsPerPage: 3,
        },
    });

    return (
        <>
            <div className="section mt-4">
                <div className="section-heading">
                    <h2 className="title">Saving Goals</h2>
                    <Link href="/savings" className="link">
                        View All
                    </Link>
                </div>

                {data && data.getAllGoals.length == 0 ? (
                    <NoResults />
                ) : (
                    <>
                        <div className="goals">
                            {loading ? (
                                <ComponentLoaderPrimary />
                            ) : (
                                <>
                                    {data.getAllGoals.map((goal: Goal) => {
                                        const completed: number = Math.round(
                                            (goal.collectedAmount /
                                                goal.totalAmount) *
                                                100
                                        );

                                        return (
                                            <div key={goal.id} className="item">
                                                <div className="in">
                                                    <div>
                                                        <h4>{goal.name}</h4>
                                                        <p>{goal.desc}</p>
                                                    </div>
                                                    <div className="price">
                                                        {/* {formatMoney(
                                                    goal.collectedAmount,
                                                    data.getCurrency
                                                        .currencyName
                                                )}{" "}
                                                /{" "} */}
                                                        {formatMoney(
                                                            goal.totalAmount,
                                                            data.getCurrency
                                                                .currencyName
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="progress">
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{
                                                            width: `${completed}%`,
                                                        }}
                                                        aria-valuenow={
                                                            completed
                                                        }
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    >
                                                        {completed}%
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </>
                            )}
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default SavingGoals;
