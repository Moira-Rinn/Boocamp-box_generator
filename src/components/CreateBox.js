import React, { useState } from 'react';
// import SMCR from '../imgs/SMCR.png';

const CreateBox = (props) => {
  const [boxDims, setBoxDims] = useState({ backgroundColor: "", width: "", height: "" });

  const handleColor = (e) => {
    setBoxDims({ ...boxDims, backgroundColor: e.target.value });
  }
  const handleWidth = (e) => {
    setBoxDims({ ...boxDims, width: e.target.value });
  }
  const handleHeight = (e) => {
    setBoxDims({ ...boxDims, height: e.target.value });
  }

  const addBox = (e) => {
    e.preventDefault();
    props.addBox(boxDims);
    setBoxDims({ backgroundColor: "", width: "", height: "" });
  };

  return (
    <div className="todoForm">
      <div className='form-wrapper'>
        <form onSubmit={addBox}>

          <div className='form-group'>
            <label htmlFor='fname-input'>Pick a color... </label>
            <input className='form-control-sm' onChange={handleColor} type='text' value={boxDims.backgroundColor} />
            <label htmlFor='fname-input'>How wide?: </label>
            <input className='form-control-sm' onChange={handleWidth} type='text' value={boxDims.width} />
            <label htmlFor='fname-input'>How Tall?: </label>
            <input className='form-control-sm' onChange={handleHeight} type='text' value={boxDims.height} />
          </div>
          <input
            id='submitBtn'
            className='btn btn-light btn-outline-dark'
            type="submit"
            value="Create Box"
          />

        </form>
      </div>
      {/* <img src={SMCR} alt="S.M.C.R. Logo"></img> */}
    </div>
  );
}
export default CreateBox;