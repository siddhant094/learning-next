import React from 'react';

interface Props {
    params: {
        slug: string[];
    };
    searchParams: {
        SortOrder: String;
    };
}

const ProductPage = ({
    params: { slug },
    searchParams: { SortOrder },
}: Props) => {
    return (
        <div>
            ProductPage {slug} {SortOrder}
        </div>
    );
};

export default ProductPage;
