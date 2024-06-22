import { Delete } from "lucide-react";
import { get, post, put } from "./common";

// 유저 정보 추가
interface AddUserInfo {
  email: string;
  username: string;
  admissionYear: number;
  major: string;
  preferRegion: string;
  gender: string;
} 

export const postUserInfo = async (userInfo: AddUserInfo) => {
  const path=`/users`;
  return await post<AddUserInfo>(path, userInfo);
};

// 유저 정보 조회
interface UserRequest {
  email: string;
}

interface UserResponse {
  email: string;
  username: string;
  admissionYear: number;
  major: string;
  preferRegion: string;
  gender: string;
}

export const getUserInfo = async (email: string) => {
  const path = "/users";
  const params = { email };
  return await get<UserRequest, UserResponse>(path, params);
};

// 유저 정보 수정
interface ModifyUserInfo {
  email: string;
  username: string;
  admissionYear: number;
  major: string;
  gender: string
}

export const putUserInfo = async (userInfo: ModifyUserInfo) => {
  const path="/users";
  return await put<ModifyUserInfo>(path, userInfo);
};

// 유저 정보 삭제
export const deleteUserInfo = async () => {
  const path="/users";
  return await Delete({ path });
};

// 로그인
interface LoginInfo {
  email: string;
  username: string;
  admissionYear: number;
  major: string;
  gender: string;
  profileImage: unknown;
  preferRegion: string;
  point: number;  
} 

export const postLoginInfo = async (userInfo: LoginInfo) => {
  const path=`/users`;
  return await post<LoginInfo>(path, userInfo);
};
// 과외 신청
interface ApplyInfo {
  email: string;
  applyContent: string;
}

export const postlectureApply = async (userInfo: ApplyInfo) => {
  const path=`/apply`;
  return await post<ApplyInfo>(path, userInfo);
};

// 내 수업 - 받은 강의 신청
interface receivedApplicationRequest {
  email: string;
  status: string;
}

interface LectureResponse {
  email: string;
  profileImg: unknown;
  point: number;
  username: string;
  mentorRank: number;
}

export const getReceivedApplication = async (email: string, status: string) => {
  const path = "/myclassmentor";
  const params = { email, status };
  return await get<receivedApplicationRequest, LectureResponse>(path, params);
};

// 내 수업 - 멘토 - 신청 수락
interface AcceptInfo {
  lectureId: number;
}

export const postReceivedApplication = async (LectureInfo: AcceptInfo) => {
  const path=`/myclassmentor/accept`;
  return await post<AcceptInfo>(path, LectureInfo);
};

// 내 수업 - 멘토 - 신청 거절 
export const deleteReceivedApplication = async () => {
  const path="/myclassmentor/decline";
  return await Delete({ path });
};

// 내 수업 - 멘토 - 과외 종료
interface EndInfo {
  lectureId: number;
}

export const postEndLecture = async (LectureInfo: EndInfo) => {
  const path=`/myclassmentor/end`;
  return await post<EndInfo>(path, LectureInfo);
};

// 내 수업 - 멘티 - 내가 신청한 강의
interface AppliedLectureRequest {
  email: string;
  status: string;
}

interface AppliedLectureResponse {
  email: string;
  username: string;
  profileImg: unknown;
  gender: string;
  addmissionYear: number;
  major: string;
  lectureName: string;
  lectureType: string;
  meetType: string;
  lectureContent: string;
  preferDay: string;
  preferTime: number;
  numberOfClasses: number;
  applyContent: string;
}

export const getAppliedLecture = async (email: string, status: string) => {
  const path = "/myclass/menti";
  const params = { email, status };
  return await get<AppliedLectureRequest, AppliedLectureResponse>(path, params);
};


// 멘토 랭킹 조회
interface RankUserRequest {
  email: string;
}

interface RankUserResponse {
  email: string;
  profileImg: unknown;
  point: number;
  username: string;
  mentorRank: number;
}

export const getRankUserInfo = async (email: string) => {
  const path = "/ranking";
  const params = { email };
  return await get<RankUserRequest, RankUserResponse[]>(path, params);
};

// 멘토 목록 조회
interface MentorListRequest {
  email: string;
}

interface MentorListResponse {
  email: string;
  username: string;
  profileImg: unknown;
  point: number;
  
  mentorRank: number;
}

export const getMentorListInfo = async (email: string) => {
  const path = "/mentors";
  const params = { email };
  return await get<MentorListRequest, MentorListResponse[]>(path, params);
};

// get 평가하기 - 멘토
interface mentorReviewRequest {
  email: string;
}

interface mentorReviewResponse {
  email: string;
  username: string;
  profileImg: unknown;
  gender: string;
  admissionYear: number;
  major: string;
  preferRegion: string;
  lectureName: string;
  lectureType: string;
  meetType: string;
  lectureContent: string;
  preferDay: string;
  preferTime: string;
  numberOfClasses: number;
  point: number;
}

export const getMentorReview = async (email: string) => {
  const path = "/evaluation/mentor";
  const params = { email };
  return await get< mentorReviewRequest, mentorReviewResponse >(path, params);
};

// post 평가하기 - 멘토
interface mentorReviewInfo {
  email: string;
  Professional: boolean;
  goodTeaching: boolean;
  mentorPreparation: boolean;
  gradeGuarantee: boolean;
  mentorPunctual: boolean;
}

export const postMentorReview = async (userInfo: mentorReviewInfo) => {
  const path=`/apply/mentor`;
  return await post<mentorReviewInfo>(path, userInfo);
};

// get 평가하기 - 멘티
interface mentiReviewRequest {
  email: string;
}

interface mentiReviewResponse {
  email: string;
  username: string;
  profileImg: unknown;
  gender: string;
  admissionYear: number;
  major: string;
  preferRegion: string;
  lectureName: string;
  lectureType: string;
  meetType: string;
  lectureContent: string;
  preferDay: string;
  preferTime: string;
  numberOfClasses: number;
  point: number;
}

export const getMentiReview = async (email: string) => {
  const path = "/evaluation/mentor";
  const params = { email };
  return await get< mentiReviewRequest, mentiReviewResponse >(path, params);
};

// post 평가하기 - 멘티
interface mentiReviewInfo {
  email: string;
  Professional: boolean;
  goodTeaching: boolean;
  mentorPreparation: boolean;
  gradeGuarantee: boolean;
  mentorPunctual: boolean;
}

export const postMentiReview = async (userInfo: mentiReviewInfo) => {
  const path=`/apply/mentor`;
  return await post<mentiReviewInfo>(path, userInfo);
};