import React, {useState} from "react"
import "../../../../../../styles/cards.css"

const Card = ({
  avatar,
  fullname,
  jobtitle,
  time = "Durée: 6 mois",
  year = "2024",
  description,
  about,
  workExperience,
  internship,
  cardId, // Unique card ID
}) => {
  const [activeSection, setActiveSection] = useState("#about")

  const handleSectionChange = (section) => {
    setActiveSection(section)
  }

  return (
    <div className={`card ${activeSection !== "#about" ? "is-active" : ""}` } id={cardId}>
      <div className="card-header ">
        <div
          className="card-cover"
          style={{
            backgroundImage: `url(${avatar})`,
          }}
        ></div>
        <img className="card-avatar" alt="img" src={avatar} />
        <h1 className="card-fullname">{fullname}</h1>
        <h2 className="card-jobtitle">{jobtitle}</h2>
      </div>

      <div className="card-main">
        {/* About Section */}
        {activeSection === "#about" && (
          <div className="card-section is-active" id="about">
            <div className="card-content">
              <div className="card-subtitle">{internship}</div>
              <p className="card-desc">{description}</p>
              <div className="card-desc pt-2">{time}</div>
            </div>
          </div>
        )}

        {/* Experience Section */}
        {activeSection === "#experience" && (
          <div className="card-section is-active" id="experience">
            <div className="card-content">
              <div className="card-subtitle">MON EXPERIENCE</div>
              <div className="card-timeline">
                <div className="card-item" data-year={`${year}`}>
                  <div className="card-item-title">{workExperience}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="card-buttons">
          <button data-section="#about" className={activeSection === "#about" ? "is-active" : ""} onClick={() => handleSectionChange("#about")}>
            A PROPO
          </button>
          <button data-section="#experience" className={activeSection === "#experience" ? "is-active" : ""} onClick={() => handleSectionChange("#experience")}>
            EXPERIENCE
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
