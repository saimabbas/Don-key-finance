import { ShowMoreContent } from "components/ShowmoreContent";
import graph from "./graph.svg";
export type IStrategyProps = {
    title: string;
    content: string;
    createDate: string;
    apy: string;
};

export const StrategyCard = ({ title, content, createDate, apy }: IStrategyProps) => {
    return (
        <div className="strategycard">
            <div className="strategycard_image p-5">
                <img src={graph} className="img-fluid" />
            </div>
            <div className="strategycard_body p-3 px-3">
                <div className="strategycard_meta">
                    <span>APY {apy}</span>
                    <span>{createDate}</span>
                </div>
                <h4 className="strategycard_title">{title}</h4>
                <p className="strategycard_content">
                    <ShowMoreContent content={content} length={80} />
                </p>
                <div className="d-flex justify-content-center">
                    <button className="post_btn">Invest</button>
                </div>
            </div>
        </div>
    );
};