const coursesData = {
  all: [
    {
      id: 1,
      title: "Python Objects 101: How to",
      description: "Learn the fundamentals of Python objects and data structures.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBDPzsZbBnONYV3V1Bt6CHglz0fTPNd7KinpQSis4YpIjw3kdeCOyddL87QLS2JT-Qlq4&usqp=CAU"
    },
    {
      id: 2,
      title: "Machine Learning Must-Know Concepts",
      description: "An introduction to machine learning concepts with hands-on examples.",
      image: "https://img.freepik.com/premium-photo/future-tech-smart-automation-with-ai-ml-5g-ar-vr-robots-covid-19_1111209-11451.jpg"
    },
    {
      id: 3,
      title: "Unlocking the Power of NLP",
      description: "Explore natural language processing and its applications.",
      image: "https://img.freepik.com/free-vector/natural-language-processing-concept-illustration_114360-4295.jpg"
    },
    {
      id: 4,
      title: "Full Stack Development with React",
      description: "Build modern web applications using React, Node, and Express.",
      image: "https://img.freepik.com/free-vector/app-development-concept-with-programming-languages_23-2148688949.jpg"
    },
    {
      id: 5,
      title: "Data Science Essentials",
      description: "Get started with data analysis using Python, Pandas, and Matplotlib.",
      image: "https://img.freepik.com/premium-vector/data-science-concept-blue-background-machine-learning-big-data-database-classification_159242-6413.jpg"
    },
    {
      id: 6,
      title: "Cyber Security Fundamentals",
      description: "Learn the basics of securing web applications and networks.",
      image: "https://img.freepik.com/free-vector/cyber-security-concept_23-2148533274.jpg"
    },
    {
      id: 7,
      title: "Career Development for IT Professionals",
      description: "Navigate your career in the IT industry with practical advice.",
      image: "https://img.freepik.com/premium-vector/businessman-career-development_1124-534.jpg"
    },
    {
      id: 8,
      title: "Introduction to DevOps",
      description: "Learn the principles of DevOps and how to integrate development and operations.",
      image: "https://img.freepik.com/free-vector/devops-concept-illustration_114360-2116.jpg"
    },
    {
      id: 9,
      title: "Cloud Computing Basics",
      description: "Understand the fundamentals of cloud computing and its services.",
      image: "https://img.freepik.com/premium-vector/cloud-computing-concept-illustration_114360-1716.jpg"
    },
    {
      id: 10,
      title: "Introduction to Blockchain",
      description: "Explore the basics of blockchain technology and its applications.",
      image: "https://img.freepik.com/premium-vector/blockchain-technology-concept-illustration_114360-2126.jpg"
    },
    {
      id: 11,
      title: "Data Visualization with Python",
      description: "Learn how to visualize data using Python libraries like Matplotlib and Seaborn.",
      image: "https://img.freepik.com/premium-vector/data-visualization-concept-illustration_114360-3154.jpg"
    },
    {
      id: 12,
      title: "Introduction to Agile Methodology",
      description: "Understand the principles of Agile and how to implement them in projects.",
      image: "https://img.freepik.com/premium-vector/agile-methodology-concept-illustration_114360-2145.jpg"
    },
    {
      id: 13,
      title: "Ethical Hacking Essentials",
      description: "Learn the fundamentals of ethical hacking and how to secure systems.",
      image: "https://img.freepik.com/premium-vector/ethical-hacking-concept-illustration_114360-2150.jpg"
    },
    {
      id: 14,
      title: "Career Planning for Tech Professionals",
      description: "Strategies and advice for planning a successful tech career.",
      image: "https://img.freepik.com/premium-vector/career-planning-concept-illustration_114360-2160.jpg"
    }
  ],
  fullStack: [
    {
      id: 4,
      title: "Full Stack Development with React",
      description: "Build modern web applications using React, Node, and Express.",
      image: "https://img.freepik.com/free-vector/app-development-concept-with-programming-languages_23-2148688949.jpg"
    },
    {
      id: 15,
      title: "Building RESTful APIs with Node.js",
      description: "Learn how to create RESTful APIs using Node.js and Express.",
      image: "https://img.freepik.com/premium-vector/restful-api-concept-illustration_114360-2134.jpg"
    },
    {
      id: 16,
      title: "Frontend Development with Angular",
      description: "Explore frontend development using Angular framework.",
      image: "https://img.freepik.com/premium-vector/angular-development-concept-illustration_114360-3152.jpg"
    }
  ],
  dataScience: [
    {
      id: 5,
      title: "Data Science Essentials",
      description: "Get started with data analysis using Python, Pandas, and Matplotlib.",
      image: "https://img.freepik.com/premium-vector/data-science-concept-blue-background-machine-learning-big-data-database-classification_159242-6413.jpg"
    },
    {
      id: 17,
      title: "Machine Learning with Scikit-Learn",
      description: "Dive into machine learning using Scikit-Learn for practical applications.",
      image: "https://img.freepik.com/premium-vector/machine-learning-concept-illustration_114360-2158.jpg"
    },
    {
      id: 18,
      title: "Big Data Technologies",
      description: "An introduction to big data technologies like Hadoop and Spark.",
      image: "https://img.freepik.com/premium-vector/big-data-concept-illustration_114360-2172.jpg"
    }
  ],
  cyberSecurity: [
    {
      id: 6,
      title: "Cyber Security Fundamentals",
      description: "Learn the basics of securing web applications and networks.",
      image: "https://img.freepik.com/free-vector/cyber-security-concept_23-2148533274.jpg"
    },
    {
      id: 19,
      title: "Penetration Testing Basics",
      description: "Learn the basics of penetration testing and vulnerability assessments.",
      image: "https://img.freepik.com/premium-vector/penetration-testing-concept-illustration_114360-2180.jpg"
    },
    {
      id: 20,
      title: "Network Security Essentials",
      description: "Understand the key concepts in network security and defenses.",
      image: "https://img.freepik.com/premium-vector/network-security-concept-illustration_114360-2185.jpg"
    }
  ],
  career: [
    {
      id: 7,
      title: "Career Development for IT Professionals",
      description: "Navigate your career in the IT industry with practical advice.",
      image: "https://img.freepik.com/premium-vector/businessman-career-development_1124-534.jpg"
    },
    {
      id: 21,
      title: "Building a Tech Portfolio",
      description: "Learn how to create an impressive tech portfolio.",
      image: "https://img.freepik.com/premium-vector/portfolio-development-concept-illustration_114360-2190.jpg"
    },
    {
      id: 22,
      title: "Networking Strategies for IT Professionals",
      description: "Explore effective networking strategies to advance your career.",
      image: "https://img.freepik.com/premium-vector/networking-strategies-concept-illustration_114360-2194.jpg"
    }
  ]
};

export default coursesData;
