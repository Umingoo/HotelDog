import ko from "date-fns/locale/ko";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "../../styles/Common/calendar.css";

import { useState } from "react";
// import { isWeekend } from "date-fns";
import { addDays } from "date-fns";
import { useEffect } from "react";
import moment from "moment/moment";
const Calendar = ({ calendarClose }) => {
  const [selectDay, setSelectDay] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);
  useEffect(() => {
    console.log(selectDay);
    // console.log(state[0].startDate);
    // console.log(state[0].endDate);
    // const startDay = moment(selectDay[0].startDate).format("YYYY-MM-DD");
    // const endDay = moment(selectDay[0].endDate).format("YYYY-MM-DD");
    // console.log(startDay, endDay);
  }, [selectDay]);

  const handleSelectDay = () => {
    // 0131
    const startDay =
      moment(selectDay[0].startDate).format("YYYY-MM-DD") + "(수)";
    const endDay = moment(selectDay[0].endDate).format("YYYY-MM-DD") + "(금)";
    console.log(startDay, endDay);
    calendarClose(startDay, endDay);
  };

  return (
    <div className="calendar_modal_background">
      <div className="calendar_modal_wrap">
        <div className="calendar_modal_css">
          <div className="calendar_header">
            <div className="calendar_header-img">
              <img
                className="calendar_header-img"
                src={`${process.env.PUBLIC_URL}/images/calendarImage.svg`}
                alt=""
              />
            </div>

            <div className="calendar_header-text">체크 인/아웃 날짜 선택</div>
          </div>

          {/* 달력만 감싸기 */}
          <div className="calendar_wrap">
            <DateRange
              editableDateInputs={true}
              onChange={item => setSelectDay([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={selectDay}
              months={2}
              direction="horizontal"
              locale={ko}
              // ranges prop을 통해 startDate와 endDate의 스타일 지정
              rangeColors={["#654222"]} // 원하는 색상으로 변경
            />
          </div>

          <button className="calendar_button" onClick={handleSelectDay}>
            선택
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
