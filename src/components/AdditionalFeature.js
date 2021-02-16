import React from "react";
import { connect } from "react-redux";
import { addFeature } from "../actions/featureActions";

const AdditionalFeature = props => {
  return (
    <li>
      
      <button
        className="button"
        onClick={() => props.addFeature(props.feature)}
      >
        Add
      </button>
      {props.feature.name}
    </li>
  );
};

export default connect(() => {}, { addFeature })(AdditionalFeature);
