import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "./pricing.css";

const PricingPage = () => {
  const navigate = useNavigate();
  const [highlightedCourse, setHighlightedCourse] = useState(null);
  const [highlightedCategory, setHighlightedCategory] = useState(null);
  const [searchContext, setSearchContext] = useState(null);

  useEffect(() => {
    // Check for selected course from search
    const selectedCourse = sessionStorage.getItem("selectedCourse");
    if (selectedCourse) {
      const courseData = JSON.parse(selectedCourse);
      setHighlightedCourse(courseData.id);
      setHighlightedCategory(courseData.categoryId);
      setSearchContext(courseData.searchTerm);

      // Clear from session storage
      sessionStorage.removeItem("selectedCourse");

      // Scroll to category after component mounts
      setTimeout(() => {
        const element = document.getElementById(
          `category-${courseData.categoryId}`
        );
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }

        // Scroll to specific course after category scroll
        setTimeout(() => {
          const courseElement = document.getElementById(
            `course-${courseData.id}`
          );
          if (courseElement) {
            courseElement.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        }, 800);
      }, 300);
    }
  }, []);

  const courseCategories = [
    {
      id: 1,
      title: "VTCT Beauty Laser Courses",
      subtitle: "VTCT Approved",
      description:
        "Professional laser and IPL training courses for advanced beauty treatments",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      icon: "fas fa-magic",
      courses: [
        {
          id: "laser-1",
          name: "VTCT Skills Level 4 Diploma in Permanent Hair Removal and Skin Rejuvenation",
          price: "£1495",
          level: "Level 4",
          certification: "ITEC",
        },
        {
          id: "laser-2",
          name: "VTCT Skills Level 4 Certificate in Enhancing Eyebrows with Microblading Techniques",
          price: "£1495",
          level: "Level 4",
          certification: "ITEC",
        },
        {
          id: "laser-5",
          name: "VTCT Skills (ITEC) Level 3 Certificate in Access to Aesthetic Therapies",
          price: "£1995",
          level: "Level 3",
          certification: "ITEC",
          featured: true,
        },
        {
          id: "laser-6",
          name: "VTCT Skills Level 4 Certificate in Micropigmentation",
          price: "£1995",
          level: "Level 4",
          certification: "ITEC",
          featured: true,
        },
        {
          id: "laser-7",
          name: "VTCT Skills (ITEC) Level 4 Certificate in Skin Needling",
          price: "£1995",
          level: "Level 4",
          certification: "VTCT",
        },
        {
          id: "laser-1",
          name: "VTCT Skills Level 4 Diploma in Permanent Hair Removal and Skin Rejuvenation",
          price: "£1495",
          level: "Level 4",
          certification: "ITEC",
        },
        {
          id: "laser-2",
          name: "VTCT Skills Level 4 Certificate in Enhancing Eyebrows with Microblading Techniques",
          price: "£1495",
          level: "Level 4",
          certification: "ITEC",
        },
        {
          id: "laser-5",
          name: "VTCT Skills (ITEC) Level 3 Certificate in Access to Aesthetic Therapies",
          price: "£1995",
          level: "Level 3",
          certification: "ITEC",
          featured: true,
        },
        {
          id: "laser-6",
          name: "VTCT Skills Level 4 Certificate in Micropigmentation",
          price: "£1995",
          level: "Level 4",
          certification: "ITEC",
          featured: true,
        },
        {
          id: "laser-7",
          name: "VTCT Skills (ITEC) Level 4 Certificate in Skin Needling",
          price: "£1995",
          level: "Level 4",
          certification: "VTCT",
        },
        {
          id: "laser-12",
          name: "VTCT Skills Level 3 Award in Anatomical and Physiological Knowledge of Body Systems",
          price: "£1495",
          level: "Level 3",
          certification: "VTCT",
        },
        {
          id: "laser-14",
          name: "VTCT Skills Level 2 Diploma for Hair Professionals (Hairdressing)",
          price: "£1995",
          level: "Level 2",
          certification: "VTCT",
          featured: true,
        },
        {
          id: "laser-17",
          name: "VTCT Skills Level 3 Diploma in Womens Hairdressing",
          price: "£2495",
          level: "Level 3",
          certification: "VTCT",
          popular: true,
        },
        {
          id: "laser-18",
          name: "VTCT Skills Level 4 Certificate in Laser and Intense Pulsed Light (IPL) Treatments",
          price: "£2495",
          level: "Level 4",
          certification: "VTCT",
          popular: true,
        },
        {
          id: "laser-19",
          name: "VTCT Skills Level 2 Diploma in Womens Hairdressing",
          price: "£1495",
          level: "Level 2",
          certification: "VTCT",
        },
        {
          id: "laser-20",
          name: "VTCT Skills Level 4 Certificate in Enhancing Eyebrows with Microblading Techniques",
          price: "£1495",
          level: "Level 4",
          certification: "ITEC",
        },
        {
          id: "laser-22",
          name: "VTCT Skills Level 2 NVQ Diploma in Hairdressing",
          price: "£1495",
          level: "Level 2",
          certification: "VTCT",
        },
        {
          id: "laser-23",
          name: "VTCT Skills Level 3 Diploma in Nail Technology",
          price: "£1995",
          level: "Level 3",
          certification: "VTCT",
          featured: true,
        },
        {
          id: "laser-24",
          name: "VTCT Skills Level 2 Award in Facial Massage and Skincare",
          price: "£1995",
          level: "Level 2",
          certification: "VTCT",
          featured: true,
        },
        {
          id: "laser-25",
          name: "VTCT Skills Level 3 NVQ Diploma in Beauty Therapy Massage",
          price: "£1995",
          level: "Level 3",
          certification: "VTCT",
        },
        {
          id: "laser-27",
          name: "VTCT Skills Level 2 NVQ Diploma in Beauty Therapy General",
          price: "£2495",
          level: "Level 2",
          certification: "VTCT",
          popular: true,
        },
        {
          id: "laser-28",
          name: "VTCT Skills Level 7 Certificate in Non-surgical Aesthetic Injectable Procedures using Skin Boosters",
          price: "£2495",
          level: "Level 7",
          certification: "VTCT",
          popular: true,
        },
        {
          id: "laser-30",
          name: "VTCT Skills Level 2 NVQ Diploma in Beauty Therapy General",
          price: "£2495",
          level: "Level 2",
          certification: "VTCT",
          popular: true,
        },
        {
          id: "laser-31",
          name: "VTCT Skills Level 7 Certificate in Non-surgical Aesthetic Injectable Procedures using Dermal Fillers",
          price: "£2495",
          level: "Level 7",
          certification: "VTCT",
          popular: true,
        },
      ],
    },
    {
      id: 2,
      title: "VTCT Beauty Courses",
      subtitle: "VTCT Approved",
      description:
        "Comprehensive beauty therapy training from foundation to advanced levels",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      icon: "fas fa-spa",
      courses: [
        {
          id: "beauty-1",
          name: "VTCT Skills Level 4 Award in Skin Blemish Removal",
          price: "£245",
          level: "Level 4",
          certification: "VTCT",
        },
        {
          id: "beauty-2",
          name: "VTCT Skills (ITEC) Level 3 Certificate in Access to Aesthetic Therapies",
          price: "£495",
          level: "Level 3",
          certification: "VTCT",
        },
        {
          id: "beauty-4",
          name: "VTCT Skills Level 2 NVQ Award in Eyebrow and Eyelash Treatments",
          price: "£1995",
          level: "Level 2",
          certification: "VTCT",
          featured: true,
        },
        {
          id: "beauty-6",
          name: "VTCT Skills (ITEC) Level 5 Award in Micropigmentation for Camouflage and Restoration",
          price: "£645",
          level: "Level 5",
          certification: "VTCT",
        },
        {
          id: "beauty-8",
          name: "VTCT Skills Level 4 Award in Eyebrow Micropigmentation Techniques",
          price: "£2995",
          level: "Level 4",
          certification: "VTCT",
        },
        {
          id: "beauty-9",
          name: "VTCT Skills Level 4 Award in Eyelid Micropigmentation Techniques",
          price: "£1495",
          level: "Level 4",
          certification: "VTCT",
        },
        {
          id: "beauty-10",
          name: "Level 4 Certificate in Enhancing Eyebrows with Microblading Techniques",
          price: "£1995",
          level: "Level 4",
          certification: "VTCT",
          featured: true,
        },
        {
          id: "beauty-11",
          name: "VTCT Skills Level 4 Award in Lip Micropigmentation Techniques",
          price: "£2995",
          level: "Level 4",
          certification: "VTCT",
        },
        {
          id: "beauty-12",
          name: "VTCT Skills Level 3 Award in Adult Basic Life Support, AED and Management of Anaphylaxis",
          price: "£2995",
          level: "Level 3",
          certification: "ITEC",
        },
        {
          id: "beauty-13",
          name: "VTCT Skills (ITEC) Level 6 Certificate in Advanced Chemical Skin Peeling",
          price: "£1995",
          level: "Level 6",
          certification: "ITEC",
        },
        {
          id: "beauty-14",
          name: "VTCT Skills (ITEC) Level 6 Certificate in Advanced Skin Needling",
          price: "£245",
          level: "Level 6",
          certification: "VTCT",
        },
        {
          id: "beauty-15",
          name: "VTCT Skills (ITEC) Level 4 Award in Scalp Micropigmentation Treatments",
          price: "£495",
          level: "Level 4",
          certification: "VTCT",
        },
        {
          id: "beauty-16",
          name: "VTCT Skills Level 2 Diploma for Hair Professionals (Barbering)",
          price: "£495",
          level: "Level 2",
          certification: "VTCT",
        },
        {
          id: "beauty-17",
          name: "VTCT Skills (ITEC) Level 4 Certificate in Skin Peeling",
          price: "£1995",
          level: "Level 4",
          certification: "ITEC",
          featured: true,
        },
        {
          id: "beauty-18",
          name: "VTCT Skills Level 2 Certificate in Womens Hairdressing",
          price: "£495",
          level: "Level 2",
          certification: "VTCT",
        },
        {
          id: "beauty-19",
          name: "VTCT Skills (ITEC) Level 4 Award in Hair Reduction using Intense Pulsed Light Systems",
          price: "£645",
          level: "Level 4",
          certification: "VTCT",
        },
        {
          id: "beauty-20",
          name: "VTCT Skills (ITEC) Level 4 Certificate in Hair Reduction and Skin Rejuvenation using LASER Systems",
          price: "£2495",
          level: "Level 4",
          certification: "VTCT",
          popular: true,
        },
        {
          id: "beauty-21",
          name: "VTCT Skills (ITEC) Level 4 Award in Skin Rejuvenation using LASER Systems",
          price: "£2995",
          level: "Level 4",
          certification: "ITEC",
        },
        {
          id: "beauty-22",
          name: "VTCT Skills (ITEC) Level 4 Certificate in Hair Reduction and Skin Rejuvenation Using Intense Pulsed Light Systems",
          price: "£1495",
          level: "Level 4",
          certification: "ITEC",
        },
        {
          id: "beauty-24",
          name: "VTCT Skills Level 4 Award in Lip Micropigmentation Techniques",
          price: "£2995",
          level: "Level 4",
          certification: "VTCT",
        },
        {
          id: "beauty-26",
          name: "VTCT Skills Level 4 Certificate in Advanced Beauty Therapy",
          price: "£1995",
          level: "Level 4",
          certification: "VTCT",
        },
        {
          id: "beauty-27",
          name: "VTCT Skills Level 4 Certificate in Advanced Aesthetic Therapies for Skin Rejuvenation",
          price: "£1995",
          level: "Level 4",
          certification: "VTCT",
        },
        {
          id: "beauty-28",
          name: "VTCT Skills (ITEC) Level 4 Award in Hair Reduction using LASER Systems",
          price: "£1995",
          level: "Level 4",
          certification: "VTCT",
        },
        {
          id: "beauty-29",
          name: "VTCT Skills Level 5 Certificate in Non-surgical Aesthetic Procedures for Skin Rejuvenation",
          price: "£1995",
          level: "Level 5",
          certification: "VTCT",
        },
        {
          id: "beauty-30",
          name: "VTCT Skills Level 4 Certificate in Advanced Beauty Therapy",
          price: "£1995",
          level: "Level 4",
          certification: "VTCT",
        },
        {
          id: "beauty-31",
          name: "VTCT Skills Level 3 Diploma in Make-Up Artistry",
          price: "£1995",
          level: "Level 3",
          certification: "VTCT",
        },
        {
          id: "beauty-32",
          name: "VTCT Skills Level 4 Diploma in Hair Reduction and Skin Rejuvenation Using LASER and Intense Pulsed Light Systems",
          price: "£1995",
          level: "Level 4",
          certification: "VTCT",
        },
        {
          id: "beauty-35",
          name: "VTCT Skills (ITEC) Level 4 Award in Skin Rejuvenation using Intense Pulsed Light Systems",
          price: "£1995",
          level: "Level 4",
          certification: "ITEC",
        },
        {
          id: "beauty-37",
          name: "VTCT Skills (ITEC) Level 5 Certificate in Advanced Blemish Removal",
          price: "£1995",
          level: "Level 5",
          certification: "ITEC",
        },
        {
          id: "beauty-38",
          name: "VTCT Skills Level 3 NVQ Diploma in Nail Services",
          price: "£1995",
          level: "Level 3",
          certification: "VTCT",
        },
        {
          id: "beauty-41",
          name: "VTCT Skills Level 3 NVQ Diploma in Beauty Therapy General",
          price: "£1995",
          level: "Level 3",
          certification: "VTCT",
        },
        {
          id: "beauty-42",
          name: "VTCT Skills (ITEC) Level 5 Award in Radiofrequency Microneedling Treatments",
          price: "£1995",
          level: "Level 5",
          certification: "ITEC",
        },
        {
          id: "beauty-43",
          name: "VTCT Skills Level 3 Diploma in Hairdressing",
          price: "£1995",
          level: "Level 3",
          certification: "VTCT",
        },
        {
          id: "beauty-44",
          name: "VTCT Skills (ITEC) Level 4 Certificate in Micro-Pigmentation Treatment",
          price: "£1995",
          level: "Level 4",
          certification: "ITEC",
        },
        {
          id: "beauty-48",
          name: "VTCT Skills Level 7 Diploma in Non-surgical Aesthetic Injectable Procedures",
          price: "£1995",
          level: "Level 7",
          certification: "VTCT",
        },
        {
          id: "beauty-49",
          name: "VTCT Skills Level 7 Certificate in Non-surgical Aesthetic Injectable Procedures",
          price: "£1995",
          level: "Level 7",
          certification: "VTCT",
        },
        {
          id: "beauty-49",
          name: "VTCT Skills (ITEC) Level 5 Certificate in Laser Tattoo Removal",
          price: "£1995",
          level: "Level 5",
          certification: "ITEC",
        },
      ],
    },
    {
      id: 3,
      title: "QUALIFI Beauty Aesthetics Courses",
      subtitle: "QUALIFI Approved",
      description:
        "Advanced aesthetic procedures and professional practice qualifications",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      icon: "fas fa-gem",
      courses: [
        {
          id: "aesthetics-1",
          name: "Level 3 Diploma in Advanced Beauty Therapy",
          price: "from £1995",
          level: "Level 3",
          certification: "QUALIFI",
        },
        {
          id: "aesthetics-2",
          name: "Level 4 Diploma in Aesthetic Procedure for Skin Rejuvenation ",
          price: "from £2795",
          level: "Level 4",
          certification: "QUALIFI",
          featured: true,
        },
        {
          id: "aesthetics-3",
          name: "Level 5	Award in Needlestick Injury Infection Prevention and Control",
          price: "from £2795",
          level: "Level 5",
          certification: "QUALIFI",
          featured: true,
        },
        {
          id: "aesthetics-4",
          name: "Level 5 Certificate in Advanced Aesthetic Procedure: Chemical Peels ",
          price: "from £2795",
          level: "Level 5",
          certification: "QUALIFI",
        },
        {
          id: "aesthetics-5",
          name: "Level 5	Certificate in Advanced Aesthetic Procedure: Micro-needling ",
          price: "from £3795",
          level: "Level 5",
          certification: "QUALIFI",
          popular: true,
        },
        {
          id: "aesthetics-6",
          name: "Level 5	Certificate in Aesthetic Practice",
          price: "from £4795",
          level: "Level 5",
          certification: "QUALIFI",
          popular: true,
        },
        {
          id: "aesthetics-6",
          name: "Level 5	Certificate in Aesthetic Practice",
          price: "from £4795",
          level: "Level 5",
          certification: "QUALIFI",
          popular: true,
        },
        {
          id: "aesthetics-6",
          name: "Level 6	Award in Advanced Aesthetic Procedure: Chemical Peels ",
          price: "from £4795",
          level: "Level 6",
          certification: "QUALIFI",
          popular: true,
        },
        {
          id: "aesthetics-6",
          name: "Level 6 Award in Advanced Aesthetic Procedure: Micro-needling",
          price: "from £4795",
          level: "Level 6",
          certification: "QUALIFI",
          popular: true,
        },
        {
          id: "aesthetics-6",
          name: "Level 7 Certificate in Aesthetic Practice",
          price: "from £4795",
          level: "Level 7",
          certification: "QUALIFI",
          popular: true,
        },
      ],
    },
    {
      id: 4,
      title: "PROQUAL Aesthetics Courses",
      subtitle: "PROQUAL Approved",
      description:
        "Advanced aesthetic procedures and professional practice qualifications",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      icon: "fas fa-gem",
      courses: [
        {
          id: "aesthetics-1",
          name: "Level 2 Award in Make-up Services",
          price: "from £1999",
          level: "Level 2",
          certification: "PROQUAL",
        },
        {
          id: "aesthetics-2",
          name: "Level 2	Award in Manicure Services",
          price: "from £2795",
          level: "Level 2",
          certification: "PROQUAL",
          featured: true,
        },
        {
          id: "aesthetics-3",
          name: "Level 2 Award in Pedicure Services",
          price: "from £2795",
          level: "Level 2",
          certification: "PROQUAL",
          featured: true,
        },
        {
          id: "aesthetics-4",
          name: "Level 2 Diploma for Nail Technicians ",
          price: "from £2795",
          level: "Level 2",
          certification: "PROQUAL",
        },
        {
          id: "aesthetics-5",
          name: "Level 2	Certificate in Nail Enhancement services ",
          price: "from £3795",
          level: "Level 2",
          certification: "PROQUAL",
          popular: true,
        },
        {
          id: "aesthetics-6",
          name: "Level 2 Award in Ear Candling",
          price: "from £4795",
          level: "Level 2",
          certification: "PROQUAL",
          popular: true,
        },
        {
          id: "aesthetics-6",
          name: "Level 2 Diploma in Hair Professional - Barbering",
          price: "from £4795",
          level: "Level 2",
          certification: "PROQUAL",
          popular: true,
        },
        {
          id: "aesthetics-6",
          name: "Level 2	Diploma in Professional Hairdressing ",
          price: "from £4795",
          level: "Level 2",
          certification: "PROQUAL",
          popular: true,
        },
        {
          id: "aesthetics-6",
          name: "Level 2 Certificate in Barbering",
          price: "from £4795",
          level: "Level 2",
          certification: "PROQUAL",
          popular: true,
        },
        {
          id: "aesthetics-6",
          name: "Level 2	Certificate for Hair Professionals - Barbering",
          price: "from £4795",
          level: "Level 2",
          certification: "PROQUAL",
          popular: true,
        },
        {
          id: "aesthetics-6",
          name: "Level 2	Award in Eyelashes and Eyebrows Treatment",
          price: "from £4695",
          level: "Level 2",
          certification: "PROQUAL",
          popular: true,
        },
        {
          id: "aesthetics-6",
          name: "Level 3 Certificate in Airbrush Make-up Services",
          price: "from £3795",
          level: "Level 3",
          certification: "PROQUAL",
          popular: true,
        },
        {
          id: "aesthetics-6",
          name: "Level 3	Diploma in Make-up Services",
          price: "from £4755",
          level: "Level 3",
          certification: "PROQUAL",
          popular: true,
        },
        {
          id: "aesthetics-6",
          name: "Level 3	Award in Eyelash Extensions Application",
          price: "from £4990",
          level: "Level 2",
          certification: "PROQUAL",
          popular: true,
        },
        {
          id: "aesthetics-6",
          name: "Level 3	Certificate in Eyelash and Eyebrow Services",
          price: "from £4795",
          level: "Level 3",
          certification: "PROQUAL",
          popular: true,
        },
        {
          id: "aesthetics-6",
          name: "Level 3	Certificate in Ear Piercing ",
          price: "from £4891",
          level: "Level 3",
          certification: "PROQUAL",
          popular: true,
        },
        {
          id: "aesthetics-6",
          name: "Level 3	Certificate in Ear Piercing ",
          price: "from £4891",
          level: "Level 3",
          certification: "PROQUAL",
          popular: true,
        },
        {
          id: "aesthetics-6",
          name: "Level 3 Certificate in Piercing Services ",
          price: "from £3790",
          level: "Level 3",
          certification: "PROQUAL",
          popular: true,
        },
        {
          id: "aesthetics-6",
          name: "Level 4	Certificate in Micro Dermal Piercing ",
          price: "from £4698",
          level: "Level 4",
          certification: "PROQUAL",
          popular: true,
        },
        {
          id: "aesthetics-6",
          name: "Level 5	Diploma in Aesthetics Practice",
          price: "from £4788",
          level: "Level 5",
          certification: "PROQUAL",
          popular: true,
        },
        {
          id: "aesthetics-6",
          name: "Level 6 Certificate in Mesotherapy Treatments ",
          price: "from £5374",
          level: "Level 6",
          certification: "PROQUAL",
          popular: true,
        },
        {
          id: "aesthetics-6",
          name: "Level 6	Diploma in Aesthetics Practice ",
          price: "from £5394",
          level: "Level 6",
          certification: "PROQUAL",
          popular: true,
        },
        {
          id: "aesthetics-6",
          name: "Level 6	Award in Phlebotomy for Aesthetic Practice",
          price: "from £5374",
          level: "Level 6",
          certification: "PROQUAL",
          popular: true,
        },
        {
          id: "aesthetics-6",
          name: "Level 6 Certificate in Ear Wax Removal ",
          price: "from £5399",
          level: "Level 6",
          certification: "PROQUAL",
          popular: true,
        },
        {
          id: "aesthetics-6",
          name: "Level 6 Certificate in Non-Surgical Fat Reduction ",
          price: "from £5409",
          level: "Level 6",
          certification: "PROQUAL",
          popular: true,
        },
        {
          id: "aesthetics-6",
          name: "Level 6 Certificate in Phlebotomy ",
          price: "from £5429",
          level: "Level 6",
          certification: "PROQUAL",
          popular: true,
        },
        {
          id: "aesthetics-6",
          name: "Level 7	Certificate in Vitamin and Mineral Treatments",
          price: "from £5431",
          level: "Level 7",
          certification: "PROQUAL",
          popular: true,
        },
        {
          id: "aesthetics-6",
          name: "Level 7	Diploma in Aesthetic Practice  ",
          price: "from £5582",
          level: "Level 7",
          certification: "PROQUAL",
          popular: true,
        },
        {
          id: "aesthetics-6",
          name: "Level 6 Certificate in Ear Wax Removal ",
          price: "from £5399",
          level: "Level 5",
          certification: "PROQUAL",
          popular: true,
        },
        {
          id: "aesthetics-6",
          name: "Level 4	Award External Quality Assurance of Assessment process and practice  ",
          price: "from £4303",
          level: "Level 4",
          certification: "PROQUAL",
          popular: true,
        },
        {
          id: "aesthetics-6",
          name: "Level 4 Award in the Internal QA of Assessment Process + Practice ",
          price: "from £4399",
          level: "Level 4",
          certification: "PROQUAL",
          popular: true,
        },
        {
          id: "aesthetics-6",
          name: "Level 4	Award in Understanding the External Quality Assurance Process and Practice",
          price: "from £4222",
          level: "Level 4",
          certification: "PROQUAL",
          popular: true,
        },
        {
          id: "aesthetics-6",
          name: "Level 4 Award in Understanding the External Quality Assurance Process and Practice",
          price: "from £4565",
          level: "Level 4",
          certification: "PROQUAL",
          popular: true,
        },
      ],
    },
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pricing-page">
      {/* Search Result Banner */}
      {highlightedCourse && searchContext && (
        <div className="search-result-banner">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="search-banner-content">
                  <div className="search-banner-icon">
                    <i className="fas fa-search"></i>
                  </div>
                  <div className="search-banner-text">
                    <h6>Search Result</h6>
                    <p>
                      Found course matching "{searchContext}" - highlighted
                      below
                    </p>
                  </div>
                  <button
                    className="btn-close-banner"
                    onClick={() => {
                      setHighlightedCourse(null);
                      setHighlightedCategory(null);
                      setSearchContext(null);
                    }}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section
        className="hero-section d-flex align-items-center"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "50vh",
        }}
      >
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="hero-title">
                Professional Beauty Training Courses
              </h1>
              <p className="hero-subtitle">
                Choose from our comprehensive range of certified beauty courses
                designed to advance your career
              </p>
              <div className="hero-buttons mt-4">
                <button
                  className="btn btn-lg me-3 courses-btn"
                  onClick={() => scrollToSection("courses")}
                >
                  View Courses
                </button>
                <button
                  className="btn btn-lg enquire-btn"
                  onClick={() => navigate("/enrollnow")}
                >
                  <i className="fas fa-phone me-2"></i>
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories Navigation */}
      <section className="categories-nav py-4 sticky-top bg-white shadow-sm">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-center flex-wrap gap-2">
                {courseCategories.map((category) => (
                  <button
                    key={category.id}
                    className={`btn btn-outline-dark category-btn ${
                      highlightedCategory === category.id ? "active" : ""
                    }`}
                    onClick={() => scrollToSection(`category-${category.id}`)}
                  >
                    <i className={`${category.icon} me-2`}></i>
                    {category.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="courses-section py-5">
        <div className="container">
          {courseCategories.map((category) => (
            <div
              key={category.id}
              id={`category-${category.id}`}
              className={`category-section mb-5 ${
                highlightedCategory === category.id
                  ? "highlighted-category"
                  : ""
              }`}
            >
              {/* Category Header */}
              <div className="row mb-4">
                <div className="col-12">
                  <div className="category-header">
                    <div className="category-content">
                      <div className="d-flex align-items-center">
                        <div className="category-icon me-4">
                          <i className={category.icon}></i>
                        </div>
                        <div>
                          <h2 className="category-title">{category.title}</h2>
                          <p className="category-subtitle">
                            {category.subtitle}
                          </p>
                          <p className="category-description">
                            {category.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Course Cards */}
              <div className="row">
                {category.courses.map((course, index) => (
                  <div key={course.id} className="col-lg-4 col-md-6 mb-4">
                    <div
                      id={`course-${course.id}`}
                      className={`course-card h-100 ${
                        course.popular ? "popular" : ""
                      } ${course.featured ? "featured" : ""} ${
                        highlightedCourse === course.id
                          ? "course-highlighted"
                          : ""
                      }`}
                    >
                      {/* Search Result Indicator */}
                      {highlightedCourse === course.id && (
                        <div className="highlighted-indicator">
                          <i className="fas fa-search me-2"></i>
                          <span>Selected Course</span>
                          <div className="highlight-pulse"></div>
                        </div>
                      )}

                      {course.popular && (
                        <div className="badge-popular">
                          <i className="fas fa-crown me-1"></i>
                          Most Popular
                        </div>
                      )}
                      {course.featured && (
                        <div className="badge-featured">
                          <i className="fas fa-star me-1"></i>
                          Featured
                        </div>
                      )}

                      <div className="card-header">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <span className="course-level">{course.level}</span>
                          <span className="certification-badge">
                            {course.certification}
                          </span>
                        </div>
                        <h5 className="course-name">{course.name}</h5>
                      </div>

                      <div className="card-body">
                        <div className="price-section">
                          <div className="price">{course.price}</div>
                        </div>

                        <div className="course-features">
                          <div className="feature">
                            <i className="fas fa-certificate text-primary me-2"></i>
                            Official Certification
                          </div>
                          <div className="feature">
                            <i className="fas fa-users text-primary me-2"></i>
                            Expert Instructors
                          </div>
                          <div className="feature">
                            <i className="fas fa-clock text-primary me-2"></i>
                            Flexible Schedule
                          </div>
                        </div>
                      </div>

                      <div className="card-footer">
                        <button
                          className="btn btn-enroll w-100"
                          style={{
                            backgroundColor: "rgb(35, 166, 240)",
                            color: "white",
                          }}
                          onClick={() => navigate("/enrollnow")}
                        >
                          <i className="fas fa-graduation-cap me-2"></i>
                          Enquire Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enquire Now Section for each category */}
              <div className="row mt-4">
                <div className="col-12 text-center">
                  <div className="enquire-section">
                    <h4>Ready to Start Your Journey?</h4>
                    <p>
                      Contact us today to learn more about our{" "}
                      {category.title.toLowerCase()}
                    </p>
                    <button
                      className="btn btn-lg btn-success"
                      onClick={() => navigate("/enrollnow")}
                    >
                      <i className="fas fa-phone me-2"></i>
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
