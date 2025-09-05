import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Hero({ onCourseSelect }) {
const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef(null);
  const suggestionRefs = useRef([]);

  // All courses data with unique IDs
  const allCourses = [
    // Beauty Laser Courses
    {
      id: "laser-1",
      name: "(ITEC) Level 4 Award in Hair Reduction using Intense Pulsed Light Systems",
      shortName: "Hair Reduction - IPL Systems",
      price: "£1495",
      level: "Level 4",
      certification: "ITEC",
      category: "Beauty Laser Courses",
      categoryId: 1,
      keywords: [
        "hair",
        "reduction",
        "ipl",
        "intense",
        "pulsed",
        "light",
        "laser",
      ],
    },
    {
      id: "laser-2",
      name: "(ITEC) Level 4 Award in Hair Reduction using LASER Systems",
      shortName: "Hair Reduction - LASER Systems",
      price: "£1495",
      level: "Level 4",
      certification: "ITEC",
      category: "Beauty Laser Courses",
      categoryId: 1,
      keywords: ["hair", "reduction", "laser", "systems"],
    },
    {
      id: "laser-3",
      name: "(ITEC) Level 4 Award in Skin Rejuvenation using Intense Pulsed Light Systems",
      shortName: "Skin Rejuvenation - IPL Systems",
      price: "£1495",
      level: "Level 4",
      certification: "ITEC",
      category: "Beauty Laser Courses",
      categoryId: 1,
      keywords: ["skin", "rejuvenation", "ipl", "intense", "pulsed", "light"],
    },
    {
      id: "laser-4",
      name: "(ITEC) Level 4 Award in Skin Rejuvenation using LASER Systems",
      shortName: "Skin Rejuvenation - LASER Systems",
      price: "£1495",
      level: "Level 4",
      certification: "ITEC",
      category: "Beauty Laser Courses",
      categoryId: 1,
      keywords: ["skin", "rejuvenation", "laser", "systems"],
    },
    {
      id: "laser-5",
      name: "(ITEC) Level 4 Certificate in Hair Reduction and Skin Rejuvenation Using Intense Pulsed Light Systems",
      shortName: "Hair Reduction & Skin Rejuvenation - IPL",
      price: "£1995",
      level: "Level 4",
      certification: "ITEC",
      category: "Beauty Laser Courses",
      categoryId: 1,
      featured: true,
      keywords: [
        "hair",
        "reduction",
        "skin",
        "rejuvenation",
        "ipl",
        "certificate",
      ],
    },
    {
      id: "laser-6",
      name: "(ITEC) Level 4 Certificate in Hair Reduction and Skin Rejuvenation using LASER Systems",
      shortName: "Hair Reduction & Skin Rejuvenation - LASER",
      price: "£1995",
      level: "Level 4",
      certification: "ITEC",
      category: "Beauty Laser Courses",
      categoryId: 1,
      featured: true,
      keywords: [
        "hair",
        "reduction",
        "skin",
        "rejuvenation",
        "laser",
        "certificate",
      ],
    },
    {
      id: "laser-7",
      name: "Level 4 Certificate in Laser and Intense Pulsed Light (IPL) Treatments",
      shortName: "Laser & IPL Treatments Certificate",
      price: "£1995",
      level: "Level 4",
      certification: "VTCT",
      category: "Beauty Laser Courses",
      categoryId: 1,
      keywords: ["laser", "ipl", "treatments", "certificate"],
    },
    {
      id: "laser-8",
      name: "Level 4 Diploma in Hair Reduction and Skin Rejuvenation Using LASER and Intense Pulsed Light Systems",
      shortName: "Hair Reduction & Skin Rejuvenation Diploma",
      price: "£2495",
      level: "Level 4",
      certification: "VTCT",
      category: "Beauty Laser Courses",
      categoryId: 1,
      popular: true,
      keywords: [
        "diploma",
        "hair",
        "reduction",
        "skin",
        "rejuvenation",
        "laser",
        "ipl",
      ],
    },
    {
      id: "laser-9",
      name: "Level 4 Diploma in Permanent Hair Removal and Skin Rejuvenation",
      shortName: "Permanent Hair Removal Diploma",
      price: "£2495",
      level: "Level 4",
      certification: "VTCT",
      category: "Beauty Laser Courses",
      categoryId: 1,
      popular: true,
      keywords: [
        "diploma",
        "permanent",
        "hair",
        "removal",
        "skin",
        "rejuvenation",
      ],
    },
    // Beauty Courses
    {
      id: "beauty-1",
      name: "(ITEC) Core of Knowledge",
      shortName: "Core of Knowledge",
      price: "£245",
      level: "Foundation",
      certification: "ITEC",
      category: "Beauty Courses",
      categoryId: 2,
      keywords: ["core", "knowledge", "foundation", "basic"],
    },
    {
      id: "beauty-2",
      name: "Level 2 Award in Facial Massage and Skincare",
      shortName: "Facial Massage & Skincare",
      price: "£495",
      level: "Level 2",
      certification: "VTCT",
      category: "Beauty Courses",
      categoryId: 2,
      keywords: ["facial", "massage", "skincare", "award"],
    },
    {
      id: "beauty-3",
      name: "Level 2 Award in Facial Care",
      shortName: "Facial Care Award",
      price: "£495",
      level: "Level 2",
      certification: "VTCT",
      category: "Beauty Courses",
      categoryId: 2,
      keywords: ["facial", "care", "award"],
    },
    {
      id: "beauty-4",
      name: "Level 2 NVQ Diploma in Beauty Therapy General",
      shortName: "Beauty Therapy General Diploma",
      price: "£1995",
      level: "Level 2",
      certification: "VTCT",
      category: "Beauty Courses",
      categoryId: 2,
      featured: true,
      keywords: ["nvq", "diploma", "beauty", "therapy", "general"],
    },
    {
      id: "beauty-5",
      name: "Level 3 Award in Anatomical and Physiological Knowledge of Body Systems",
      shortName: "Anatomical & Physiological Knowledge",
      price: "£495",
      level: "Level 3",
      certification: "VTCT",
      category: "Beauty Courses",
      categoryId: 2,
      keywords: ["anatomical", "physiological", "knowledge", "body", "systems"],
    },
    {
      id: "beauty-6",
      name: "Level 3 Certificate in Epilation",
      shortName: "Epilation Certificate",
      price: "£645",
      level: "Level 3",
      certification: "VTCT",
      category: "Beauty Courses",
      categoryId: 2,
      keywords: ["epilation", "certificate", "hair", "removal"],
    },
    {
      id: "beauty-7",
      name: "Level 3 NVQ Diploma in Beauty Therapy General",
      shortName: "Level 3 Beauty Therapy Diploma",
      price: "£2495",
      level: "Level 3",
      certification: "VTCT",
      category: "Beauty Courses",
      categoryId: 2,
      popular: true,
      keywords: [
        "nvq",
        "diploma",
        "beauty",
        "therapy",
        "general",
        "level",
        "3",
      ],
    },
    {
      id: "beauty-8",
      name: "(ITEC) Level 4 Enhance Appearance using Scalp Micropigmentation Treatments",
      shortName: "Scalp Micropigmentation",
      price: "£2995",
      level: "Level 4",
      certification: "ITEC",
      category: "Beauty Courses",
      categoryId: 2,
      keywords: ["scalp", "micropigmentation", "appearance", "treatments"],
    },
    {
      id: "beauty-9",
      name: "Level 4 Award in Skin Blemish Removal",
      shortName: "Skin Blemish Removal",
      price: "£1495",
      level: "Level 4",
      certification: "VTCT",
      category: "Beauty Courses",
      categoryId: 2,
      keywords: ["skin", "blemish", "removal", "award"],
    },
    {
      id: "beauty-10",
      name: "Level 4 Certificate in Enhancing Eyebrows with Microblading Techniques",
      shortName: "Microblading Eyebrows",
      price: "£1995",
      level: "Level 4",
      certification: "VTCT",
      category: "Beauty Courses",
      categoryId: 2,
      featured: true,
      keywords: ["eyebrows", "microblading", "techniques", "certificate"],
    },
    {
      id: "beauty-11",
      name: "Level 4 Certificate in Micropigmentation",
      shortName: "Micropigmentation Certificate",
      price: "£2995",
      level: "Level 4",
      certification: "VTCT",
      category: "Beauty Courses",
      categoryId: 2,
      keywords: ["micropigmentation", "certificate"],
    },
    {
      id: "beauty-12",
      name: "(ITEC) Level 5 Provide Micropigmentation for Camouflage and Restoration",
      shortName: "Micropigmentation Camouflage & Restoration",
      price: "£2995",
      level: "Level 5",
      certification: "ITEC",
      category: "Beauty Courses",
      categoryId: 2,
      keywords: [
        "micropigmentation",
        "camouflage",
        "restoration",
        "level",
        "5",
      ],
    },
    {
      id: "beauty-13",
      name: "(ITEC) Level 5 Certificate in Laser Tattoo Removal",
      shortName: "Laser Tattoo Removal",
      price: "£1995",
      level: "Level 5",
      certification: "ITEC",
      category: "Beauty Courses",
      categoryId: 2,
      keywords: ["laser", "tattoo", "removal", "certificate", "level", "5"],
    },
    // Beauty Aesthetics Courses
    {
      id: "aesthetics-1",
      name: "Level 2 Diploma in Advanced Beauty Therapy",
      shortName: "Advanced Beauty Therapy Diploma",
      price: "from £1995",
      level: "Level 2",
      certification: "QUALIFI",
      category: "Beauty Aesthetics Courses",
      categoryId: 3,
      keywords: ["diploma", "advanced", "beauty", "therapy"],
    },
    {
      id: "aesthetics-2",
      name: "Level 3 Diploma in Advanced Beauty Therapy",
      shortName: "Level 3 Advanced Beauty Therapy",
      price: "from £2795",
      level: "Level 3",
      certification: "QUALIFI",
      category: "Beauty Aesthetics Courses",
      categoryId: 3,
      featured: true,
      keywords: ["diploma", "advanced", "beauty", "therapy", "level", "3"],
    },
    {
      id: "aesthetics-3",
      name: "Level 4 Diploma in Aesthetic Procedures for Skin Rejuvenation",
      shortName: "Aesthetic Procedures for Skin Rejuvenation",
      price: "from £2795",
      level: "Level 4",
      certification: "QUALIFI",
      category: "Beauty Aesthetics Courses",
      categoryId: 3,
      featured: true,
      keywords: ["aesthetic", "procedures", "skin", "rejuvenation", "diploma"],
    },
    {
      id: "aesthetics-4",
      name: "Level 4 Certificate in Aesthetics Practice",
      shortName: "Aesthetics Practice Certificate",
      price: "from £2795",
      level: "Level 4",
      certification: "QUALIFI",
      category: "Beauty Aesthetics Courses",
      categoryId: 3,
      keywords: ["aesthetics", "practice", "certificate"],
    },
    {
      id: "aesthetics-5",
      name: "Level 5 Certificate in Aesthetics Practice",
      shortName: "Level 5 Aesthetics Practice",
      price: "from £3795",
      level: "Level 5",
      certification: "QUALIFI",
      category: "Beauty Aesthetics Courses",
      categoryId: 3,
      popular: true,
      keywords: ["aesthetics", "practice", "certificate", "level", "5"],
    },
    {
      id: "aesthetics-6",
      name: "Level 7 Certificate in Aesthetics Practice",
      shortName: "Level 7 Aesthetics Practice",
      price: "from £4795",
      level: "Level 7",
      certification: "QUALIFI",
      category: "Beauty Aesthetics Courses",
      categoryId: 3,
      popular: true,
      keywords: ["aesthetics", "practice", "certificate", "level", "7"],
    },
  ];

  // Advanced search functionality
  useEffect(() => {
    if (searchTerm.length > 1) {
      setIsLoading(true);

      // Simulate API delay for professional feel
      const searchTimeout = setTimeout(() => {
        const searchWords = searchTerm
          .toLowerCase()
          .split(" ")
          .filter((word) => word.length > 1);

        const filtered = allCourses.filter((course) => {
          const searchableText = [
            course.name,
            course.shortName,
            course.category,
            course.level,
            course.certification,
            ...course.keywords,
          ]
            .join(" ")
            .toLowerCase();

          // Check if all search words are found
          return searchWords.every((word) => searchableText.includes(word));
        });

        // Sort by relevance
        const sorted = filtered.sort((a, b) => {
          // Popular and featured courses first
          if (a.popular && !b.popular) return -1;
          if (!a.popular && b.popular) return 1;
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;

          // Then by how many search terms match in the name
          const aNameMatches = searchWords.filter((word) =>
            a.name.toLowerCase().includes(word)
          ).length;
          const bNameMatches = searchWords.filter((word) =>
            b.name.toLowerCase().includes(word)
          ).length;

          return bNameMatches - aNameMatches;
        });

        setSuggestions(sorted);
        setShowSuggestions(true);
        setIsLoading(false);
        setSelectedIndex(-1);
      }, 300);

      return () => clearTimeout(searchTimeout);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
      setIsLoading(false);
      setSelectedIndex(-1);
    }
  }, [searchTerm]);

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!showSuggestions || suggestions.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < suggestions.length - 1 ? prev + 1 : 0
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : suggestions.length - 1
        );
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0) {
          handleSuggestionClick(suggestions[selectedIndex]);
        } else if (suggestions.length > 0) {
          handleSuggestionClick(suggestions[0]);
        }
        break;
      case "Escape":
        setShowSuggestions(false);
        setSelectedIndex(-1);
        break;
    }
  };

  // Scroll selected item into view
  useEffect(() => {
    if (selectedIndex >= 0 && suggestionRefs.current[selectedIndex]) {
      suggestionRefs.current[selectedIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [selectedIndex]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSuggestionClick = (course) => {
    setSearchTerm(course.shortName);
    setShowSuggestions(false);
    setSelectedIndex(-1);

    // Store selected course in sessionStorage for highlighting
    sessionStorage.setItem(
      "selectedCourse",
      JSON.stringify({
        id: course.id,
        categoryId: course.categoryId,
        searchTerm: searchTerm,
      })
    );

    // Navigate to pricing page
    if (window.location.pathname === "/pricing") {
      // If already on pricing page, just scroll and highlight
      window.location.reload();
    } else {
      window.location.href = "/pricing";
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (suggestions.length > 0) {
      const courseToSelect =
        selectedIndex >= 0 ? suggestions[selectedIndex] : suggestions[0];
      handleSuggestionClick(courseToSelect);
    }
  };

  const highlightText = (text, highlight) => {
    if (!highlight) return text;
    const searchWords = highlight
      .toLowerCase()
      .split(" ")
      .filter((word) => word.length > 1);
    let highlightedText = text;

    searchWords.forEach((word) => {
      const regex = new RegExp(`(${word})`, "gi");
      highlightedText = highlightedText.replace(
        regex,
        '<mark class="search-highlight">$1</mark>'
      );
    });

    return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />;
  };

  const getCategoryIcon = (categoryId) => {
    switch (categoryId) {
      case 1:
        return "fas fa-magic";
      case 2:
        return "fas fa-spa";
      case 3:
        return "fas fa-gem";
      default:
        return "fas fa-certificate";
    }
  };

  const getCategoryColor = (categoryId) => {
    switch (categoryId) {
      case 1:
        return "#667eea";
      case 2:
        return "#f093fb";
      case 3:
        return "#4facfe";
      default:
        return "#6c757d";
    }
  };

  return (
    <section
      className="hero-section d-flex align-items-center text-white"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "457px",
        overflow: "hidden",
      }}
    >
      <div className="container-fluid p-0">
        <div className="row align-items-center g-0">
          {/* Left Image */}
          <div className="col-md-6 d-flex justify-content-start p-0 m-0 h-100">
            <img
              src="/left-img.png"
              alt="Overlay"
              className="img-fluid h-100"
              style={{
                maxWidth: "900px",
                objectFit: "contain",
                alignSelf: "flex-end",
              }}
            />
          </div>

           {/* Right Content */}
          <div className="col-md-6 text-start p-4">
            <h1
              className="text-uppercase mb-3"
              style={{
                fontSize: "37.22px",
                lineHeight: "1.2",
                fontFamily: "Syne",
              }}
            >
              The top choice for <br />
              Aesthetics Training in <br />
              Manchester
            </h1>

            <p className="mb-4" style={{ fontSize: "15px" }}>
              Aesthetics Training Courses in Manchester
            </p>

            <div className="d-flex gap-3 mb-4">
              <Link to="/enrollnow" className="btn btn-dark px-4 py-2">
                Join Us
              </Link>

              <Link to="/pricing" className="btn btn-outline-dark px-4 py-2">
                View Courses
              </Link>
            </div>

            {/* Professional Search Field */}
            <div className="search-container position-relative" ref={searchRef}>
              <form onSubmit={handleSearchSubmit} className="d-flex">
                <div className="input-group search-input-group">
                  <span className="input-group-text search-icon">
                    <i className="fas fa-search"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control search-input"
                    placeholder="Search courses... (e.g., laser, beauty, microblading, level 4)"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onFocus={() =>
                      searchTerm.length > 1 && setShowSuggestions(true)
                    }
                    autoComplete="off"
                  />
                  {searchTerm && (
                    <button
                      type="button"
                      className="btn-clear"
                      onClick={() => {
                        setSearchTerm("");
                        setShowSuggestions(false);
                        setSelectedIndex(-1);
                      }}
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  )}
                </div>
              </form>

              {/* Professional Suggestions Dropdown */}
              {showSuggestions && (
                <div className="suggestions-dropdown">
                  {/* Search Header */}
                  <div className="suggestions-header">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="search-info">
                        {isLoading ? (
                          <div className="d-flex align-items-center">
                            <div
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                            >
                              <span className="visually-hidden">
                                Loading...
                              </span>
                            </div>
                            <small className="text-muted">
                              Searching courses...
                            </small>
                          </div>
                        ) : (
                          <small className="text-muted">
                            <i className="fas fa-search me-1"></i>
                            {suggestions.length} course
                            {suggestions.length !== 1 ? "s" : ""} found
                            {searchTerm && ` for "${searchTerm}"`}
                          </small>
                        )}
                      </div>
                      <small className="text-muted keyboard-hint">
                        <kbd>↑</kbd>
                        <kbd>↓</kbd> Navigate <kbd>Enter</kbd> Select{" "}
                        <kbd>Esc</kbd> Close
                      </small>
                    </div>
                  </div>

                  {/* Suggestions List */}
                  <div className="suggestions-list">
                    {isLoading ? (
                      <div className="loading-placeholder">
                        {[...Array(3)].map((_, index) => (
                          <div key={index} className="suggestion-skeleton">
                            <div className="skeleton-content">
                              <div className="skeleton-line skeleton-title"></div>
                              <div className="skeleton-line skeleton-subtitle"></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : suggestions.length > 0 ? (
                      suggestions.map((course, index) => (
                        <div
                          key={course.id}
                          ref={(el) => (suggestionRefs.current[index] = el)}
                          className={`suggestion-item ${
                            selectedIndex === index ? "selected" : ""
                          }`}
                          onClick={() => handleSuggestionClick(course)}
                        >
                          <div className="suggestion-icon">
                            <i
                              className={getCategoryIcon(course.categoryId)}
                              style={{
                                color: getCategoryColor(course.categoryId),
                              }}
                            ></i>
                          </div>

                          <div className="suggestion-content">
                            <div className="suggestion-title">
                              {highlightText(course.shortName, searchTerm)}
                            </div>
                            <div className="suggestion-subtitle">
                              {highlightText(course.name, searchTerm)}
                            </div>
                            <div className="suggestion-meta">
                              <span
                                className="category-tag"
                                style={{
                                  backgroundColor: getCategoryColor(
                                    course.categoryId
                                  ),
                                }}
                              >
                                {course.category}
                              </span>
                              <span className="level-tag">{course.level}</span>
                              <span className="cert-tag">
                                {course.certification}
                              </span>
                            </div>
                          </div>

                          <div className="suggestion-details">
                            <div className="price-tag">{course.price}</div>
                            <div className="suggestion-badges">
                              {course.popular && (
                                <span className="badge-mini popular">
                                  <i className="fas fa-crown"></i> Popular
                                </span>
                              )}
                              {course.featured && (
                                <span className="badge-mini featured">
                                  <i className="fas fa-star"></i> Featured
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="suggestion-arrow">
                            <i className="fas fa-arrow-right"></i>
                          </div>
                        </div>
                      ))
                    ) : searchTerm.length > 1 && !isLoading ? (
                      <div className="no-results">
                        <div className="no-results-icon">
                          <i className="fas fa-search-minus"></i>
                        </div>
                        <div className="no-results-content">
                          <h6>No courses found</h6>
                          <p>Try searching for:</p>
                          <div className="search-suggestions">
                            <span className="search-tag">laser</span>
                            <span className="search-tag">beauty</span>
                            <span className="search-tag">aesthetics</span>
                            <span className="search-tag">microblading</span>
                            <span className="search-tag">level 4</span>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>

                  {/* Search Footer */}
                  {!isLoading && suggestions.length > 0 && (
                    <div className="suggestions-footer">
                      <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">
                          <i className="fas fa-lightbulb me-1"></i>
                          Tip: Use specific terms like "laser hair removal" or
                          "level 3"
                        </small>
                        <small className="text-muted">
                          Press <kbd>Enter</kbd> to select highlighted course
                        </small>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
