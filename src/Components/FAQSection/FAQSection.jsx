import React from "react";

const FAQSection = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-left">
        <p className="section-subtitle">FAQ</p>

        <h2 className="section-title">Frequently Asked Questions</h2>

        <p className="section-text">
          Have questions? Check out our frequently asked questions to find quick
          answers to common inquiries. If you can't find what you're looking
          for, feel free to contact our support team for further assistance.
        </p>
      </div>

      <div className="testimonials-right">
        <div className="testimonials-card">
          <details
            open
            style={{
              padding: "10px",
              marginTop: "5px",
              marginBottom: "5px",
              backgroundColor: "#e2e8f0",
              borderRadius: "10px",
            }}
          >
            <summary>
              What payment methods do you accept?
              <svg
                className="control-icon control-icon-expand"
                width="24"
                height="24"
                role="presentation"
              >
                <use
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xlinkHref="#expand-more"
                />
              </svg>
              <svg
                className="control-icon control-icon-close"
                width="24"
                height="24"
                role="presentation"
              >
                <use
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xlinkHref="#close"
                />
              </svg>
            </summary>
            <p
              style={{
                marginTop: "10px",
                marginBottom: "5px",
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: "#f1f5f9",
              }}
            >
              You can pay for your course in person using cash, check, or credit
              card.
            </p>
          </details>

          <details
            style={{
              padding: "10px",
              marginTop: "5px",
              marginBottom: "5px",
              backgroundColor: "#e2e8f0",
              borderRadius: "10px",
            }}
          >
            <summary>
              Are there any scholarships or financial aid available for courses?
              <svg
                className="control-icon control-icon-expand"
                width="24"
                height="24"
                role="presentation"
              >
                <use
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xlinkHref="#expand-more"
                />
              </svg>
              <svg
                className="control-icon control-icon-close"
                width="24"
                height="24"
                role="presentation"
              >
                <use
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xlinkHref="#close"
                />
              </svg>
            </summary>
            <p
              style={{
                marginTop: "10px",
                marginBottom: "5px",
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: "#f1f5f9",
              }}
            >
              Yes, we offer scholarships and financial aid to eligible students.
              Please contact our office for more information.
            </p>
          </details>
          <details
            style={{
              padding: "10px",
              marginTop: "5px",
              marginBottom: "5px",
              backgroundColor: "#e2e8f0",
              borderRadius: "10px",
            }}
          >
            <summary>
              Can I get individual assistance with coursework outside of class
              time?
              <svg
                className="control-icon control-icon-expand"
                width="24"
                height="24"
                role="presentation"
              >
                <use
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xlinkHref="#expand-more"
                />
              </svg>
              <svg
                className="control-icon control-icon-close"
                width="24"
                height="24"
                role="presentation"
              >
                <use
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xlinkHref="#close"
                />
              </svg>
            </summary>
            <p
              style={{
                marginTop: "10px",
                marginBottom: "5px",
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: "#f1f5f9",
              }}
            >
              Yes, we offer one-on-one tutoring sessions with our expert
              instructors.
            </p>
          </details>
          <details
            style={{
              padding: "10px",
              marginTop: "5px",
              marginBottom: "5px",
              backgroundColor: "#e2e8f0",
              borderRadius: "10px",
            }}
          >
            <summary>
              What are the office hours of the institute?
              <svg
                className="control-icon control-icon-expand"
                width="24"
                height="24"
                role="presentation"
              >
                <use
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xlinkHref="#expand-more"
                />
              </svg>
              <svg
                className="control-icon control-icon-close"
                width="24"
                height="24"
                role="presentation"
              >
                <use
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xlinkHref="#close"
                />
              </svg>
            </summary>
            <p
              style={{
                marginTop: "10px",
                marginBottom: "5px",
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: "#f1f5f9",
              }}
            >
              Our office hours are from 9 AM to 5 PM on weekdays and 9 AM to 1
              PM on Saturdays.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
