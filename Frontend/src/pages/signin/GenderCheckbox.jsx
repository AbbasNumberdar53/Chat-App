const GenderCheckbox = () => {
  return (
    <div className="flex mt-1">
      <div className=" form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="text-base label-text">Male</span>
          <input
            type="radio"
            name="radio-7"
            className="radio radio-info"
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
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
