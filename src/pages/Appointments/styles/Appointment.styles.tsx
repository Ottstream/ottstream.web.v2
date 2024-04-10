import { Badge, Button, Flex } from 'antd';
import styled from 'styled-components';

export const CalendarViewWrapper = styled(Flex)`
  height: 100%;
  overflow: auto;

  .rbc-time-view {
    height: unset;
    min-height: unset;
  }
`;

export const Appointments = styled.div`
  background: #fff;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
  overflow: hidden;

  .breadcrumb {
    // position: sticky;
    // top: 0;
    background-color: white;
    z-index: 999;
    // margin-top: 8px;
    padding: 8px 16px;
    border-radius: 2px;
    box-shadow: 4px 0px 6px 0px rgba(10, 60, 104, 0.25);
  }
  .container {
    position: relative;
    z-index: 998;
    background-color: white;
    padding: 24px;
    height: 100%;
    width: 100%;
    overflow: hidden;

    .rbc-calendar {
      width: 100%;
      height: 100%;
      overflow: unset;
    }
    .rbc-current-time-indicator {
      background-color: red;
    }
    .month_view.rbc-calendar {
      height: calc(100vh - 150px);
    }
    .rbc-time-content {
      z-index: 9;
      overflow-y: hidden;
    }
    .rbc-time-content > * + * > * {
      border-left: none;
      margin: 0px 4px;
    }
    .rbc-day-slot {
      .rbc-event {
        border: none;
      }
      .rbc-event-label {
        display: none;
      }
      .rbc-events-container {
        margin-right: 0;
      }
    }
    .rbc-time-header {
      .rbc-allday-cell {
        display: none;
      }
    }
    .time-slot {
      .rbc-time-view {
        .rbc-time-header {
          height: 22px;
        }
      }
    }
    .rbc-month-view,
    .rbc-time-view {
      border-top: none;
      .rbc-time-header-content {
        border-left: none;
      }
      .rbc-day-bg {
        border: none;
      }
      .rbc-month-row {
        border-top: none;
        .rbc-date-cell {
          margin: 0 4px;
          padding: 4px 8px;
          border-top: 1.5px solid #ddd;
        }
        .rbc-date-cell.rbc-off-range {
          border-color: #efeded;
        }
      }
      .rbc-header {
        background-color: #fff9f9;
        border: none;
        padding: 0;
        padding-bottom: 6px;
        color: #012f57;
      }
      .rbc-month-header {
        // position: sticky;
        // top: 258px;
        z-index: 99;
        box-shadow: 1px 4px 2px -3px rgba(0, 0, 0, 0.25);
      }
      .rbc-event {
        background-color: transparent;
      }
      .rbc-current {
        color: #0c99a8;
      }
      .rbc-today {
        background-color: #f0f9f9;
      }
      .rbc-off-range-bg {
        background-color: transparent;
      }
      .rbc-off-range {
        color: rgba(0, 0, 0, 0.25);
      }
    }

    .week-view {
      .rbc-time-header {
        // position: sticky;
        // top: 258px;
        z-index: 99;
        box-shadow: 1px 4px 2px -3px rgba(0, 0, 0, 0.25);
        .rbc-label {
          display: none;
        }
      }
      .rbc-time-gutter {
        display: none;
      }
    }
    .time-slot,
    .time-slot__day {
      width: fit-content;
      margin-right: -18px;
      border-right: 1px solid #ddd;
      .rbc-time-header {
        display: none;
      }
      .rbc-time-view {
        border-right: none;
      }
      .rbc-time-header-content,
      .rbc-day-slot {
        display: none;
      }
      .rbc-time-gutter .rbc-timeslot-group:last-child {
        min-height: 52px;
      }

      .rbc-time-content {
        border-top: none;
        //margin-top: 29px;
        margin-top: 15px;
        .rbc-timeslot-group {
          border: none;
          .rbc-time-slot:nth-child(2) {
            display: none;
          }
        }
      }
    }
    .time-slot {
      > div {
        //height: 119px;
      }
    }

    .day-view {
      .rbc-time-header,
      .rbc-time-gutter {
        display: none;
      }
    }
  }
`;

export const Toolbar = styled.div`
  border: 1px solid #ddd;
  border-bottom: none;
  // position: sticky;
  // top: 64px;
  background-color: white;
  z-index: 98;
  border-top-right-radius: 7px;
  border-top-left-radius: 7px;
  .actions {
    padding-top: 4px;
    padding-right: 24px;
    .badge {
      sup {
        background: rgba(127, 216, 219, 0.15);
        color: #0c99a8;
      }
    }
    .ant-btn {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
  .picker {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-left: 24px;
    .ant-picker {
      border: none;
      cursor: pointer;
      padding: 0;
      input {
        display: none;
      }
    }
    span {
      font-weight: 600;
      color: #01b2b8;
    }
  }
  .ant-divider {
    margin-top: 4px;
    margin-bottom: 0px;
  }
  .views {
    padding: 12px 24px;
  }
`;

export const InstallerImage = styled.img`
  width: 64px;
  border-radius: 50%;
  margin-left: 48px;
  border: 3px solid ${props => props.color};
  box-shadow: 1px 4px 2px -3px rgba(0, 0, 0, 0.25);
`;

export const ViewsToolbar = styled.div`
  height: 96px;
  // position: sticky;
  // top: 162px;
  z-index: 99;
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: #fff9f9;
  border: 1px solid #ccd5dd;
  border-bottom: none;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.25);
  span {
    font-weight: 800;
    font-size: 15px;
    color: #272b2e;
  }
`;

export const AddButton = styled.button<{ isDrawerOpen: boolean }>`
  position: absolute;
  right: ${props => (props.isDrawerOpen ? '450px' : '50px')};
  transition: 0.3s;
  bottom: 50px;
  width: 56px;
  height: 56px;
  color: white;
  border-radius: 56px;
  background-color: #01b2b8;
  z-index: 999;
`;

export const EventBadge = styled(Badge)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
