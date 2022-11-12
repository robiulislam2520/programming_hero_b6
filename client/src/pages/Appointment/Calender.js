
import { DayPicker } from "react-day-picker";

const Calender = ({selected, setSelected}) => {
  
  return (
    <div className="bg-white rounded-lg shadow-xl p-8">
      <DayPicker mode="single" selected={selected} onSelect={setSelected} />
    </div>
  );
};

export default Calender;
