import { Review } from 'types/review';

import './styles.css';




type Props = {
    reviews: Review[];
}


const ReviewListing = ({reviews} : Props) => {

    const review = reviews.map((text) =>
    <a href="m">{text}</a>
    );

    return (
        <div>
            {review}
        </div>
    );
};

export default ReviewListing;