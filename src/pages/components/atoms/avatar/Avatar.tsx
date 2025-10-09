import { FC } from 'react';

type Props = {
    url: string,
    classnames: string,
    alt?: string,
};

const Avatar: FC<Props> = ({ classnames, url, alt = "Profile picture" }) => {
    return (
        <>
            <img className={ "mx-auto mb-4 " + classnames } src={ url } alt={ alt } />
        </>
    );
};

export { Avatar };