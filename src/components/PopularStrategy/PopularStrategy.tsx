import "./popularstrategy.scss";
import graph from "../MyAccountNewGraph/graph.svg";
import { ShowMoreContent } from "components/ShowmoreContent";
import { useHistory } from "react-router";
const StratIcon = ({ text, showDot }: { text: string; showDot?: boolean }) => {
  return (
    <div className="straticon">
        {showDot && <div className="green_dot" />}
      <svg
        width={16}
        height={15}
        viewBox="0 0 16 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="straticon__star"
      >
        <path
          d="M15.483 5.825h0a.32.32 0 01-.1.348h0l-3.49 2.994-.23.198.068.295 1.03 4.435s0 0 0 0 0 0 0 0a.323.323 0 01-.133.338h0a.363.363 0 01-.392.017h-.002l-3.982-2.33L8 11.974l-.252.148-3.984 2.329h0a.361.361 0 01-.393-.017.323.323 0 01-.132-.338L4.27 9.66l.068-.295-.23-.198-3.49-2.994-.002-.001a.32.32 0 01-.099-.346.347.347 0 01.302-.232l4.618-.41.295-.026.12-.272L7.675.706s0 0 0 0A.35.35 0 018 .5c.146 0 .27.084.324.205 0 0 0 0 0 0l1.826 4.181.119.272.295.026 4.618.41h0c.146.013.26.108.301.231z"
          fill="#070602"
          stroke="#FFCA00"
        />
      </svg>
      {text}
    </div>
  );
};

export const PopularStrategy = () => {

  const history = useHistory();

  const goToStrategy = () => {
    history.push('/strategy')
  }


  return (
    <div className="popularstrategy">
      <div className="popularstrategy__graph">
        <div onClick={goToStrategy}  className="popularstrategy__title cursor-pointer">
          <StratIcon text="SA" showDot />
          <h5 className="ml-3 mb-0">Saly Strategies WOW</h5>
        </div>
        <div className="popularstrategy__graph__wrapper">
          <svg
            width={251}
            height={114}
            viewBox="0 0 251 114"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity={0.2}
              d="M7.471 76.216l-5.143 3.857v33.429h243.643v-58.5l-3.857 2.571L238 60l-10.672 11.073-7.071-8.357-7.072-23.786-5.785-6.428L203 40.5l-2.672 10.645-10.286 28.928-4.5-3.857L178 58.5l-5.958-7.355H166.9l-10.929 33.428h-4.5L138 3l-3.243-1.355L132 4l-2 6.5-2.958 13.002-10.285 36-5.143-4.5-10.286-26.358L94.9 25.43l-6.429 3.215-12.857 26.357-7.714 5.785-6.429 19.286-3.214 1.929-3.857-5.786L44.114 38.93l-5.143-6.428-5.143 3.214-12.214 21.857-5.786 3.214-8.357 15.429z"
              fill="url(#prefix__paint0_linear)"
            />
            <circle cx={245.188} cy={56.145} r={5} fill="#000" />
            <path
              d="M245.641 56.561c-10.32.092-11.474 10.704-18.839 13.712-7.365 3.009-10.44-35.85-18.842-37.14-8.402-1.29-11.364 49.713-18.842 47.053-7.478-2.66-8.039-25.687-17.9-29.438-9.861-3.75-9.02 34.04-17.9 35.1C144.437 86.907 144.586 1 135.418 1s-10.095 58.391-19.785 57.414c-9.689-.978-9.882-33.49-20.284-33.49-10.403 0-13.672 28.87-22.819 31.545-9.145 2.675-6.849 33.171-16.25 23.717-9.4-9.454-8.159-45.41-16.957-47.054-8.8-1.644-11.707 21.381-19.29 25.282C12.448 62.314 8.816 80.3 1.354 80.3"
              stroke="#000"
              strokeWidth={2}
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="prefix__paint0_linear"
                x1={124.15}
                y1={1.645}
                x2={124.15}
                y2={101.93}
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#646464" />
                <stop offset={1} stopColor="#646464" stopOpacity={0} />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="popularstrategy__content">
        <div className="popularstrategy__content__info">
          <div>
            <p className="mb-0">Total Value</p>
            <h5>$200 000.32</h5>
          </div>
          <div className="text-right">
            <p className="mb-0">APY</p>
            <h5 className="primary-text">+30.30%</h5>
          </div>
        </div>
        <h5 className="mt-4 popularstrategy__content__title">
          STRATEGY BTCUSD Feel Free to BYield new
        </h5>
        <p className="popularstrategy__content__text">
        <ShowMoreContent
          content={
            "I expect the price to bounce off the support line and move up towards the levelI expect the price to bounce off the support line and move up towards the levelI expect the price to bounce off the support line and move up towards the level"
          }
          length={120}
        />
        </p>
        <button onClick={goToStrategy} className="popularstrategy__btn">Invest</button>
      </div>
    </div>
  );
};
