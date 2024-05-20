import Project from "../models/Models/Project.js";
import User from "../models/users/User.js";
import handleError from "../utils/handleError.js";
import Todo from "../models/Models/Todo.js";
import Note from "../models/Models/Note.js";
import Event from "../models/Models/Event.js";
import Report from "../models/Models/Report.js";
import Workout from "../models/Models/Workout.js";
import Routine from "../models/Models/Routine.js";
const matchingModels = {
  projects: Project,
  workouts: Workout,
  todos: Todo,
  notes: Note,
  events: Event,
  reports: Report,
  routines: Routine,
};

const matchCollectionToModel = (collectionFromRequest) => {
  if (collectionFromRequest) {
    return matchingModels[collectionFromRequest];
  }
};

export default matchCollectionToModel;
