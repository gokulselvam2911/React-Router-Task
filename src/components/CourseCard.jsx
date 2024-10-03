import PropTypes from 'prop-types';
import './CourseCard.css';

const CourseCard = ({ course }) => {
  return (
    <div className="card">
      <img src={course.image} className="card-img-top" alt={course.title} />
      <div className="card-body">
        <h5 className="card-title">{course.title}</h5>
        <p className="card-text">{course.description}</p>
      </div>
    </div>
  );
};

CourseCard.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired,
};

export default CourseCard;
