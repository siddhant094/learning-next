import React from 'react';

interface Props {
    params: { vid: number; id: number };
}

const PhotoId = ({ params: { vid, id } }: Props) => {
    return (
        <div>
            PhotoId {id} {vid}
        </div>
    );
};

export default PhotoId;
