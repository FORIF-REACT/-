export interface MentorModifyForm {
  lectureName: string;
  lectureType: string;
  meetType: string;
  lectureContent: string;
  preferDay: string;
  preferTime: { hour: number, minute: number };
  numberOfClasses: number;
}
