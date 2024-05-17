const GenderCheckbox = ({handleGenderChange, selectedGender}) => {
  return (
    <div className="flex mt-1">
      <div className=" form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="text-base label-text">Male</span>
          <input
            type="radio"
            name="radio-7"
            className="radio radio-info"
            checked = {selectedGender === 'male'}
            onChange={() => handleGenderChange("male")}
          />
        </label>
      </div>

      <div className=" form-control">
        <label className="label gap-1 cursor-pointer">
          <span className="text-base label-text">Female</span>
          <input
            type="radio"
            name="radio-7"
            className="radio radio-info"
            checked = {selectedGender === 'female'}
            onChange={() => handleGenderChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
