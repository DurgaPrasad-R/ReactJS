import { IMG_CDN_URL } from "../config";
const RestoCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  return (
    <div className="card-con">
      <div className="image-container">
        <img className="card-image" src={IMG_CDN_URL + cloudinaryImageId} />
      </div>
      <h3>{name}</h3>
      <h3>{avgRating} stars</h3>
      <h5>{cuisines.join(", ")}</h5>
    </div>
  );
};
export default RestoCard;
