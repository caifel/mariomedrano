import { ColorType, PROPORTION_MULTIPLIER } from './constants';

export const findMajorDependency = (tasks: TTask[], dependencies: string[]) => {
  let majorSize = 0;
  let majorTask: TTask | undefined;

  tasks.forEach((task) => {
    if (dependencies.includes(task.id)) {
      if (task.size > majorSize) {
        majorSize = task.size;
        majorTask = { ...task };
      }
    }
  });

  return majorTask;
};

export const findLeftPosition = (tasks: TTask[], dependencies: string[]) => {
  let majorTask = findMajorDependency(tasks, dependencies);
  let left = (majorTask?.size || 0) * PROPORTION_MULTIPLIER;

  while (majorTask?.dependencies?.length) {
    left += majorTask.size * PROPORTION_MULTIPLIER;
    majorTask = findMajorDependency(tasks, majorTask.dependencies);
  }

  return left;
};

export const getColor = (percent: number) => {
  if (percent < 20) {
    return ColorType.disabled;
  }
  if (percent < 50) {
    return ColorType.warning;
  } else if (percent < 80) {
    return ColorType.info;
  } else {
    return ColorType.success;
  }
};
