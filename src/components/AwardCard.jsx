import React from "react";
import PropTypes from "prop-types";

const AwardCard = ({ title, description, issuer, date, icon }) => {
  return (
    <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-white flex flex-col justify-between h-[350px] w-[270px]">
      
      {/* Quotation mark at the top */}
      <div className="text-3xl text-white/40 mb-4">"</div>

      {/* Description in center */}
      <p className="text-base font-medium text-gray-300 leading-relaxed flex-grow">
        {description}
      </p>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-white">@ {issuer}</p>
          <p className="text-xs text-gray-400">{date}</p>
        </div>
        <img src={icon} alt="Issuer logo" className="w-10 h-10 object-contain rounded-full" />
      </div>
    </div>
  );
};

AwardCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  issuer: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default AwardCard;
