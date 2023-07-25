
interface FirstAppProps{
    title:string,
    subTitle?: string
}


export const FirstApp = ({title,subTitle = 'Default subtitle'}:FirstAppProps): JSX.Element => {
    return (
        <>
            <h1>{title}</h1>
            <p>{subTitle}</p>
        </>
    );
};
