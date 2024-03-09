export enum ColorType {
  success = '#28A745',
  warning = '#e3e3e3',
  // warning = '#FFC107',
  error = '#DC3444',
  info = '#0dcdb7',
  // info = '#0077b6',
  disabled = 'grey',

  /// TODO: Update the colors as they have a meaning.
}

export const PROPORTION_MULTIPLIER = 20;
export const BAR_AND_LABEL_HEIGHT = 60;

// At the botton of the pie chart
// a some options for:
// - Pomodoro completed!!!
// - Give me 15 more minutes
// - Give me 30 more minutes
// - More options
//    * Bad estimation, I need other pomodoro, complete this

// Every pause is a break
// So add a "Start break" button and a "End break" button
// Breaks will be of another color and time is not defined
// That color can be warning color as it is not good pomodoro to have breaks
// during the active time.
