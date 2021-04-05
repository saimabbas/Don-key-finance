import moment from "moment";
import { Col, Row } from "react-bootstrap";

export type IPostProps = {
    author: string;
    designation: string;
    content: string;
    likes: number;
    comments: number;
    publishedAt: string;
};

export const Post = ({
    author,
    designation,
    content,
    likes,
    comments,
    publishedAt,
}: IPostProps) => {
    return (
        <div className="post">
            <Row>
                <Col xs={4} sm={2} md={2} lg={1}>
                    <div className="post_first">
                        {author.slice(0, 2).toUpperCase()}
                    </div>
                </Col>
                <Col
                    xs={6}
                    sm={6}
                    className="d-flex flex-column justify-content-center"
                    md={7}
                    lg={9}
                >
                    <h3 className="post_author">{author}</h3>
                    <p className="post_author_designation">{designation}</p>
                </Col>
                <Col className="mt-3 mt-sm-0" sm={4} md={3} lg={2}>
                    <button className="post_btn">Invest</button>
                </Col>
            </Row>
            <Row>
                <Col sm={2} md={2} lg={1}></Col>
                <Col sm={6} md={7}
                    lg={9}>
                    <p className="post_content">{content}</p>
                </Col>
                <Col sm={4} md={3} lg={2}></Col>
            </Row>
            <Row>
                <Col sm={2}   md={2} lg={1}></Col>
                <Col sm={6} md={7}
                    lg={9}>
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
                </Col>
                <Col sm={4} md={3} lg={2}>
                    <span className="post_publishtime">
                        {moment
                            .duration(moment(publishedAt).diff(moment()))
                            .humanize()}{" "}
                        ago
                    </span>
                    <span className="ml-1">
                        <svg
                            width={25}
                            height={12}
                            viewBox="0 0 25 12"
                            fill="rgba(34,34,34,.4)"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M12.497 8.956a2.954 2.954 0 100-5.91 2.954 2.954 0 000 5.91z" />
                            <path d="M24.347 5.625C24.131 5.396 18.984 0 12.498 0 6.014 0 .868 5.396.652 5.625a.547.547 0 000 .747C.868 6.602 6.015 12 12.498 12c6.486 0 11.634-5.398 11.85-5.627a.544.544 0 000-.747zM12.5 10.566a4.572 4.572 0 01-4.566-4.568A4.572 4.572 0 0112.5 1.431a4.574 4.574 0 014.568 4.567 4.575 4.575 0 01-4.568 4.568zm-3.62-8.88C7.644 2.726 6.842 4.263 6.842 5.999c0 1.736.802 3.273 2.036 4.313-3.414-1.098-6.095-3.408-7.053-4.313.958-.903 3.64-3.214 7.053-4.311zm7.242 8.623C17.355 9.27 18.159 7.733 18.159 6c0-1.735-.803-3.272-2.038-4.31 3.414 1.097 6.093 3.405 7.052 4.31-.96.903-3.638 3.21-7.051 4.31z" />
                        </svg>
                    </span>
                </Col>
            </Row>
        </div>
    );
};
