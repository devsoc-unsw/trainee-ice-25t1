export type Course = {
  title: string;
  code: string;
  description: string;
  UOC: number;
  level: number;
  study_level: string;
  school: string;
  faculty: string;
  campus: string;
  equivalents: Record<string, unknown>;
  exclusions: Record<string, unknown>;
  terms: string[];
  gen_ed: boolean;
  raw_requirements: string;
  is_multiterm: boolean;
  prereq_skills?: Array<string>;
  assessment_timeline?: Record<string, Array<string>>
};

export type CourseData = {
  [courseCode: string]: Course;
};
