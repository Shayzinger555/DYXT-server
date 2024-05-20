import { findOrCreateUser } from "./models/users/usersActions.js";
import {
  createItemAction,
  getItemsByConditionAction,
  getMyCollectionItemsAction,
} from "./models/itemsActions.js";
import Routine from "./models/Models/Routine.js";
import logger from "./logger.js";
import Project from "./models/Models/Project.js";
import Report from "./models/Models/Report.js";
import Event from "./models/Models/Event.js";
const initialUsers = async () => {
  let users = [
    {
      firstName: "admin",
      middleName: "for",
      lastName: "dyxt",
      userName: "admin1",
      title: "DYXTadminTester",
      phone: "0522327557",
      email: "dyxtAdmin@gmail.com",
      password: "$2a$10$a5kCMu1zA1n.Z0zo85Dmq.U2eNYtsUeAni7mdYpywLNlAVt1yi6pi",
      state: "adgfds",
      country: "asd",
      city: "asd",
      isAdmin: true,
      createdAt: new Date("2024-04-28T15:12:14.914+00:00"),
    },
    {
      firstName: "initial",
      middleName: "regular",
      lastName: "dyxt",
      userName: "dyxtuser1",
      title: "QA",
      phone: "0522327557",
      email: "dyxtRegular@gmail.com",
      password: "$2a$10$a5kCMu1zA1n.Z0zo85Dmq.U2eNYtsUeAni7mdYpywLNlAVt1yi6pi",
      country: "asd",
      city: "asd",
      isAdmin: false,
    },
  ];
  try {
    for (let user of users) {
      let userFromDb = await findOrCreateUser(user);
      let routines = await getItemsByConditionAction(
        "user_id",
        userFromDb._id,
        Routine
      );
      if (routines.length < 1 && routines) {
        const reponse = await createItemAction(
          { schedule: {} },
          userFromDb._id,
          Routine
        );
      }
      const existingEvents = await getMyCollectionItemsAction(
        userFromDb._id,
        Event
      );
      if (existingEvents.length < 1) {
        const event = await createItemAction(
          {
            event: "Final assignment",
            date: new Date(),
          },
          userFromDb._id,
          Event
        );
      }

      //   const existingProjects = await getMyCollectionItemsAction(
      //     userFromDb._id,
      //     Project
      //   );
      //   if (existingProjects.length < 1) {
      //     const project = await createItemAction(
      //       {
      //         title: "DYXT COMMUNITY",
      //         description:
      //           "Build And integrate a work focused social media into DYXT ",
      //         createdAt: new Date("2024-04-28T15:12:14.914+00:00"),
      //         status: "Launched",
      //       },
      //       userFromDb._id,
      //       Project
      //     );
      //   }
      //   const existingReports = await getMyCollectionItemsAction(
      //     userFromDb._id,
      //     Report
      //   );
      //   if (existingReports.length < 1 || !existingReports) {
      //     const report1 = await createItemAction(
      //       {
      //         date: new Date("2024-05-19T15:12:14.914+00:00"),
      //         main: 10000,
      //         investments: 20000,
      //         savings: 30000,
      //       },
      //       userFromDb._id,
      //       Report
      //     );
      //     const report2 = await createItemAction(
      //       {
      //         date: new Date("2024-05-11T15:12:14.914+00:00"),
      //         main: 20000,
      //         investments: 30000,
      //         savings: 40000,
      //       },
      //       userFromDb._id,
      //       Report
      //     );
      //     const report3 = await createItemAction(
      //       {
      //         date: new Date("2024-05-18T15:12:14.914+00:00"),
      //         main: 10000,
      //         investments: 30500,
      //         savings: 20000,
      //       },
      //       userFromDb._id,
      //       Report
      //     );
      //   }
    }
  } catch (err) {
    logger.error(err);
    return "";
  }
};

export { initialUsers };
