export enum AccountTypeEnum {
  Company = 1,
  User = 2
}

export enum SocialLoginTypeEnum {
  Microsoft = 1,
  Google = 2,
  LinkedIn = 3
}

export enum ExtInvGridFiltersEnum {
  FirstName = "firstName",
  LastName = "lastName",
  Email = "email",
  InvitedDate = "invitedDate",
  InvitationStatus = "invitationStatus"
}

export enum RoleType {
  SuperAdmin = 1,
  Admin = 2,
  Scheduler = 3,
  Contributor = 4,
  Approver = 5
}

export enum InvitationStatus {
  Invited = 1,
  Activated = 2,
  Deleted = 3,
  Expired = 4
}

export enum QuestionStatusId {
  Pending = 1,
  Approved = 2,
  Rejected = 3
}

export enum QuestionDifficulty {
  Easy = 1,
  Medium = 2,
  Hard = 3
}
export enum QuestionDifficultyText {
  Easy = "Easy",
  Medium = "Medium",
  Hard = "Hard"
}

export enum QuestionTypeEnum {
  Text = 1,
}

export enum ComponentType {
  QuestionBank = 1,
  Questionnaire = 2
}

export enum ItemType {
  Category = "Category",
  Folder = "Folder",
}

export enum InterviewStatusEnum {
  Invited = 1,
  Incomplete = 2,
  Expired = 3,
  PendingEvaluation = 4,
  Rejected = 5,
  OnHold = 6,
  Shortlisted = 7,
  Archived = 8,
  Completed = 9,
  FeedbackCompleted = 10,
  Deleted = 11
}

export enum InterviewScheduleType {
  OpenInterview = 1,
  FixedSchedule = 2,
}

export enum InterviewSetupPageEnum {
  ChooseJob = "ChooseJob",
  ChooseCandidate = "ChooseCandidate",
  ChooseQuestionnaire = "ChooseQuestionnaire",
}
export enum BulkUploadStep {
  Instructions = "Instructions",
  Upload = "Upload",
  Preview = "Preview"
}

export enum CandidateGridTypeEnum {
  Pool = "Pool",
  Selected = "Selected",
}
export enum QuestionUploadKeys {
  QuestionType = 0,
  Question = 1,
  Answer = 2,
  QuestionDifficulty = 3,
  TimeToAnswer = 4,
  QuestionTypeId = 14,
  QuestionsDifficultyId = 16
}
export const QuestionUploadKeyType = new Map<number, string>([
  [QuestionUploadKeys.QuestionTypeId, 'typeId'],
  [QuestionUploadKeys.Question, 'question'],
  [QuestionUploadKeys.Answer, 'answer'],
  [QuestionUploadKeys.QuestionsDifficultyId, 'difficultyId'],
  [QuestionUploadKeys.TimeToAnswer, 'answerTime'],
  [QuestionUploadKeys.QuestionType, 'questionType'],
  [QuestionUploadKeys.QuestionDifficulty, 'questionDifficulty'],
]);


export enum CandidateInterviewPageEnum {
  Welcome = "Welcome",
  TermsAndConditions = "TermsAndConditions",
  DeviceCheck = "DeviceCheck",
  Practice = "Practice",
  Interview = "Interview",
  Feedback = "Feedback",
  ThankYou = "ThankYou"
}

export enum NotificationType {
  InterviewSetup = 1,
  InterviewComplete = 2,
  InterviewShortlisted = 3,
  InterviewRejected = 4,
  InterviewOnHold = 5,
  InterviewDeleted = 6
}
