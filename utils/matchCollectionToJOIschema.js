import validateProject from "../validation/projectJOI.js";
import validateTodo from "../validation/todoJOI.js";
import validateWorkout from "../validation/workoutJOI.js";
import validateEvent from "../validation/eventJOI.js";
import validateNote from "../validation/noteJOI.js";
import validateRoutine from "../validation/routineJOI.js";
import validateReport from "../validation/reportJOI.js";

const matchingJOI = {
  projects: validateProject,
  workouts: validateWorkout,
  todos: validateTodo,
  notes: validateNote,
  events: validateEvent,
  reports: validateReport,
  routines: validateRoutine,
};

const matchCollectionToJOIschema = (collectionFromRequest) => {
  if (collectionFromRequest) {
    return matchingJOI[collectionFromRequest];
  }
};

export default matchCollectionToJOIschema;
