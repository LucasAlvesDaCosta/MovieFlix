import { Review } from 'types/review';

import './styles.css';



type Props = {
    reviews: Review[];
}


const ReviewListing = ({reviews} : Props) => {


    const review = reviews.map((text, id) =>
    <a key={id} href="m">{text}</a>
    );

    return (
        <div className="base-card">
            <div>
              {review}
            </div>
            <div className="reviewListing-card">
                <h5>Maria</h5>
                <p>Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</p>
            </div>
        </div>
    );
};

export default ReviewListing;