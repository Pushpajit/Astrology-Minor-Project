// import React from 'react';
// import { TimePicker } from 'antd';
// import dayjs from 'dayjs';
// import customParseFormat from 'dayjs/plugin/customParseFormat';
// dayjs.extend(customParseFormat);
// const onChange = (time, timeString) => {
//     console.log(time, timeString);
// };
// const TimePickerComponenet = () => (
//     <TimePicker  onChange={onChange} defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} />
// );
// export default TimePickerComponenet;
import React from 'react';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

const TimePickerComponent = ({ value, onChange }) => (
    <TimePicker onChange={onChange} />
);

export default TimePickerComponent;
