export type IJob = {
    schedule: string;
    job: () => Promise<void>;
    runOnStart?: boolean;
    JobName: string;
};
