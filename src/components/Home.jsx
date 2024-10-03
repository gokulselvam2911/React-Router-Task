import coursesData from "../data/coursesData";
import CourseCard from "./CourseCard";

const Home = () => {
  return (
    <div className="row">
      {coursesData.all.map((course) => (
        <div className="col-12 col-sm-6 col-md-4" key={course.id}>
          <CourseCard course={course} />
        </div>
      ))}
    </div>
  );
};

export default Home;

