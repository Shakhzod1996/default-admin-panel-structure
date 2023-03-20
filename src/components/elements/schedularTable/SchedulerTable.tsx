import * as React from "react";
import Paper from "@mui/material/Paper";
import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";
import {
     Scheduler,
     Appointments,
     AppointmentForm,
     AppointmentTooltip,
     WeekView,
     EditRecurrenceMenu,
     AllDayPanel,
     ConfirmationDialog,
     MonthView,
     DateNavigator,
     TodayButton,
     Toolbar,
} from "@devexpress/dx-react-scheduler-material-ui";
import moment from "moment";

interface ISchedulerTable {
     title: string;
     startDate: Date | string;
     endDate: Date | string;
     id: number;
     location: string;
}

const SchedulerTable: React.FC<{ data: ISchedulerTable[] }> = ({ data }) => {
     const [tableData, setTableData] = React.useState(data);
     const [addedAppointment, setAddedAppointment] = React.useState({});
     const [appointmentChanges, setAppointmentChanges] = React.useState({});
     const [editingAppointment, setEditingAppointment] =
          React.useState(undefined);
     const [currentDate, setCurrentDate] = React.useState(
          moment().format("YYYY-MM-DD")
     );

     const changeAddedAppointment = (addedAppointment: any) => {
          setAddedAppointment(addedAppointment);
     };

     const changeAppointmentChanges = (appointmentChanges: any) => {
          setAppointmentChanges(appointmentChanges);
     };

     const changeEditingAppointment = (editingAppointment: any) => {
          setEditingAppointment(editingAppointment);
     };
     //@ts-ignore
     const commitChanges = ({ added, changed, deleted }) => {
          let newData;
          if (added) {
               const startingAddedId =
                    tableData.length > 0
                         ? data[tableData.length - 1].id + 1
                         : 0;
               newData = [...data, { id: startingAddedId, ...added }];
          }
          if (changed) {
               newData = tableData.map((appointment) =>
                    changed[appointment.id]
                         ? { ...appointment, ...changed[appointment.id] }
                         : appointment
               );
          }
          if (deleted !== undefined) {
               newData = tableData.filter(
                    (appointment) => appointment.id !== deleted
               );
          }
          //@ts-ignore
          setTableData(newData);
     };
     //@ts-ignore
     const currentDateChange = (currentDate) => setCurrentDate(currentDate);
     return (
          <Paper>
               <Scheduler data={tableData} height={570}>
                    <ViewState
                         currentDate={currentDate}
                         defaultCurrentDate="2018-07-27"
                         onCurrentDateChange={currentDateChange}
                    />
                    <EditingState
                         //@ts-ignore
                         onCommitChanges={commitChanges}
                         addedAppointment={addedAppointment}
                         onAddedAppointmentChange={changeAddedAppointment}
                         appointmentChanges={appointmentChanges}
                         onAppointmentChangesChange={changeAppointmentChanges}
                         editingAppointment={editingAppointment}
                         onEditingAppointmentChange={changeEditingAppointment}
                    />
                    {/* <MonthView /> */}
                    <Toolbar />
                    <DateNavigator />
                    <TodayButton />
                    <WeekView startDayHour={0} endDayHour={23} />
                    <AllDayPanel />
                    <EditRecurrenceMenu />
                    <ConfirmationDialog />
                    <Appointments />
                    <AppointmentTooltip showOpenButton showDeleteButton />
                    <AppointmentForm />
               </Scheduler>
          </Paper>
     );
};
export default SchedulerTable;
