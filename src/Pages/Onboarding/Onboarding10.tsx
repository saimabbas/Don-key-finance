import ButtonComponent from "components/Button/Button";
import { useHistory } from "react-router-dom";
import { OnboardLayout } from "./OnboardLayout";

const Onboard10Icon = () => {
    return (
        <svg
            width={122}
            height={121}
            viewBox="0 0 122 121"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g opacity={0.8} clipPath="url(#prefix__clip0)" fill="#000">
                <path d="M89.357 49.79c-9.772 0-17.724 7.95-17.724 17.724 0 9.773 7.952 17.724 17.724 17.724 9.773 0 17.725-7.951 17.725-17.724S99.13 49.789 89.357 49.789zM18.46 117.379v-7.326c0-1.215.13-2.395.266-3.572-.09.001-.174.027-.265.027-5.767 0-11.087-2.812-14.326-7.09C1.886 102.39.5 106.047.5 110.053v7.326a3.543 3.543 0 003.545 3.545h15.069c-.397-1.114-.653-2.296-.653-3.545zM18.463 78.148c-5.864 0-10.635 4.771-10.635 10.635s4.77 10.635 10.635 10.635c.693 0 1.367-.078 2.023-.205a31.815 31.815 0 018.39-12.584c-.998-4.835-5.287-8.48-10.413-8.48zM50.365 110.052c0-3.756.563-7.378 1.559-10.817-.527.04-1.022.182-1.559.182-6.621 0-12.471-3.104-16.375-7.862-5.134 4.55-8.44 11.115-8.44 18.497v7.326a3.543 3.543 0 003.546 3.545h21.922c-.397-1.115-.653-2.296-.653-3.545v-7.326zM50.367 63.969c-7.82 0-14.18 6.36-14.18 14.18 0 7.82 6.36 14.18 14.18 14.18 1.666 0 3.242-.342 4.728-.872a39.25 39.25 0 019.246-11.273c.097-.67.206-1.339.206-2.036 0-7.82-6.36-14.18-14.18-14.18z" />
                <path d="M107.722 84.047c-4.545 5.044-11.057 8.279-18.365 8.279-7.307 0-13.82-3.235-18.365-8.28-8.163 5.785-13.539 15.26-13.539 26.005v7.326a3.543 3.543 0 003.545 3.545h56.955a3.543 3.543 0 003.545-3.545v-7.326c0-10.745-5.612-20.22-13.776-26.004zM110.394 15.443a3.547 3.547 0 00-2.863-2.413l-10.358-1.505L92.537 1.9c-1.19-2.424-5.165-2.424-6.356 0l-4.635 9.625-10.358 1.505a3.546 3.546 0 00-1.966 6.044l7.498 7.309-1.769 10.316a3.542 3.542 0 001.41 3.465c1.093.8 2.547.9 3.731.27l9.267-4.867c1.268.665 9.56 5.276 10.916 5.276a3.545 3.545 0 003.493-4.144l-1.769-10.316 7.498-7.308a3.546 3.546 0 00.897-3.632zM72.173 45.884c-1.772-1.288-3.008-3.058-3.709-5.032l-6.916 6.916-11.78-17.673a3.545 3.545 0 00-2.6-1.561c-1.063-.076-2.105.27-2.856 1.02l-28.36 28.36a3.544 3.544 0 105.013 5.013l25.302-25.302 11.781 17.672a3.545 3.545 0 002.6 1.561 3.478 3.478 0 002.856-1.02l9.517-9.518c-.274-.165-.587-.244-.848-.436z" />
            </g>
            <defs>
                <clipPath id="prefix__clip0">
                    <path
                        fill="#fff"
                        transform="translate(.5)"
                        d="M0 0h121v121H0z"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};

export const Onboarding10 = () => {

    const history = useHistory()

    return (
        <OnboardLayout title="" icon={<Onboard10Icon />}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-10">
                        <h3>Suitability Assessment</h3>

                        <p className="text-muted mt-4">
                            Thank you for completing your profile.
                            <br />
                            <br />
                            Please be aware that trading CFDs can carry a high
                            degree of risk to your capital. <br />
                            Based on the information provided by youm BYield may
                            not be suitable for you and therefore we might
                            choose to limit your Copy strategy activity. <br />{" "}
                            <br /> We encourage you to review and update your
                            profile every time your situation or farmers
                            objectives change
                        </p>

                        <div className="row mt-5">
                            <div className="col-md-6">
                                <button className="btn-buru btn-buru-outline">
                                    Review Profile
                                </button>
                            </div>
                            <div className="col-md-6">
                                <button onClick={() => history.push('/onboarding/11')} className="btn-buru">Confirm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </OnboardLayout>
    );
};
