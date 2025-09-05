import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

const reviews = [
  {
    id: 1,
    text: "Sky Aesthetics Training really stands out. The support after the course has been fantastic, and I know I can always reach out if I need guidance.",
    icon: "/icon.png",
    image: "/client1.jpg",
    name: "Sarah Nimbus",
    profession: "Student",
  },
  {
    id: 2,
    text: "Highly recommend! The course gave me the skills I needed to expand my business, and my clients are already noticing the difference.",
    icon: "/icon.png",
    image: "/client2.jpg",
    name: "John Doe",
    profession: "Student",
  },
  {
    id: 3,
    text: "I’ve trained at other academies before, but the quality here is unmatched. The course was structured, detailed, and the staff were so supportive throughout.",
    icon: "/icon.png",
    image: "/client3.jpg",
    name: "Emma Watson",
    profession: "Student",
  },
  {
    id: 4,
    text: "I had such a great experience! The trainers explained everything clearly and gave us lots of hands-on practice. I feel fully confident to start offering treatments.",
    icon: "/icon.png",
    image: "/client4.jpg",
    name: "Michael Lee",
    profession: "Student",
  },
];

export default function ReviewSection() {
  return (
    <section className="py-5">
      {/* Title */}
      <h2
        className="text-center mb-5"
        style={{
          marginTop: "3.3rem",
          fontFamily: "Syne",
          fontWeight: 700,
          fontSize: "28px",
          lineHeight: "100%",
          letterSpacing: "2%",
          textTransform: "uppercase",
          color: "#23A6F0",
        }}
      >
        What Our Clients Say About Us
      </h2>

      {/* Carousel */}
      <Carousel indicators={false} interval={4000}>
        {/* Split reviews into chunks of 2 */}
        {Array.from({ length: Math.ceil(reviews.length / 2) }).map(
          (_, index) => {
            const chunk = reviews.slice(index * 2, index * 2 + 2);
            return (
              <Carousel.Item key={index}>
                <div className="d-flex justify-content-center flex-wrap gap-4">
                  {chunk.map((review) => (
                    <div
                      key={review.id}
                      className=" d-flex flex-column justify-content-between"
                      style={{
                        width: "100%",
                        maxWidth: "480px",
                        height: "171px",
                        background: "#D9F1FF",
                        borderRadius: "12px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        padding: "2.4rem",
                      }}
                    >
                      {/* Top row: Icon + Text */}
                      <div className="d-flex align-items-start gap-3">
                        <img
                          src={review.icon}
                          alt="icon"
                          style={{ width: "40px", height: "40px" }}
                        />
                        <p
                          style={{
                            margin: 0,
                            fontSize: "14px",
                            color: "#333",
                            lineHeight: "1.4",
                          }}
                        >
                          {review.text}
                        </p>
                      </div>

                      {/* Bottom row: Client image + Name + Profession */}
                      <div className="d-flex align-items-center gap-3 mt-3">
                        <img
                          src={review.image}
                          alt={review.name}
                          style={{
                            width: "65px",
                            height: "65px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            padding: "10px",
                          }}
                        />
                        <div>
                          <h6
                            style={{
                              margin: 0,
                              fontSize: "14px",
                              fontWeight: "600",
                            }}
                          >
                            {review.name}
                          </h6>
                          <p
                            style={{
                              margin: 0,
                              fontSize: "12px",
                              fontWeight: "500",
                              color: "#23A6F0",
                            }}
                          >
                            {review.profession}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            );
          }
        )}
      </Carousel>
    </section>
  );
}
