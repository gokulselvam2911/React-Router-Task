import coursesData from "../data/coursesData";
import CourseCard from "./CourseCard";

const FullStack = () => {
  return (
    <div className="row">
      {coursesData.fullStack.map((course) => (
        <div className="col-12 col-sm-6 col-md-4" key={course.id}>
          <CourseCard course={course} />
        </div>
      ))}
    </div>
  );
};

export default FullStack;
