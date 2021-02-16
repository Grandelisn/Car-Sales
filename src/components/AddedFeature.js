import React from 'react';
import { connect } from "react-redux";
import { deleteFeature } from "../actions/featureActions";

const AddedFeature = props => {
  return (
    <li>
      <button
        className="button"
        onClick={() => props.deleteFeature(props.feature)}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default connect(() => {}, { deleteFeature })(AddedFeature);
