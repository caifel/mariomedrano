type TWorkingExperience = {
  current?: boolean;
  year: number;
  company: string;
  industry: string;
  role: string;
  url?: string;
};
type TEducation = {
  year: number;
  type: string;
  name: string;
  school: string;
};
type TLanguage = {
  name: string;
  level: string;
  details?: string;
  //   options: {
  //     details: [
  //       {
  //         bold: string;
  //         primary: string;
  //       }
  //     ];
  //   };
};
