import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./whatweteach.css";

const WhatWeTeach = () => {
  const mainCourses = [
    {
      id: 1,
      title:
        "LEVEL 4 Diploma in Hair Reduction and Skin Rejuvenation using Laser and IPL Systems",
      description:
        "Our level 4 diploma in hair reduction and skin rejuvenation with laser and IPL systems provides hands-on training in advanced aesthetic techniques. Master the art of hair reduction and skin rejuvenation, gaining expertise in laser and IPL technology. Ideal for professionals seeking to excel in aesthetics, this qualification ensures proficiency in delivering safe and effective treatments for clients seeking lasting results.",
      image: "/images/laser.jpg",
      date: "05 March 2018",
      comments: 5,
      miniCourses: [
        {
          id: 101,
          title: "Laser Safety Training",
          image: "/images/laser1.png",
          description: "Essential safety protocols and device handling.",
        },
        {
          id: 102,
          title: "Skin Rejuvenation Basics",
          image: "/images/laser2.png",
          description: "Intro to rejuvenation techniques & client care.",
        },
        {
          id: 103,
          title: "IPL Hair Reduction Techniques",
          image: "/images/laser3.png",
          description: "Core IPL methods for effective hair reduction.",
        },
      ],
    },
    {
      id: 2,
      title: "Level 5 Provide Micropigmentation for Camouflage and Restoration",
      description:
        "Our level 5 micropigmentation for camouflage and restoration course offers comprehensive training in advanced micropigmentation techniques. Learn to skilfully restore and camouflage imperfections, gaining proficiency in the art of precise pigment application. Ideal for experienced professionals looking to specialise in aesthetic restoration, this qualification equips you with the expertise needed to deliver transformative results for clients seeking enhanced appearance and confidence.",
      image: "/images/micropigmentation.png",
      date: "06 March 2018",
      comments: 8,
      miniCourses: [
        {
          id: 201,
          title: "Color Theory & Pigment Selection",
          image: "/images/mp1.png",
          description: "Choose pigments confidently for natural results.",
        },
        {
          id: 202,
          title: "Camouflage Techniques",
          image: "/images/mp2.png",
          description: "Methods to conceal scars and skin irregularities.",
        },
        {
          id: 203,
          title: "Restorative Micropigmentation",
          image: "/images/mp3.png",
          description: "Advanced restorative procedures and case planning.",
        },
      ],
    },
    {
      id: 3,
      title:
        "Level 4 Certificate in Enhancing Eyebrows with Microblading Techniques",
      description:
        "Our level 4 certificate in enhancing eyebrows with microblading techniques provides focused training in the art of microblading. Gain hands-on experience and theoretical knowledge to master precise eyebrow enhancement techniques. Perfect for individuals passionate about aesthetics, this certification ensures proficiency in creating natural-looking, beautifully defined eyebrows through the artful application of microblading.",
      image: "/images/eyebrows.jpg",
      date: "07 March 2018",
      comments: 4,
      miniCourses: [
        {
          id: 301,
          title: "Microblading Tools & Hygiene",
          image: "/images/eyebrow1.jpg",
          description: "Tool selection, sterilisation & safe practice.",
        },
        {
          id: 302,
          title: "Brow Mapping & Shaping",
          image: "/images/eyebrow2.jpg",
          description: "Precision mapping techniques for perfect brows.",
        },
        {
          id: 303,
          title: "Aftercare & Healing",
          image: "/images/eyebrow3.jpg",
          description: "Client aftercare for best healing results.",
        },
      ],
    },
    {
      id: 4,
      title: "Level 4 Micropigmentation",
      description:
        "Our Level 4 micropigmentation course offers comprehensive training in advanced pigment application techniques. Gain practical skills and theoretical knowledge to excel in the art of micro-pigmentation. Tailored for professionals seeking expertise in aesthetic enhancements, this certification ensures mastery in delivering precise and long-lasting results for clients.",
      image: "/images/mpl4.jpg",
      date: "08 March 2018",
      comments: 7,
      miniCourses: [
        {
          id: 401,
          title: "Micropigmentation Equipment",
          image: "/images/mplevel4.1.jpg",
          description: "Equipment essentials and maintenance tips.",
        },
        {
          id: 402,
          title: "Advanced Application Techniques",
          image: "/images/mplevel4.2.jpg",
          description: "Precision strokes and depth control methods.",
        },
        {
          id: 403,
          title: "Client Consultation",
          image: "/images/mplevel4.3.jpg",
          description: "How to consult and set client expectations.",
        },
      ],
    },
    {
      id: 5,
      title: "Certificate in Aesthetics Practice Level 4-7",
      description:
        "Our certificate in aesthetics practice spans Levels 4-7, providing a comprehensive journey through advanced aesthetic techniques and principles. Delve into the intricacies of aesthetic practice, mastering a range of skills tailored to each level of expertise. Ideal for professionals seeking to elevate their careers in aesthetics, this certification series ensures proficiency in delivering exceptional results and staying at the forefront of the industry.",
      image: "/images/aestheticpracticelevel.png",
      date: "09 March 2018",
      comments: 6,
      miniCourses: [
        {
          id: 501,
          title: "Level 4 Skin Treatments",
          image: "/images/apl1.jpg",
          description: "Practical skin treatment foundations.",
        },
        {
          id: 502,
          title: "Level 5 Advanced Aesthetics",
          image: "/images/apl2.jpg",
          description: "Clinical techniques for advanced practice.",
        },
        {
          id: 503,
          title: "Level 6 Clinical Applications",
          image: "/images/apl3.jpg",
          description: "Clinical reasoning and advanced casework.",
        },
      ],
    },
    {
      id: 6,
      title: "Level 3 Diploma in Reflexology",
      description:
        "Our level 3 diploma in reflexology provides comprehensive training in the ancient art of reflexology. Gain practical skills and theoretical knowledge to excel in this holistic practice. Ideal for those passionate about wellness, this diploma equips you to promote balance and well-being through pressure point manipulation.",
      image: "/images/reflexology.png",
      date: "10 March 2018",
      comments: 3,
      miniCourses: [
        { id: 601, title: "Foot Reflexology", image: "/images/r1.jpg", description: "Techniques for foot reflex comfort." },
        { id: 602, title: "Hand Reflexology", image: "/images/r2.jpg", description: "Hand protocols & session flow." },
        { id: 603, title: "Holistic Healing Techniques", image: "/images/r3.jpg", description: "Integrative approaches to wellbeing." },
      ],
    },
    {
      id: 7,
      title: "Level 3 Diploma in Advanced Beauty Therapy",
      description:
        "Our level 3 diploma in advanced beauty therapy offers extensive training in advanced beauty techniques. Develop practical skills and theoretical understanding to excel in this dynamic field. Perfect for beauty enthusiasts looking to expand their expertise, this diploma prepares you to offer cutting-edge treatments and personalised services.",
      image: "/images/advancebeauty.png",
      date: "11 March 2018",
      comments: 9,
      miniCourses: [
        { id: 701, title: "Facial Treatments", image: "/images/ab1.jpg", description: "Signature facial methods." },
        { id: 702, title: "Body Massage Techniques", image: "/images/ab2.jpg", description: "Relaxation and therapeutic strokes." },
        { id: 703, title: "Advanced Skincare", image: "/images/ab3.png", description: "Clinical skincare essentials." },
      ],
    },
  ];

  return (
    <div className="what-we-teach-section py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h1 className="main-heading">What We Teach</h1>
          </div>
        </div>

        {mainCourses.map((main, index) => (
          <article
            key={main.id}
            className={`row mb-5 align-items-center ${
              index % 2 !== 0 ? "flex-row-reverse" : ""
            }`}
          >
            {/* Big Course */}
            <div className="col-md-8">
              <div className="course-big shadow p-3">
                {/* image wrapper for fixed aspect ratio */}
                <div className="image-wrapper">
                  <img
                    src={main.image}
                    className="course-main-image"
                    alt={main.title}
                    loading="lazy"
                  />
                </div>

                <div className="course-content">
                  <div className="course-meta mb-2">
                    <span></span>
                    <span className="ms-4"></span>
                  </div>
                  <h3>{main.title}</h3>
                  <p>{main.description}</p>
                </div>
              </div>
            </div>

            {/* Mini Courses */}
            <div className="col-md-4">
              {main.miniCourses.map((mini) => (
                <article
                  key={mini.id}
                  className="course-mini shadow-sm p-2 mb-3 d-flex gap-3 align-items-start"
                >
                  <div className="image-wrapper-mini flex-shrink-0">
                    <img
                      src={mini.image}
                      className="course-mini-image"
                      alt={mini.title}
                      loading="lazy"
                    />
                  </div>
                  <div className="course-content-small flex-grow-1">
                    <div className="course-meta-small mb-1">
                      <span></span>
                      <span className="ms-2"></span>
                    </div>
                    <h6 className="mb-1">{mini.title}</h6>
                    {/* light muted paragraph after title */}
                    <p className="text-muted small mb-0">{mini.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default WhatWeTeach;
