import { Submission } from "../../domain/entities/submission";

type CreateChallengeSubmissionProps = {
  studentId: string;
  challengeId: string;
}

class CreateChallengeSubmission {
  execute({ studentId, challengeId }: CreateChallengeSubmissionProps) {
    const submission = Submission.create({
      studentId,
      challengeId,
    });
  }
}