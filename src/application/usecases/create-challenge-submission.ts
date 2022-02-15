import { Submission } from "../../domain/entities/submission";

type CreateChallengeSubmissionProps = {
  studentId: string;
  challengeId: string;
}

export class CreateChallengeSubmission {
  async execute({ studentId, challengeId }: CreateChallengeSubmissionProps) {
    const submission = Submission.create({
      studentId,
      challengeId,
    });

    return submission;
  }
}