import { ShowMoreContent } from "components/ShowmoreContent";
import React from "react";
import strategyimg from "./strategyimg.svg";

export type IStrategy2Props = {
    title: string;
    content: string;
    createDate: string;
    apy: string;
    likes: number;
    comments: number;
};

export const StrategyCard2 = ({
    title,
    content,
    createDate,
    apy,
    likes,
    comments,
}: IStrategy2Props) => {
    return (
        <div className="strategycard">
            <div className="strategycard_image p-5">
                <img src={strategyimg} className="img-fluid" />
            </div>
            <div className="strategycard_body p-3 px-3">
                <h4 className="strategycard2_title">{title}</h4>
                <div className="strategycard_meta">
                    <span>APY {apy}</span>
                    <span>{createDate}</span>
                </div>
                <p className="strategycard_content mb-5">
                    <ShowMoreContent content={content} length={120} />
                </p>
                <div className="d-flex justify-content-between">
                    <span className="post_likes">
                        <svg
                            width={17}
                            height={19}
                            viewBox="0 0 17 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                opacity={0.2}
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.252 5.733l-.362 2.31h3.798c.14 0 .57.096 1.067.892.48.767.841 1.952.841 3.366 0 1.413-.362 2.598-.841 3.365-.497.796-.927.893-1.067.893H6.074V7.966l.454-1.232 1.543-4.19a1.06 1.06 0 01.61-.49c.315-.102.528-.038.605.01.232.144.321.254.353.3.03.044.05.09.064.169.016.094.022.239-.001.468a9.96 9.96 0 01-.137.832l-.003.013c-.034.177-.073.384-.107.592l-.001.009-.202 1.286zm1.09-5.367C9.01-.462 6.958.163 6.228 1.76L4.651 6.043H1.5a1 1 0 00-1 1v10.516a1 1 0 001 1H12.688c2.158 0 3.908-2.802 3.908-6.258 0-3.155-1.458-5.764-3.353-6.196a2.495 2.495 0 00-.555-.062h-1.46l.202-1.287c.028-.178.063-.36.099-.546l.032-.167c.24-1.269.427-2.654-1.22-3.677zM2.5 16.559V8.043h1.366v8.516H2.5z"
                                fill="#232323"
                            />
                        </svg>{" "}
                        {likes}
                    </span>
                    <div>
                        <span className="post_comments">
                            <svg
                                width={17}
                                height={17}
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    opacity={0.2}
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8.5 6.3c-.442 0-.8.4-.8.892 0 .493.358.892.8.892.442 0 .8-.4.8-.892s-.358-.891-.8-.891zm3.198 0c-.441 0-.8.4-.8.892 0 .493.359.892.8.892.442 0 .8-.4.8-.892s-.358-.891-.8-.891zM4.5 7.194c0-.492.358-.891.8-.891.442 0 .8.399.8.891s-.358.892-.8.892c-.442 0-.8-.4-.8-.892zm10.402 4.455c0 .491-.36.892-.8.892H5.745a2.22 2.22 0 00-1.235.381l-2.408 1.61v-11.8c0-.49.359-.891.8-.891h11.2c.44 0 .8.4.8.891v8.917zM14.1.058H2.9C1.577.059.5 1.259.5 2.735v13.374c0 .321.155.618.406.776a.735.735 0 00.806-.011l3.62-2.42a.737.737 0 01.411-.128H14.1c1.323 0 2.4-1.2 2.4-2.675V2.734c0-1.475-1.077-2.675-2.4-2.675z"
                                    fill="#232323"
                                />
                            </svg>{" "}
                            {comments}
                        </span>
                        <span className="post_comments mr-0">
                            <svg
                                width={12}
                                height={16}
                                viewBox="0 0 12 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    opacity={0.2}
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.024 11.118c.137 0 .275.038.399.114l3.794 2.357V2.076c0-.178-.098-.296-.162-.296H2.283c-.064 0-.161.118-.161.296v11.466l3.485-2.297a.758.758 0 01.417-.127zM1.31 15.999a.75.75 0 01-.4-.116.907.907 0 01-.41-.773V2.075C.5.93 1.299 0 2.28 0h7.772c.982 0 1.781.93 1.781 2.075V15.11a.909.909 0 01-.401.768.744.744 0 01-.806.006l-4.592-2.851-4.308 2.84a.76.76 0 01-.416.126z"
                                    fill="#232323"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};