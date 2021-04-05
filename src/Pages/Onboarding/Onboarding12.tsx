import { CloseIcon } from "./CloseIcon";
import { Logo } from "./Logo";

const DateIcon = () => {
    return (
        <svg
            width={51}
            height={50}
            viewBox="0 0 51 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#prefix__clip0_date)" fill="#A8A8A8">
                <path d="M13 0c-.986 0-1.785.8-1.785 1.786v3.571h3.571V1.786c0-.987-.8-1.786-1.785-1.786zM38 0c-.986 0-1.785.8-1.785 1.786v3.571h3.571V1.786c0-.987-.8-1.786-1.785-1.786z" />
                <path d="M45.143 5.355h-5.357v7.143a1.786 1.786 0 01-3.572 0V5.355H14.786v7.143a1.786 1.786 0 01-3.572 0V5.355H5.857A5.357 5.357 0 00.5 10.713V44.64a5.357 5.357 0 005.357 5.357h39.286a5.357 5.357 0 005.357-5.357V10.713a5.357 5.357 0 00-5.357-5.358zm1.785 39.286c0 .986-.799 1.786-1.785 1.786H5.857c-.986 0-1.786-.8-1.786-1.786V21.427H46.93V44.64z" />
                <path d="M23.309 33.807h1.445c.73-.007 1.305-.196 1.728-.567.43-.37.645-.908.645-1.611 0-.677-.18-1.201-.537-1.572-.352-.378-.892-.567-1.621-.567-.638 0-1.162.186-1.573.557-.41.364-.615.843-.615 1.435h-2.373c0-.729.192-1.393.576-1.992.391-.599.931-1.064 1.621-1.396.697-.339 1.475-.508 2.334-.508 1.42 0 2.533.358 3.34 1.074.814.71 1.221 1.7 1.221 2.969 0 .638-.205 1.24-.615 1.806-.404.56-.928.984-1.573 1.27.782.267 1.374.687 1.778 1.26.41.573.615 1.256.615 2.05 0 1.277-.44 2.292-1.318 3.047-.873.756-2.022 1.133-3.448 1.133-1.367 0-2.486-.364-3.359-1.093-.872-.73-1.308-1.7-1.308-2.91h2.373c0 .624.208 1.132.625 1.523.423.39.99.586 1.699.586.735 0 1.315-.196 1.738-.586.423-.39.635-.957.635-1.7 0-.748-.222-1.324-.664-1.728-.443-.404-1.1-.605-1.973-.605H23.31v-1.875z" />
            </g>
            <defs>
                <clipPath id="prefix__clip0_date">
                    <path
                        fill="#fff"
                        transform="translate(.5)"
                        d="M0 0h50v50H0z"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};

const MailIcon = () => {
    return (
        <svg
            width={51}
            height={50}
            viewBox="0 0 51 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#prefix__clip0_mail)" fill="#A8A8A8">
                <path d="M50.059 9.934L34.895 25l15.163 15.066c.275-.573.44-1.206.44-1.883V11.817c0-.676-.165-1.31-.44-1.882zM46.105 7.422H4.895c-.677 0-1.31.166-1.883.44l19.38 19.284a4.398 4.398 0 006.215 0L47.988 7.862a4.344 4.344 0 00-1.883-.44zM.94 9.934a4.343 4.343 0 00-.44 1.882v26.368c0 .676.166 1.31.44 1.882L16.104 25 .94 9.934z" />
                <path d="M32.824 27.07l-2.146 2.146c-2.855 2.855-7.501 2.855-10.357 0l-2.145-2.146L3.012 42.137c.573.274 1.206.44 1.882.44h41.211c.677 0 1.31-.166 1.883-.44L32.824 27.07z" />
            </g>
            <defs>
                <clipPath id="prefix__clip0_mail">
                    <path
                        fill="#fff"
                        transform="translate(.5)"
                        d="M0 0h50v50H0z"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};

const NotificationIcon = () => {
    return (
        <svg
            width={51}
            height={50}
            viewBox="0 0 51 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M23.385 50c3.773 0 6.93-2.69 7.654-6.25H15.73c.726 3.56 3.882 6.25 7.655 6.25zM37.994 25l-.026.001c-8.039 0-14.583-6.542-14.583-14.583 0-2.21.509-4.3 1.394-6.18a14.75 14.75 0 00-1.394-.07c-8.054 0-14.583 6.529-14.583 14.583v5.808c0 4.123-1.806 8.015-4.975 10.694a3.645 3.645 0 00-1.146 3.742c.442 1.631 2.054 2.673 3.746 2.673h33.906c1.775 0 3.448-1.15 3.808-2.89.28-1.346-.2-2.69-1.243-3.566-3.03-2.54-4.782-6.271-4.904-10.213z"
                fill="#A8A8A8"
            />
            <path
                d="M48.384 10.417c0 5.753-4.663 10.416-10.417 10.416-5.753 0-10.416-4.663-10.416-10.416S32.214 0 37.967 0c5.754 0 10.417 4.664 10.417 10.417z"
                fill="#A8A8A8"
            />
        </svg>
    );
};

export const Onboarding12 = () => {
    return (
        <div
            className="onboardlayout onboardlayout-verification position-relative"
            style={{ minHeight: "100vh", padding: 1 }}
        >
            <div className="container-fluid">
                <div className="verification-logo">
                    <Logo />
                </div>
                <CloseIcon className="closeicon cursor-pointer" />
                <div className="row justify-content-center mt-5 pt-5 pb-5">
                    <div className="col-md-6 mt-5  text-center">
                        <h3>Pending Verification</h3>

                        <div className="row mt-large">
                            <div className="col-sm-4">
                                <DateIcon />
                                <p className="text-muted mt-3 px-2">
                                    Allow up to 3 business days for your account
                                    to be verified
                                </p>
                            </div>
                            <div className="col-sm-4">
                                <MailIcon />
                                <p className="text-muted mt-3 px-2">
                                    We`ll contact you by email in case further
                                    info is needed
                                </p>
                            </div>
                            <div className="col-sm-4">
                                <NotificationIcon />
                                <p className="text-muted mt-3 px-2">
                                    You will get a notification once you`re
                                    verified
                                </p>
                            </div>
                        </div>
                        <div className="row justify-content-center mt-large">
                            <div className="col-sm-6">
                                <button className="btn-buru">Done</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
